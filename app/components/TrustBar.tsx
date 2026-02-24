import { config } from "@/client.config";

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5L2 4v4c0 3.3 2.5 5.8 6 6.5 3.5-.7 6-3.2 6-6.5V4L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5l1.8 3.6L14 5.8l-3 2.9.7 4.1L8 10.7l-3.7 2.1.7-4.1-3-2.9 4.2-.7L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M9.5 3.5L12.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M6 4.5L2.5 8 7 12.5l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 2.5l3 3-1.5 1.5-3-3 1.5-1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5C5.8 1.5 4 3.3 4 5.5c0 3.3 4 9 4 9s4-5.7 4-9c0-2.2-1.8-4-4-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="8" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5.5 2v3M10.5 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M2 7h12" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

const iconComponents: Record<string, React.FC> = {
  shield: ShieldIcon,
  star: StarIcon,
  hammer: HammerIcon,
  map: MapPinIcon,
  calendar: CalendarIcon,
};

export default function TrustBar() {
  return (
    <div style={{
      background: "rgba(7,11,20,0.95)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "14px 24px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px" }}>
          {config.trustBar.map((item) => {
            const Icon = iconComponents[item.icon];
            return (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {Icon && (
                  <span style={{ color: "rgba(180,83,9,0.7)", display: "flex" }}>
                    <Icon />
                  </span>
                )}
                <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
