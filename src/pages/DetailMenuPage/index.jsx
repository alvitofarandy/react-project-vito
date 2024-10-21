import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";

const DetailMenuPage = () => {
  const [menu, setMenu] = useState({});
  const { id } = useParams();
  ("https://reqres.in/api/register");
  const getDetailMenu = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getDetailMenu();
  }, []);

  return (
    <div>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div className="flex flex-col md:flex-row pt-8 md:pl-8 md:gap-16 gap-8 justify-center items-center md:items-start">
          <div className="border rounded-lg bg-white p-4 max-w-[90%] md:max-w-[500px]">
            <img
              src={menu?.avatar}
              alt={`${menu?.first_name} ${menu?.last_name}`}
              className="w-full h-auto rounded"
            />
          </div>

          <div className="gap-4 flex flex-col border rounded-lg bg-white p-4 max-w-[90%] md:max-w-[500px]">
            <div className="font-bold text-[20px] border-b border-gray-300 pb-2">
              User Details
            </div>

            <div>{`Name: ${menu?.first_name} ${menu?.last_name}`}</div>
            <div>{`Email: ${menu?.email} `}</div>
            <div className="w-full text-left">
              {`${menu?.first_name} ${menu?.last_name}`} is a passionate
              environmentalist and wildlife photographer based in Portland,
              Oregon. With a degree in Ecology, she has spent over a decade
              documenting the beauty of nature through her lens, raising
              awareness about endangered species and conservation efforts.
              Janet’s work has been featured in several international magazines,
              and she regularly collaborates with NGOs to promote sustainable
              living practices. When she’s not behind the camera, she enjoys
              hiking, birdwatching, and teaching photography workshops to
              aspiring nature enthusiasts.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailMenuPage;
