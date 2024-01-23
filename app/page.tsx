import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center mt-10 text-2xl">
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>

      <p>
        <Link href="/meals">Meals</Link>
      </p>

      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>

      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
