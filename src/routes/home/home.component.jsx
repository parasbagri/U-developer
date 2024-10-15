// import "./App.css";
// import "./categories.style.scss";
// import Directory from "./components/directory/directory.component.jsx";
import Directory from "../../components/directory/directory.component.jsx";
import { Outlet } from "react-router-dom";

function Home() {
  const cotegories = [
    {
      id: 1,
      title: "Hates",
      imageUrl:
        "https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Jakets",
      imageUrl:
        "https://media.istockphoto.com/id/1069165932/photo/black-leather-jacket-shot-from-front-and-back-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=Lrzzgm7wY4t8fwxH_TON64VrBoCab82Wmw39g2U0eDg=",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://images.pexels.com/photos/25185199/pexels-photo-25185199/free-photo-of-smiling-woman-with-yellow-wildflowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://images.pexels.com/photos/13201882/pexels-photo-13201882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      {/* <div className="categories-container">
      {cotegories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          imageUrl={category.imageUrl}
        />
      ))}
    </div> */}
       
      <Directory cotegories={cotegories} />
      <Outlet/>  
    </div>
  );
}

export default Home;
