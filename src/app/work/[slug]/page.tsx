import { notFound } from "next/navigation";
import KadoSubscriptionPage from "../kado-subscription/page";
import GeoMonitoringPage from "../geo-monitoring/page";
import DiscoveryReadingPage from "../kadokawa-discovery-reading/page";
import CreatorCenterPage from "../kadokawa-creator-center/page";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case "kado-subscription":
      return <KadoSubscriptionPage />;
    case "geo-monitoring":
      return <GeoMonitoringPage />;
    case "kadokawa-discovery-reading":
      return <DiscoveryReadingPage />;
    case "kadokawa-creator-center":
      return <CreatorCenterPage />;
    default:
      return notFound();
  }
}