import CategoryItem from "../cotegory-item/category-item.compnanet.jsx";
import './directory.style.scss'

const Directory = ({cotegories}) => {
    return (
        <div className="directory-container {
">
      {cotegories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          imageUrl={category.imageUrl}
          title={category.title}
        />
      ))}
    </div>

    )
}  
export default Directory;