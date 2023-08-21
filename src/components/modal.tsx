"use client";

import type {
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
} from "react";
import React, { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModalChildProps {
  onDismiss: () => void;
}

interface ModalProps {
  children: ReactElement<ModalChildProps> | ReactElement<ModalChildProps>[];
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleDismiss = useCallback(() => {
    if (onDismiss) onDismiss();
  }, [onDismiss]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        handleDismiss();
      }
    },
    [handleDismiss, overlay, wrapper],
  );
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleDismiss();
    }
  };
  const onEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onDismiss });
    }
    return child;
  });
  useEffect(() => {
    document.addEventListener("keydown", onEscKeyDown);
    return () => document.removeEventListener("keydown", onEscKeyDown);
  }, [onEscKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-100 mx-auto cursor-default bg-black/60 backdrop-blur"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 cursor-default"
      >
        {childrenWithProps}
      </div>
    </div>
  );
}
