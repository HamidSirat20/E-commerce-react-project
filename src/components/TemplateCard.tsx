import React, { useEffect, useState } from "react"
import SortRoundedIcon from "@mui/icons-material/SortRounded"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded"
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded"

import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"
import {
  fetchAllProducts,
  sortPrice,
  sortByCategory,
} from "../redux/reducers/productsReducer"
import ProductCard from "./ProductCard"

const TemplateCard = () => {
  const [sort, setSortPrice] = useState<"asc" | "desc">("asc");
  const [sortCategory, setsortCategory] = useState<"asc" | "desc">("asc")
  //end sortig
  const products = useAppSelector((state) => state.productsReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, []);
  console.log(products)

  const handleSort = () => {
    dispatch(sortPrice(sort))
    setSortPrice(sort === "asc" ? "desc" : "asc")
  };

  const handleSortCategory = () => {
    dispatch(sortByCategory(sortCategory));
    setsortCategory(sortCategory === "asc" ? "desc" : "asc")
  }
  return (
    <div>
      <button onClick={handleSort}>
        {sort === "asc" ? (
          <>
            <ArrowDropUpRoundedIcon /> <SortRoundedIcon />
          </>
        ) : (
          <>
            <ArrowDropDownRoundedIcon /> <SortRoundedIcon />
          </>
        )}
      </button>
      <button onClick={handleSortCategory}>
        {sortCategory === "asc" ? (
          <>
            <ArrowDropUpRoundedIcon /> <SortByAlphaRoundedIcon />
          </>
        ) : (
          <>
            <ArrowDropDownRoundedIcon /> <SortByAlphaRoundedIcon />
          </>
        )}
      </button>
      {products.map((product) => {
        return (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={{
              id: product.category.id,
              name: product.category.name,
              image: product.category.image,
            }}
            images={product.images}
          ></ProductCard>
        )
      })}
    </div>
  )
}

export default TemplateCard;
