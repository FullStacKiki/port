import { cn } from "@/lib/utils";
import Marquee from "../components/ui/marquee";

const reviews = [
  {
    name: "React",
    img: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
  },
  {
    name: "Html",
    img: "https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Tailwind",
    img: "https://static-00.iconduck.com/assets.00/tailwindcss-icon-icon-1024x615-2e98imbv.png",
  },
  {
    name: "JavaScript",
    img: "https://i.pinimg.com/originals/a3/e2/18/a3e21834809a55797f014498b8c345bf.png",
  },
  {
    name: "Css",
    img: "https://hamedzarei.github.io/WebGL/images/html5.png",
  },
  {
    name: "PostgreSQL",
    img: "https://th.bing.com/th/id/OIP.IEgGsRwougUKXE26RKJVagHaHo?rs=1&pid=ImgDetMain",
  },
  {
    name: "Python",
    img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png",
  },
  {
    name: "C++",
    img:"https://www.dreamlogic.io/img/brands/logos/cpp.png",
  },
  {
    name: "Arduino",
    img:"https://www.freeiconspng.com/uploads/arduino-icon-2.png",
  },
  {
    name: "Shadcn/Ui",
    img:"https://suhelmakkad.gallerycdn.vsassets.io/extensions/suhelmakkad/shadcn-ui/0.1.1/1695843310552/Microsoft.VisualStudio.Services.Icons.Default",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-transparent mt-[-70px]">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2/4 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}