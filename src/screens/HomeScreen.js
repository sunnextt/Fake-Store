import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const [filter, setFilter] = useState("")
  const [product, setProduct] = useState('')
  const [searchProducts, setSearchProducts] = React.useState([]);


  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList || {};
  const dispatch = useDispatch();



 useEffect(() => {

   dispatch(listProducts());
 }, [dispatch]);


 useEffect(() => {
   setFilter(keyword);
   setProduct(products);
   let newProducts = [...product];
   if (filter !== "") {
     newProducts = newProducts.filter((item) => {
       let title = item.title.toLowerCase().trim();
       return title.includes(filter) ? item : null;
     });
   }
   setSearchProducts(newProducts);
 }, [filter, product, keyword, products]);


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