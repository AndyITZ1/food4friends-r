import * as React from "react"

import { cn } from "@/lib/utils"

// const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

// type PillProps = React.ComponentProps<"div"> & { index: number };

function Pill({ className, ...props }: React.ComponentProps<"div">) {
  // const color = `bg-${colors[props.index % colors.length]}-500`;
  // console.log(color);
  return (
    <div
      data-slot="pill"
      className={cn(
        "flex gap-2 rounded-full border-2 py-1 shadow-sm dark:shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function PillContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

export {
  Pill,
  PillContent
}