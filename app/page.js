import { redis } from "@/app/lib/redis";
import CheckInForm from "@/app/components/CheckInForm";
import Leaderboard from "@/app/components/Leaderboard";
import TechInsights from "@/app/components/TechInsights";

export default async function Home() {
  const rawData = await redis.zrange("global_leaderboard", 0, 9, {
    rev: true,
    withScores: true,
  });

  const leaderboard = await Promise.all(
    (() => {
      const res = [];
      for (let i = 0; i < rawData.length; i += 2) {
        const name = String(rawData[i]);
        const score = Number(rawData[i + 1]);
        res.push(
          (async () => {
            const streak = await redis.get(`count:${name}`);
            return { name, score, streak: Number(streak || 0) };
          })()
        );
      }
      return res;
    })()
  );

  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-6 bg-linear-to-b from-bg-main to-[#050508]">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          CONSISTENCY CLUB
        </h1>
        <p className="text-slate-500 text-[10px] tracking-[0.5em] mt-3 uppercase font-medium">
          Powered by Redis In-Memory Engine
        </p>
      </div>

      <CheckInForm />
      <Leaderboard data={leaderboard} />
      <TechInsights />
    </main>
  );
}
