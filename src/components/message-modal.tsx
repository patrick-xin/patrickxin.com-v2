"use client";

import { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircledIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import useToastStore from "@/store/toast";

const toastTypes = {
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-600",
};

const positions = {
  topCenter: "top-4 mx-auto right-0 left-0",
  topRight: "top-4 right-4",
  bottomCenter: "bottom-4 right-0 left-0 mx-auto",
  bottomRight: "bottom-4 right-0",
};

const variants = {
  fadeLeft: {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: "100%",
    },
  },
  fadeUp: {
    initial: {
      opacity: 0,
      y: 16,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "-100%",
    },
  },
};

const MessageModal = () => {
  const { closeToast, isToastOpen, position, toastType, message, direction } =
    useToastStore();

  const completeButtonRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isToastOpen, closeToast]);

  return (
    <AnimatePresence>
      {isToastOpen && (
        <motion.div
          key={toastType}
          variants={variants[direction]}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed z-100 flex h-16 w-80 items-center rounded-md text-white ${positions[position]} ${toastTypes[toastType]}`}
        >
          <div className="ml-4 mr-2">
            {toastType === "warning" && (
              <InfoCircledIcon className="h-4 w-4 text-zinc-100" />
            )}
            {toastType === "success" && (
              <CheckCircledIcon className="h-4 w-4 text-zinc-100" />
            )}
            {toastType === "error" && (
              <ExclamationTriangleIcon className="h-4 w-4 text-zinc-100" />
            )}
          </div>

          {message && (
            <p className="mx-2 text-sm font-medium leading-6">{message}</p>
          )}

          <button
            ref={completeButtonRef}
            type="button"
            className="absolute right-3 top-2"
            onClick={closeToast}
          >
            <Cross1Icon className="h-3 w-3 text-zinc-100" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageModal;
