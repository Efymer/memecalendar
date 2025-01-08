export function TokenDetailsLoading() {
  return (
    <div className="bg-[#0A0D14]/50  overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          {/* Image and Quick Info */}
          <div className="space-y-4">
            <div className="aspect-square w-full bg-white/5 rounded-lg animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-8 w-2/3 bg-white/5 rounded animate-pulse" />
              <div className="flex gap-2">
                <div className="h-6 w-24 bg-white/5 rounded animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full bg-white/5 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
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
      </div>
    </div>
  );
}
