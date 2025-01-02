import { useId } from "react";

import { cn } from "@/lib/utils";

export function DotPattern({
  width = 60,
  height = 60,
  x = 0,
  y = 20,
  cx = 2,
  cy = 1,
  cr = 1,
  className="w-full h-full",
  ...props
}) {
  const id = useId();

  return (
    (<svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>)
  );
}

export default DotPattern;
