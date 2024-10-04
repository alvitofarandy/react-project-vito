import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const getMenuList = () => {
    axios
      .get("https://api.mudoapi.site/menus")
      .then((res) => {
        setMenu(res.data.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>Menu List</p>
      {menu.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.priceFormatted}</p>
            <img width={200} height={200} src={item.imageUrl} alt="" />
            <Link to={`/menu-detail/${item.id}`}>
              <button>detail</button>
            </Link>
          </div>
        );
      })}

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default MenuPage;
