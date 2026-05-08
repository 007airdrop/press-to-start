"use client";

import { useState } from "react";

export default function Home() {
  const rewards = [
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary"
  ];

  const [reward, setReward] = useState("");

  function pressButton() {
    const random =
      rewards[Math.floor(Math.random() * rewards.length)];

    setReward(random);
  }

  return (
    <main className="h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10">
        PRESS TO START
      </h1>

      <button
        onClick={pressButton}
        className="bg-green-500 px-10 py-5 rounded-xl text-2xl"
      >
        PRESS
      </button>

      {reward && (
        <div className="mt-10 text-3xl">
          You got: {reward}
        </div>
      )}
    </main>
  );
}