import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="text-center">
      <h1>Community</h1>

      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
    </div>
  );
};

export default Community;
