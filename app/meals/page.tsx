import Link from "next/link";
import React from "react";

const Meals = () => {
  return (
    <div className="text-center">
      <h1>Meals</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
    </div>
  );
};

export default Meals;
