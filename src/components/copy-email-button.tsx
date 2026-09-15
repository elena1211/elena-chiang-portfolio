"use client";

import { useEffect, useState } from "react";
import { pillClassName } from "@/lib/styles";

const COPIED_MESSAGE = "Email copied";
const FAILED_MESSAGE = "Couldn't copy. The address is shown above.";
const COPIED_DURATION_MS = 3000;

type CopyFeedback = {
  message: string;
  shownAt: number;
};

export function CopyEmailButton({ email }: { email: string }) {
  // A new value on every attempt restarts the timer and re-announces the message,
  // even when the same message is already showing.
  const [feedback, setFeedback] = useState<CopyFeedback | null>(null);

  useEffect(() => {
    // The failure message stays until the next attempt, so there is time to read it.
    if (feedback?.message !== COPIED_MESSAGE) {
      return;
    }

    const timer = setTimeout(() => setFeedback(null), COPIED_DURATION_MS);
    return () => clearTimeout(timer);
  }, [feedback]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setFeedback({ message: COPIED_MESSAGE, shownAt: Date.now() });
    } catch {
      // Clipboard access can be denied. The address is already visible above the
      // button, so point there instead of leaving the page for a mail app.
      setFeedback({ message: FAILED_MESSAGE, shownAt: Date.now() });
    }
  }

  // The button keeps its name and a separate status message reports the result.
  // Keying the message replaces its node, so screen readers announce a repeat too.
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
        {feedback && <span key={feedback.shownAt}>{feedback.message}</span>}
      </span>
    </span>
  );
}
