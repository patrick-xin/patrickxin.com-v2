"use client";

import { Button } from "@/components/ui/button";
import useToastStore from "@/store/toast";

const ToastForPost = () => {
  const { toast } = useToastStore();
  return (
    <span className="mx-4 inline-flex gap-4">
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast.success("I'm a success message!", {
            position: "topRight",
            direction: "fadeLeft",
          })
        }
      >
        success
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast.error("Opps, something went wrong!", {
            position: "topCenter",
            direction: "fadeUp",
          })
        }
      >
        error
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast.warning("You've been warned!", {
            position: "bottomRight",
            direction: "fadeLeft",
          })
        }
      >
        warning
      </Button>
    </span>
  );
};

export default ToastForPost;
