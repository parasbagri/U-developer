import './shop.style.scss'
import {useContext, Fragment} from 'react'
import {CategoriesContext} from '../../context/categories.context'
import  ProductCard from '../../components/product-card/product-card.component'
 
const Shop = () =>{
    const {categoriesMap} = useContext(CategoriesContext)
    return(
        <Fragment>
          {
            Object.keys(categoriesMap).map((title) =>(
              <Fragment key={title}>
                <h2 className='title'>{title}</h2>
                <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
              </Fragment>
              
            ))
          }
        </Fragment>
    )
}
export default Shop;