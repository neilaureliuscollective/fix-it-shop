"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

const DISMISS_KEY = "fis-install-dismissed";

// Offers "add to home screen" once, quietly: native prompt on Android/Chrome,
// short instructions on iOS Safari. Never shown inside the installed app.
export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {}
    if (standalone || dismissed) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setOpen(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent);
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isIos) {
      timer = setTimeout(() => {
        setIos(true);
        setOpen(true);
      }, 12000);
    }
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Add The Fix-It Shop to your home screen"
      className="fixed inset-x-4 top-[calc(env(safe-area-inset-top)+5rem)] z-50 mx-auto max-w-sm border border-gold/30 bg-ink/95 p-5 shadow-2xl backdrop-blur-xl"
    >
      <p className="font-display text-xl text-stone">Keep the shop on your phone.</p>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        {ios ? (
          <>
            Tap <span className="text-stone">Share</span>, then <span className="text-stone">Add to Home Screen</span>.
            One tap to book, every time.
          </>
        ) : (
          "Add The Fix-It Shop to your home screen. One tap to book, every time."
        )}
      </p>
      <div className="mt-4 flex gap-3">
        {!ios && deferred && (
          <button
            onClick={install}
            className="bg-gold px-4 py-2.5 text-[0.65rem] font-bold tracking-[0.25em] text-carbon uppercase hover:bg-gold-bright"
          >
            Install
          </button>
        )}
        <button
          onClick={dismiss}
          className="px-4 py-2.5 text-[0.65rem] font-bold tracking-[0.25em] text-mist uppercase hover:text-stone"
        >
          {ios ? "Got it" : "Not now"}
        </button>
      </div>
    </div>
  );
}
