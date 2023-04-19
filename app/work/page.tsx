import Image from "next/image";
import Link from "next/link";

const WorkPage = () => {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 gap-10 mt-20 font-semibold text-center lg:grid-cols-2">
        <div className="h-full p-2 mx-auto transition duration-500 rounded-lg shadow-lg bg-orange-400/10 hover:scale-105 ">
          <Link href="https://poestack.com/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div className="relative rounded-lg ">
                <Image
                  src={"/images/char_profile_004_inside_16x9.png"}
                  width="600"
                  height="700"
                  alt="poestack"
                  className="justify-center"
                />
              </div>
              <div className="relative flex flex-col items-center w-4/5 mx-auto mt-2">
                <h4 className="font-serif text-xl font-bold">PoeStack</h4>
                <p className="font-mono text-sm text-left">
                  An application designed to increase the amount of information
                  the average POE player has access to.
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="h-full p-2 mx-auto transition duration-500 rounded-lg shadow-lg bg-orange-400/10 hover:scale-105">
          <Link href="https://shortlists-mobile.vercel.app/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <div className="relative w-full rounded-lg">
                <Image
                  src={"/images/shortlists_homepage.png"}
                  width="600"
                  height="700"
                  alt="shortlists"
                />
                <div className="relative flex flex-col items-center w-4/5 mx-auto mt-2">
                  <h4 className="font-serif text-xl font-bold">Shortlists</h4>
                  <p className="font-mono text-sm text-left">
                    An application that incorporates oAuth authentication,
                    allowing users to exchange lists and items with each other.
                    Includes the a friendlists for quickly sending lists to
                    friends & close acquaintances .
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* TechStack */}
      </div>
      <div className="grid grid-cols-1 gap-10 mt-20 font-semibold text-center">
        <div className="w-1/2 h-full p-2 mx-auto transition duration-500 rounded-lg shadow-lg bg-orange-400/10 hover:scale-105">
          <Link
            href="https://helpmechooseleaguestart.vercel.app/"
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <div className="relative rounded-lg ">
                <Image
                  src={"/images/helpmechoosecover.png"}
                  width="600"
                  height="700"
                  alt="helpmechoose"
                  className="flex justify-center mx-auto"
                />
              </div>
              <div className="relative flex flex-col items-center w-4/5 mx-auto mt-2">
                <h4 className="font-serif text-xl font-bold">Help Me Choose</h4>
                <p className="font-mono text-sm text-left">
                  An application using a flowchart questionaire to help users
                  find a build + video guide for Path of Exile.
                </p>
              </div>
            </a>
          </Link>
        </div>

        {/* TechStack */}
      </div>
    </div>
  );
};

export default WorkPage;
