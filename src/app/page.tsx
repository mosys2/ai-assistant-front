// app/page.tsx

import EnamadSeal from "@/components/ui/Enamad";

export default function HomePage() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">   هوشیوا | Hooshiva.ir</h1>
      <p className="text-lg text-gray-600 mb-6">هوشیوا، یه دوست باهوش!</p>
      <a
        href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        برو به داشبورد
      </a>
      
    </main>
    <footer>
    {/* Other footer content */}
    <EnamadSeal />
  </footer>
  </>
  );
}
