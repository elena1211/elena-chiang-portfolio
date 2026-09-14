"use client";

import { useEffect, useState } from "react";
import { pillClassName } from "@/lib/styles";

const FEEDBACK_DURATION_MS = 3000;

export function CopyEmailButton({ email }: { email: string }) {
  // A new value on every successful copy restarts the feedback timer,
  // even when "Email copied" is already showing.
  const [copiedAt, setCopiedAt] = useState<number | null>(null);

  useEffect(() => {
    if (copiedAt === null) {
      return;
    }

    const timer = setTimeout(() => setCopiedAt(null), FEEDBACK_DURATION_MS);
    return () => clearTimeout(timer);
  }, [copiedAt]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedAt(Date.now());
    } catch {
      // Clipboard access can be denied; opening the mail app still gets the visitor there.
      window.location.href = `mailto:${email}`;
    }
  }

  // The button keeps its name and a separate status message reports the result,
  // so screen readers announce the copy once.
  return (
    <span className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={copyEmail}
        className={pillClassName("secondary")}
      >
        Copy email
      </button>
      <span role="status" className="text-sm text-soft">
        {copiedAt === null ? "" : "Email copied"}
      </span>
    </span>
  );
}
