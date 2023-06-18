"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import LoadingSpinner from "@/components/loading/loading-spinner";

export default function Dominos() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Spline
        onLoad={() => setLoading(false)}
        scene="https://prod.spline.design/uVfQ1BkpLP0QhXVU/scene.splinecode"
      />
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </>
  );
}
