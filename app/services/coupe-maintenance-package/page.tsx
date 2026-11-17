import type { Metadata } from "next";
import MaintenancePage, { maintenanceMetadata } from "@/components/MaintenancePage";
import { getMaintenanceBySlug } from "@/lib/maintenance";

const pkg = getMaintenanceBySlug("coupe-maintenance-package")!;

export const metadata: Metadata = maintenanceMetadata(pkg);

export default function Page() {
  return <MaintenancePage pkg={pkg} />;
}
