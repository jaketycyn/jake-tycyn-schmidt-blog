import { useState, useEffect } from "react";
import Image from "next/image";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const imageData = [
  {
    id: 4,
    src: "/galleryImages/Seattle-001-Edit.jpg",
    rowSpan: 1,
  },

  {
    id: 2,
    src: "/galleryImages/Hues_of_SM_Beach_Sunset.jpg",
    rowSpan: 1,
  },

  {
    id: 6,
    src: "/galleryImages/SF_Oceanview.jpg",
    rowSpan: 1,
  },
  {
    id: 1,
    src: "/galleryImages/Hues_of_SF_downtown_Sunset.jpg",
    rowSpan: 2,
  },

  {
    id: 3,
    src: "/galleryImages/Kyrie-NightStalker-min.jpg",
    rowSpan: 1,
  },
  {
    id: 12,
    src: "/galleryImages/Nightcall-Kyrie-03-insta-1200x1500.jpg",
    rowSpan: 1,
  },
  {
    id: 2,
    src: "/galleryImages/Gurchit_004_Funk_1000x1500.jpg",
    rowSpan: 1,
  },
  {
    id: 2,
    src: "/galleryImages/20170201_ReflectionsGurchit_01_1500x1000.jpg",
    rowSpan: 1,
  },
  {
    id: 6,
    src: "/galleryImages/Nightcall-Kyrie-05-Glitchart-1500x1000.jpg",
    rowSpan: 1,
  },
  {
    id: 6,
    src: "/galleryImages/2018-85MMTests-01-1080x864.jpg",
    rowSpan: 1,
  },
  {
    id: 11,
    src: "/galleryImages/Silhouette-of-a-Skater-New.jpg",
    rowSpan: 1,
  },
  {
    id: 12,
    src: "/galleryImages/Footsteps.jpg",
    rowSpan: 1,
  },

  {
    id: 1,
    src: "/galleryImages/Danielle-LaPiedra-04C-final-1200x1500.jpg",
    rowSpan: 1,
  },
];

const Gallery = () => {
  const [dimensions, setDimensions] = useState(null);
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="grid grid-cols-1 gap-4 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 grid-auto-rows-20 auto-cols-auto">
      {imageData.map((item, index) => {
        return (
          <a href="#" className="group" key={index}>
            <div className={`w-full overflow-hidden row-span-${item.rowSpan}`}>
              <Image
                alt="Image"
                src={item.src}
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "contain" }}
                className={cn(
                  "group-hover:scale-110 duration-700 ease-in-out w-full h-auto",
                  isLoading
                    ? "grayscale blur-2xl scale-110"
                    : "grayscale-0 blur-0 scale-100"
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Gallery;
