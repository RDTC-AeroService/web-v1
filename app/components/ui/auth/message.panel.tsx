"use client";

import { useState } from "react";

type MessagePanelProps = {
  loginError: string;
  onClearLoginError?: () => void;
};

function MessagePanel({ loginError, onClearLoginError }: MessagePanelProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      onClearLoginError?.();
      setIsClosing(false);
    }, 220);
  };

  return (
    <div
      className={`absolute bottom-6 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-red-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-8 sm:right-8 ${isClosing ? "auth-message-panel-out" : "auth-message-panel-in"}`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
          !
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-red-700">Login failed</p>
          <p className="mt-1 text-sm text-red-600">{loginError}</p>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="rounded-md px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-50"
          aria-label="Dismiss login error"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MessagePanel;
