"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { levelUp } from "@/content/site";
import { pillClassName } from "@/lib/styles";

type ZoomableScreenshotProps = {
  image: StaticImageData;
  alt: string;
  sizes: string;
};

// Opens the screenshot at full size in a modal dialog. A click (or Enter/Space)
// works with a mouse, a keyboard and a touch screen, where hover alone would not.
export function ZoomableScreenshot({ image, alt, sizes }: ZoomableScreenshotProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Browsers disagree on where focus goes when a dialog closes (Safari does not
  // focus a clicked button), so send it back to the screenshot explicitly.
  function returnFocus() {
    triggerRef.current?.focus();
  }

  function closeOnBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative block w-full cursor-zoom-in rounded-xl"
      >
        <span className="sr-only">{levelUp.enlargeLabel}: </span>
        {/* Clipping happens on this inner wrapper, not the button, so the
            button's focus outline is not cut off. */}
        <span className="block overflow-hidden rounded-xl border border-edge">
          <Image
            src={image}
            alt={alt}
            sizes={sizes}
            placeholder="blur"
            className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </span>
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 rounded-full bg-ink px-3 py-1 text-sm text-ground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {levelUp.enlargeLabel}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClick={closeOnBackdropClick}
        onClose={returnFocus}
        className="m-auto w-[min(1280px,94vw)] rounded-2xl bg-ground text-ink backdrop:bg-black/70"
      >
        {/* The padding lives on this wrapper so that only clicks on the backdrop,
            never on the dialog's own edges, reach the dialog element and close it. */}
        <div className="grid gap-3 p-3 sm:p-4">
          <form method="dialog" className="flex justify-end">
            <button type="submit" className={pillClassName("secondary")}>
              {levelUp.closeLabel}
            </button>
          </form>
          {/* The dialog is already named by the alt text, so the image is not announced again. */}
          <Image
            src={image}
            alt=""
            sizes="(min-width: 1362px) 1248px, 94vw"
            className="max-h-[80vh] w-full rounded-xl object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
