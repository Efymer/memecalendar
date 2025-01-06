export function SiteFooter() {
  return (
    <footer className="border-t border-[#1a2333] bg-[#0A0D14] py-6 mt-auto absolute bottom-0 w-full">
      <div className="container flex flex-col items-center gap-2 text-center text-sm text-white/50 font-mono">
        <p>© {new Date().getFullYear()} MemeCalendar. All rights reserved.</p>
        <p>This website is not affiliated with or endorsed by memejob.fun</p>
      </div>
    </footer>
  );
}
