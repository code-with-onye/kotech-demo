import { notFound, redirect } from "next/navigation";

export default async function Home() {
  redirect(notFound());
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30">
      {/* Footer Info */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm font-medium">
          <p>© 2026 Kotech Demo Platform. Built for scalability.</p>
        </div>
      </footer>
    </div>
  );
}
