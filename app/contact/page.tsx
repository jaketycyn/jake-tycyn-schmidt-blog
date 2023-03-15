import Image from "next/image";
import Link from "next/link";
import HomePage from "../page";

const ContactPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-20 ">
      <div className="space-y-4 min-h-screen">
        <h1 className="text-8xl text-center">Hi there.</h1>
        <p className="text-2xl mt-10 text-center">
          Thanks for wanting to get in touch!
        </p>
        <p className="text-lg mt-10 text-center">
          Contact me direct at{" "}
          <span className="hover:text-orange-400 decoration-2 decoration-black hover:underline ease-in duration-100">
            jaketycyn@gmail.com
          </span>
          <br />
          or through my social media accounts
        </p>
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="w-40 h-20 flex flex-row items-center text-center p-4">
            <Image
              src={"/github-mark.png"}
              width="50"
              height="125"
              alt="githubLogo"
              className=" flex items-center justify-center"
            />
            <div className="">
              <Link href="http://github.com/jaketycyn" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left font-semibold decoration-black hover:text-orange-400 hover:underline decoration-2 ease-in duration-100 ml-2"
                >
                  Github
                </a>
              </Link>
            </div>
          </div>
          <div className="w-40 h-20 flex flex-row items-center text-center p-4">
            <Image
              src={"/LI-In-Bug.png"}
              width="50"
              height="100"
              alt="linkedInLogo"
              className=" flex items-center justify-center"
            />
            <div className="">
              <Link
                href="http://www.linkedin.com/in/jake-tycyn-schmidt-198334133/"
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left font-semibold decoration-black hover:text-orange-400 hover:underline decoration-2 ease-in duration-100 ml-2"
                >
                  LinkedIn
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
