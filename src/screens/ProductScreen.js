import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";


function ProductScreen(props) {
      const productId = props.match.params.id;

      const [qty, setQty] = useState(1)
      const productDetails = useSelector(state => state.productDetails);
      const { product, loading, error } = productDetails;
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(detailsProduct(productId));
      }, [productId, dispatch]); 
      
      const handleAddToCart = () => {
        props.history.push("/cart/" + productId + "?qty=" + qty );
      }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                Price: <b>${product.price}</b>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>  
              <li>Price: $ {product.price}</li>
              <li>
                Status:
                {product.status}
              </li>
                  <li> Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  </select>
              </li>
              <li>
                <button className="button primary" onClick={handleAddToCart}>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}  


export default ProductScreen;
