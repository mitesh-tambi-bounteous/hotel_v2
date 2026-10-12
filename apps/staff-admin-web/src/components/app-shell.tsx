const NAV_ITEMS = ["Rooms", "Bookings", "Rates", "Guests"];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 border-r border-gray-200 bg-white">
        <div className="px-4 py-4 text-sm font-semibold">Staff Admin</div>
        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-12 items-center justify-end border-b border-gray-200 px-4 text-sm text-gray-500">
          Account
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
