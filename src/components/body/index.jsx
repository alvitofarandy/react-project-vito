import { Link } from "react-router-dom";
import Footer from "../footer";

const Body = () => {
  return (
    <div className="font-sans">
      <div className="flex justify-center pt-[100px] px-4 bg-gray-100 py-20">
        <div className="max-w-4xl">
          <h3 className="text-[50px] justify-center flex font-semibold mb-6">
            About
          </h3>
          <div className="text-lg leading-relaxed text-gray-700 text-center">
            Alvito Corp is a pioneering company dedicated to the genetic
            enhancement of human DNA, enabling extraordinary abilities that push
            the limits of what is possible. With a team of leading scientists
            and researchers, Alvito Corp has spent years developing
            groundbreaking techniques to unlock hidden potential within the
            human genome. From superhuman strength to enhanced agility and
            accelerated healing, their innovations are set to redefine the
            future of humanity. Alvito Corp’s cutting-edge research has been
            featured in numerous scientific publications, and they continue to
            collaborate with experts worldwide to advance genetic science. Join
            them on their mission to build a new generation of heroes, equipped
            with powers once thought to be impossible.
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-[40px] font-bold mb-4">Join Us Today!</h2>
        <p className="text-[18px] mb-8">
          Become a part of our growing community and make a difference.
        </p>
        <Link to="/login">
          <button className="bg-white text-blue-600 px-8 py-3 rounded shadow-md transition duration-300 hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Body;
