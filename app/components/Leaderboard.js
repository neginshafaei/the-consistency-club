export default function Leaderboard({ data }) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-cyan-400 text-[10px] font-bold mb-4 tracking-[0.4em] uppercase opacity-50">
        Global Rankings
      </h2>
      <div className="space-y-3 max-h-95 overflow-y-auto pr-2 custom-scrollbar">
        {data.map((player, index) => (
          <div
            key={player.name}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-400/30 transition-all group backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-mono text-sm">
                #{index + 1}
              </span>
              <div>
                <div className="font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {player.name}
                </div>
                {player.streak > 0 && (
                  <span className="text-[10px] bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded-full font-bold">
                    🔥 {player.streak} DAY STREAK
                  </span>
                )}
              </div>
            </div>
            <div className="font-mono text-fuchsia-500 text-sm">
              {player.score.toLocaleString()}{" "}
              <span className="text-[10px] opacity-50">XP</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
