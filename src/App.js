// import "./App.css";
import "./categories.style.scss";
import CategoryItem from "./components/cotegory-item/category-item.compnanet";

function App() {
  const cotegories = [
    {
      id: 1,
      title: "Hates",
      imageUrl:
        "https://images.pexels.com/photos/28359348/pexels-photo-28359348/free-photo-of-a-woman-in-a-black-dress-stands-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Jakets",
      imageUrl:
        "https://images.pexels.com/photos/28359348/pexels-photo-28359348/free-photo-of-a-woman-in-a-black-dress-stands-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.pexels.com/photos/28359348/pexels-photo-28359348/free-photo-of-a-woman-in-a-black-dress-stands-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        "https://images.pexels.com/photos/28359348/pexels-photo-28359348/free-photo-of-a-woman-in-a-black-dress-stands-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="categories-container">
      {cotegories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
