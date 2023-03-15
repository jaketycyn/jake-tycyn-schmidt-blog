import Image from "next/image";
import Link from "next/link";

const WorkPage = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-20 text-center font-semibold">
      <div className="bg-orange-400/10 rounded-lg shadow-lg p-2 hover:scale-105 transition transition-900">
        <Link href="https://poestack.com/">
          <div className="relative rounded-lg ">
            <Image
              src={"/images/char_profile_004_inside_16x9.png"}
              width="600"
              height="700"
              alt="poestack"
            />
          </div>
          <div className="relative w-4/5 flex flex-col items-center mx-auto">
            <h4 className="">PoeStack</h4>
            <p className="text-left">
              An application designed to increase the amount of information the
              average POE player has access to.
            </p>
          </div>
        </Link>
      </div>
      <div className="bg-orange-400/10 rounded-lg shadow-lg p-2 hover:scale-105 transition transition-900">
        <Link href="https://shortlists-mobile.vercel.app/">
          <div className="relative rounded-lg w-full h-96">
            <Image
              src={"/images/shortlists_homepage.png"}
              width="600"
              height="700"
              alt="shortlists"
            />
            <div className="relative w-4/5 flex flex-col items-center mx-auto">
              <h4 className="">Shortlists</h4>
              <p className="text-left">
                An application that incorporates oAuth authentication, allowing
                users to exchange lists and items with each other. Also includes
                the feature of adding and finding other users to a friend&apos;s
                list.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkPage;
