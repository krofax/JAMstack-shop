import React, {useContext} from "react"
import CartContext from '../components/contextCart';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
 return (
   <div className="col-sm-4">
     <div className="card" style={{ width: "18rem" }}>
       <img
         src={`${process.env.REACT_APP_URL}${product.image[0].url}`}
         className="card-img-top"
         alt={`${process.env.REACT_APP_URL}${product.image[0].url}`}
       />

       <div className="card-body">
         <h5 className="card-title"> {product.name}</h5>
         <h6 className="card-title">$ {product.price}</h6>
         <button
           className="btn btn-large btn-primary"
           onClick={() => {
             addToCart(product);
           }}
         >
           Add To Cart
         </button>
       </div>
     </div>
   </div>
 );
}
export default Product;