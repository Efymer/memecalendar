export function LoadingState() {
  return (
    <>
      <div className="flex items-center gap-2 overflow-x-auto font-mono pt-2">
        <div className="h-9 px-4 py-2 w-28 bg-white/5 rounded" />
        <div className="h-9 px-4 py-2 w-28 bg-white/5 rounded" />
        <div className="h-9 px-4 py-2 w-28 bg-white/5 rounded" />
      </div>
      <div className="space-y-2 pt-2">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="bg-[#1a2333]/30 border border-[#1a2333] rounded-lg overflow-hidden animate-pulse"
          >
            <div className="bg-[#1a2333] px-4 py-2 flex items-center justify-between">
              <div className="h-4 w-32 bg-white/5 rounded" />
              <div className="h-4 w-20 bg-white/5 rounded" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-white/5 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-1/2 bg-white/5 rounded" />
                  <div className="h-4 w-1/4 bg-white/5 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-5/6 bg-white/5 rounded" />
              </div>
              <div className="flex gap-2">
                <div className="h-4 w-20 bg-white/5 rounded" />
                <div className="h-4 w-20 bg-white/5 rounded" />
                <div className="h-4 w-20 bg-white/5 rounded" />
              </div>
              <div className="pt-4 border-t border-[#1a2333] flex justify-between">
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-white/5 rounded" />
                  <div className="h-8 w-24 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-white/30 font-mono text-sm">
        <div
          className="h-1.5 w-1.5 rounded-full bg-current animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="h-1.5 w-1.5 rounded-full bg-current animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="h-1.5 w-1.5 rounded-full bg-current animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </>
  );
}
