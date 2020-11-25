import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";


function HomeScreen() {

  const productList = useSelector(state => state.productList);
  const {products, loading, error } = productList || {};
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);



    return loading ? (
      <div>loading</div>
    ) : error ? (
      <div>Error loading... </div>
    ) : (
      <ul className="products">
        {products.map((product, id) => (
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
                <Link to={"/product/" + product.id }>{product.title}</Link>
              </div>
              <div className="product-price">${product.price}</div>
            </div>
          </li>
        ))}
      </ul>
    );
}

export default HomeScreen;