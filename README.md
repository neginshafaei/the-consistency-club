
# Consistency Club
**A Real-time Gamified Ranking System built with Next.js 16 & Redis.** [Demo](https://the-consistency-club.vercel.app/)

This project is a high-performance showcase of how to implement **Gamification logic** (Daily Streaks & Leaderboards) using **Redis** as a primary in-memory data engine, ensuring sub-millisecond latency.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![Redis](https://img.shields.io/badge/Redis-Upstash-DC382D?style=flat-square&logo=redis)

## Key Features
- **Daily Streak System:** Intelligent logic to track consecutive logins using Redis strings and date-based verification.
- **Live Leaderboard:** Real-time ranking updates using Redis **Sorted Sets (ZSet)**, providing $O(\log N)$ performance for millions of users.
- **Neon UI/UX:** A modern, high-end interface built with **Tailwind CSS v4** featuring glassmorphism and neon aesthetics.
- **Serverless Architecture:** Optimized for Vercel/Serverless environments using Next.js Server Actions.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database:** Upstash Redis (In-memory storage)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel

## Redis Strategy (The Showcase)
Unlike traditional SQL databases, this project leverages Redis data structures to handle heavy computations:
- **`ZINCRBY`**: Atomic score updates for the leaderboard.
- **`ZRANGE`**: Efficiently fetching the top players with high-speed pagination.
- **`GET/SET`**: Managing user streaks and last check-in timestamps with minimal overhead.

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/neginshafaei/the-consistency-club.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file and add your Upstash Redis credentials:
   ```env
   UPSTASH_REDIS_REST_URL=your_url
   UPSTASH_REDIS_REST_TOKEN=your_token
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

I built this to demonstrate my ability to integrate **In-memory databases** into a **Full-stack React environment**. It highlights my focus on **Performance**, **Real-time UX**, and **Modern UI Design**.
