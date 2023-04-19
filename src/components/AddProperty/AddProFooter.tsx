import { useRouter } from "next/navigation";
import React from "react";

export default function AddProFooter() {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div>
        <button type="button">Back</button>
      </div>
      <div>
        <button type="button" onClick={() => router.push("/addlist/step2")}>
          Next
        </button>
      </div>
    </div>
  );
}
