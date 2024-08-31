"use client"

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div
        className="bg-black bg-opacity-50 bg-cover bg-center h-40 w-full"
        style={{ backgroundImage: "url(/img/container.png)" }}
      >
        <div className="text-5xl text-center pt-14 text-white font-bold bg-black bg-opacity-30 h-full">
          About Us
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>About Page</div>
      </main>  
    </div>
  );
}
