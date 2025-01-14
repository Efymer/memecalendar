export function LoadingHallOfFame() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bg-[#0A0D14]/50 border border-[#1a2333] rounded-lg overflow-hidden"
        >
          <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 overflow-hidden rounded-lg border border-[#1a2333] aspect-square"></div>
              <div className="md:grid grid-cols-10 gap-6 ml-4 flex-grow">
                <div className="col-span-2 space-y-1 flex flex-col items-start">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-2/4 bg-white/5 rounded" />
                </div>
                <div className="col-span-2 space-y-1 self-center">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-2/4 bg-white/5 rounded" />
                </div>
                <div className="col-span-2 space-y-1 self-center">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-2/4 bg-white/5 rounded" />
                </div>
                <div className="col-span-2 space-y-1 self-center">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-2/4 bg-white/5 rounded" />
                </div>
                <div className="col-span-2 space-y-1 self-center">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-2/4 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
