import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
   const [search, setSearch] = useState(null);
  console.log(search);



  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList || {};
  const dispatch = useDispatch();

  
  const [searchProducts, setSearchProducts] = useState([]);



 useEffect(() => {
   setSearch(keyword);
   dispatch(listProducts());
 }, [dispatch, keyword]);


 useEffect(() => {
   let newProducts = [...products];

   if (loading === false) {
     if (search === null || search === undefined) {
       setSearchProducts(newProducts);
     } else if (search !== null || search !== undefined) {
       newProducts = newProducts.filter((item) => {
         let title = item.title.toLowerCase();
         return title.includes(keyword) ? item : null;
       });
     }
     setSearchProducts(newProducts);
   }
 }, [keyword, products, loading, search ]);


console.log(searchProducts);



  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>Error loading... </div>
  ) : (
    <ul className="products">
      {searchProducts.map((product, id) => (
        <li key={id}>
          <div className="product">
            <Link to={"/product/" + product.id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + searchProducts.id}>{product.title}</Link>
            </div>
            <div className="product-price">${product.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;