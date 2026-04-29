import { Shield, Car, Droplets, Clock, Star, CalendarCheck } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "6+ Years in Business" },
  { icon: Car, label: "1,500+ Vehicles Detailed" },
  { icon: CalendarCheck, label: "Mobile — We Come to You" },
  { icon: Droplets, label: "Hand-Wash Only" },
  { icon: Shield, label: "6-Month Protection Available" },
  { icon: Star, label: "Monthly Maintenance Plan" },
];

export default function TrustBar() {
  return (
    <section
      className="bg-[#161616] border-y border-white/10 py-8"
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
                >
                  <Icon size={20} style={{ color: "#00B8E6" }} />
                </div>
                <span className="text-xs font-medium text-gray-300 leading-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
