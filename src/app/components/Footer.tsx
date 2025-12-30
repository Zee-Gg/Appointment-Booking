"use client"
export default function Footer() {
  return (
    <footer className="py-6 bg-white border-t border-slate-200 text-center text-slate-500">
      <p>© {new Date().getFullYear()} Dr. Ayesha Khan | All Rights Reserved</p>
      <p className="mt-2 text-sm">
        Designed with ❤️ for better healthcare
      </p>
    </footer>
  )
}
