"use client";

import Image from "next/image";

export default function Home() {
  const spin = () => {};
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-white p-24">
      <div className="absolute top-[4rem]">
        {" "}
        <h1 className="text-6xl text-stone-800"> Should? </h1>
      </div>
      <div className="flex h-[40rem] w-[40rem] items-center justify-center rounded-full bg-black"></div>
      <div className="absolute bottom-[4rem] rounded-full bg-stone-800">
        <button className="rounded-full p-8 text-3xl"> Click me! </button>
      </div>
    </main>
  );
}
