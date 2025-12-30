"use server";
import { redis } from "@/app/lib/redis";
import { revalidatePath } from "next/cache";

export async function checkInAction(formData) {
  const username = String(formData.get("username") || "").trim();
  if (!username) return;

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  const lastCheckinKey = `last_checkin:${username}`;
  const countKey = `count:${username}`;
  const leaderboardKey = "global_leaderboard";

  const lastCheckin = await redis.get(lastCheckinKey);

  await redis.zincrby(leaderboardKey, 10, username);

  if (lastCheckin === today) {
  } else if (lastCheckin === yesterday) {
    await redis.incr(countKey);
  } else {
    await redis.set(countKey, 1);
  }

  await redis.set(lastCheckinKey, today);

  revalidatePath("/");
}
