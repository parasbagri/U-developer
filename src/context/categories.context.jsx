import { createContext, useState, useEffect } from "react";

  
import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {  
    const[categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
      const getCategoriesMap = async () => {

        const categoryMap =  await getCategoriesAndDocuments()
        console.log(categoryMap)
      setCategoriesMap(categoryMap)

      }
      getCategoriesMap()// useEffact ke ander hum aise async function ko handle karte hai 
       
    }, [])  // useEffect hook will only run once when the component mounts
    
    const value = {categoriesMap}
    return (
         <CategoriesContext.Provider value={value}>
           {children}
         </CategoriesContext.Provider>
    )
}