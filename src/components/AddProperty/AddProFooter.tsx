import { useRouter } from "next/navigation";
import React from "react";

export default function AddProFooter(): JSX.Element {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div>
        <button type="button">Back</button>
      </div>
      <div>
        <button type="button" onClick={(): void => router.push("/addlist/step2")}>
          Next
        </button>
      </div>
    </div>
  );
}
