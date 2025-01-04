import IconCloud from "@/components/ui/icon-cloud";

const slugs = [

  "javascript",
  "react",
  "html5",
  "css3",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "python",
  "c++",
  "sql",
  "shadcn/ui",
  "tailwindcss",
  "magicui",
];

export function IconCloudDemo() {
  return (
    <div className="relative  hidden sm:flex size-full max-w-xs items-center justify-center overflow-hidden rounded-lg  bg-background px-5 pb-10 pt-8  sm:w-40 sm:h-40">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
