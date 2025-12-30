import { checkInAction } from "@/app/actions";

export default function CheckInForm() {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl bg-white/3 backdrop-blur-xl border border-slate-800 shadow-[0_0_30px_rgba(0,243,255,0.1)] mb-10">
      <form action={checkInAction} className="flex flex-col gap-4">
        <input
          name="username"
          placeholder="Enter Username..."
          className="bg-black/20 border border-slate-800 p-3 rounded-lg focus:outline-none focus:border-cyan-400 text-white transition-all"
          required
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black font-bold p-3 rounded-lg hover:bg-cyan-300 active:scale-95 transition-all cursor-pointer shadow-[0_5px_15px_rgba(0,243,255,0.3)]"
        >
          GET XP +10 ⚡
        </button>
      </form>
    </div>
  );
}
