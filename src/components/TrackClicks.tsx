"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Global click tracker for GA4.
 *
 * Automatically recognises these links — no data-track attribute needed:
 *   - Resume (Google Drive link whose text says "Resume") → resume_download
 *   - LinkedIn                                            → contact_click { method: "linkedin" }
 *   - mailto:                                             → contact_click { method: "email" }
 *   - /work/[slug]                                        → case_open     { slug }
 *   - Any other external link                             → outbound_click { url }
 *
 * Every event also gets:
 *   section: nav | footer | hero | selected_work | page
 *   page:    the path the click happened on (e.g. "/", "/design", "/about")
 *
 * To track something custom, add data-track="event_name" to the element.
 * Extra params: data-track-xxx="value" → param xxx.
 */

type Params = Record<string, string>;

function getSection(el: HTMLElement): string {
  if (el.closest("nav")) return "nav";
  if (el.closest("footer")) return "footer";
  if (el.closest(".polaroid")) return "hero";
  if (el.closest(".case-card")) return "selected_work";
  return "page";
}

function classifyLink(a: HTMLAnchorElement): { name: string; params: Params } | null {
  const href = a.getAttribute("href") || "";
  const text = (a.textContent || "").trim().toLowerCase();

  if (href.startsWith("mailto:")) {
    return { name: "contact_click", params: { method: "email" } };
  }
  if (href.includes("linkedin.com")) {
    return { name: "contact_click", params: { method: "linkedin" } };
  }
  if (href.includes("drive.google.com") && text.includes("resume")) {
    return { name: "resume_download", params: {} };
  }

  const workMatch = href.match(/^\/work\/([^/?#]+)/);
  if (workMatch) {
    return { name: "case_open", params: { slug: workMatch[1] } };
  }

  if (/^https?:\/\//.test(href) && !href.includes("jenniezeng.com")) {
    return { name: "outbound_click", params: { url: href } };
  }

  return null;
}

export function TrackClicks() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      let name: string | null = null;
      let params: Params = {};
      let source: HTMLElement | null = null;

      // 1) Manual tag wins
      const tagged = target.closest<HTMLElement>("[data-track]");
      if (tagged) {
        source = tagged;
        name = tagged.dataset.track || null;
        for (const [key, value] of Object.entries(tagged.dataset)) {
          if (key.startsWith("track") && key !== "track" && value) {
            const p = key.slice(5);
            params[p.charAt(0).toLowerCase() + p.slice(1)] = value;
          }
        }
      } else {
        // 2) Automatic link detection
        const a = target.closest<HTMLAnchorElement>("a[href]");
        if (!a) return;
        const result = classifyLink(a);
        if (!result) return;
        source = a;
        name = result.name;
        params = result.params;
      }

      if (!name || !source) return;

      sendGAEvent("event", name, {
        section: getSection(source),
        page: window.location.pathname,
        ...params,
      });
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}