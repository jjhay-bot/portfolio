export default function About() {
  return (
    <>
      <div className="reveal mb-6">
        <p className="text-caption text-foreground-secondary mb-2">Toolkit</p>
        <h2>Tools change. Product thinking stays.</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        <ToolsCard
          title="Frontend"
          items={["React", "Next.js", "JavaScript", "MUI", "Redux", "Responsive UI"]}
        />
        <ToolsCard
          title="Backend & Data"
          items={["Node.js", "Express", "Supabase", "PostgreSQL", "REST", "GraphQL"]}
        />
        <ToolsCard
          title="Product Domains"
          items={["Logistics", "IAM/KYC", "Warehouse", "Booking", "Marketplace", "WebView"]}
        />
      </div>
    </>
  );
}

function ToolsCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="skill-group card-base">
      <h6>{title}</h6>
      <div className="mt-2 text-sm text-muted">{items.join(" · ")}</div>
    </div>
  );
}
