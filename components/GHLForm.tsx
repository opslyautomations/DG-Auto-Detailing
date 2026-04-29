interface GHLFormProps {
  className?: string;
}

export default function GHLForm({ className = "" }: GHLFormProps) {
  return (
    <div
      className={`ghl-form-container rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ${className}`}
      style={{ minHeight: "720px" }}
    >
      <iframe
        src="https://api.opslyautomations.com/widget/service-menu/69f11b25a3cc5ec62ba49c5c"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "720px" }}
        scrolling="no"
        id="69f11b25a3cc5ec62ba49c5c_1777419493246"
        title="Book a Mobile Auto Detail with DG Detailing"
        aria-label="Booking form for DG Detailing mobile auto detail services"
      />
    </div>
  );
}
