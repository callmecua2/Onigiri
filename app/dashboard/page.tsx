import Sidebar from "@/components/sidebar/Sidebar";


export default function DashboardLayout() {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 overflow-hidden">
      {/* Navbar - Tetap di atas */}
      <header className="flex justify-center items-center bg-black w-full h-16 shrink-0 z-20 shadow-md">
        <h1 className="text-white text-xl font-semibold tracking-wide">
          Copyright by Onigi@2026
        </h1>
      </header>

      {/* Main Wrapper */}
      <div className="w-full flex flex-1 overflow-hidden">
        {/* Sidebar - Aside bertindak sebagai shell */}
        <aside className="w-72 bg-[#263238] flex flex-col shrink-0">
          <Sidebar />
        </aside>

        {/* Main Content - Area scrollable */}
        <main className="flex-1 bg-[#F4F7F9] p-8 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600">Konten utama dirender di sini.</p>
          </div>
        </main>
      </div>
    </div>
  );
}