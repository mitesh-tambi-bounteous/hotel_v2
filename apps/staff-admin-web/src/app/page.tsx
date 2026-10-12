import { AppShell } from "@/components/app-shell";

export default function DashboardPage() {
  return (
    <AppShell>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-600">
        Staff admin home. Rooms, bookings, rates, and guests will surface here.
      </p>
    </AppShell>
  );
}
