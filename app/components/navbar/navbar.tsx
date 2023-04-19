import Image from "next/image";
import Link from "next/link";

export default function DesktopNavBar() {
  return (
    <>
      <div className="flex items-center w-full h-12 pl-2 pr-2 min-w-fit bg-surface-primary">
        <div className="flex items-center space-x-2 min-w-fit">
          <div className="flex min-w-[130px] space-x-1">
            <Link href={"/"}>
              <Image
                height={48}
                width={130}
                src={"/logo_white_name.png"}
                alt={"PoeStack"}
              />
            </Link>
          </div>
          <Link className="font-semibold hover:text-content-accent" href={`/`}>
            <h3>Home</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
