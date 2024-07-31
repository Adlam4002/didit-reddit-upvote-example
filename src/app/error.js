"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex flex-col space-y-3 p-24 items-center text-xl">
      <h1>We&apos;ve broken something, please return home 🙈</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-pink-300 text-black px-3 py-2 rounded hover:bg-zinc-300"
      >
        Try again
      </button>
    </div>
  );
}
