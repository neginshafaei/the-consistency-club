export default function TechInsights() {
  const insights = [
    {
      title: "Real-time Ranking",
      tech: "Redis Sorted Sets (ZSET)",
      desc: "Scores are updated with O(log N) complexity. Unlike SQL, ranking millions of users happens in milliseconds.",
      command: "ZINCRBY leaderboard 10 user_1",
    },
    {
      title: "Daily Streak Logic",
      tech: "Redis Strings & Keys",
      desc: "Uses a 'Last-Checkin' timestamp to verify consistency without complex table joins.",
      command: "SET last_checkin:user_1 2023-10-27",
    },
    {
      title: "High Performance",
      tech: "In-Memory Storage",
      desc: "All data lives in RAM. This UI reflects the server state instantly with zero DB lag.",
      command: "Latency: < 1ms",
    },
  ];

  return (
    <div className="w-full max-w-5xl mt-16 p-6 border-t border-white/10">
      <h3 className="text-fuchsia-500 text-xs font-bold mb-6 tracking-[0.3em] uppercase text-center">
        Under the Hood (System Design)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-400/20 transition-all group"
          >
            <div className="text-[11px] text-cyan-400 font-mono mb-2 uppercase tracking-tighter">
              {item.tech}
            </div>
            <h4 className="text-gray-200 font-bold text-sm mb-2">
              {item.title}
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              {item.desc}
            </p>
            <div className="bg-black/60 p-2 rounded font-mono text-[10px] text-green-400/80 border border-green-400/10">
              {item.command}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-400 font-mono italic">
          Built with Next.js 16 + Tailwind 4 + Upstash Redis
        </div>
      </div>
    </div>
  );
}
