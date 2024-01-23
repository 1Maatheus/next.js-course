import Link from "next/link";
import React from "react";

const ShareMealPage = () => {
  return (
    <div className="text-center">
      <h1>Share Page</h1>

      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </div>
  );
};

export default ShareMealPage;
