import HomePage from "../page";

const ContactPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-20">
      <div className="space-y-4 min-h-screen">
        <h1 className="text-8xl text-center">Hi there.</h1>
        <p className="text-2xl mt-10 text-center">
          Thanks for wanting to get in touch!
        </p>
        <p>Contact me direct at jaketycyn@gmail.com</p>
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
};

export default ContactPage;
