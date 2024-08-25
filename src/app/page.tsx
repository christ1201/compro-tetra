"use client"

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div className="bg-tetra">Home Page</div>
      </main>  
    </div>
  );
}
