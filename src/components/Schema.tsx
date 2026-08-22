import { Helmet } from "react-helmet-async";

export default function Schema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RS Assurance Group",
          "url": "https://rsassurancegroup.com",
          "logo": "https://rsassurancegroup.com/rs-horizontal.png",
          "description": "RS Assurance Group provides NDIS registration readiness, compliance and operational advisory support.",
          "areaServed": "Australia",
          "serviceType": [
            "NDIS Registration Advisory",
            "NDIS Audit Preparation",
            "NDIS Compliance Support",
            "Operational Advisory"
          ]
        }
        `}
      </script>
    </Helmet>
  );
}