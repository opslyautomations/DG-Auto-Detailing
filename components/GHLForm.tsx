interface GHLFormProps {
  className?: string;
}

export default function GHLForm({ className = "" }: GHLFormProps) {
  return (
    <div
      className={`ghl-form-container rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ${className}`}
      style={{ minHeight: "1100px" }}
    >
      <iframe
        src="https://api.opslyautomations.com/booking/dg-car-detailing-zerhza1hzz9?heightMode=fixed&showHeader=false"
        style={{ width: "100%", height: "1100px", border: "none", overflow: "hidden", minHeight: "1100px" }}
        scrolling="no"
        id="Z48P3v4VaWrAZifhwqd9_1783720246857"
        title="Book a Mobile Auto Detail with DG Detailing"
        aria-label="Booking calendar for DG Detailing mobile auto detail services"
      />
    </div>
  );
}
