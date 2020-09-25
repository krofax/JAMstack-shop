import Products from '../components/Products.js'
import fetch from 'isomorphic-unfetch'
const Index = ({products}) => (
  <div>
    <Products products={products} />
  </div>
  
)

Index.getInitialProps = async function () {
  const API_URL = process.env.REACT_APP_URL || "http://localhost:1337";
  const uri = `${API_URL}/shops`;
  try {
    const res = await fetch(uri, {});
    const data = await res.json();
    // const productData = data.items
    console.log("React app url-", process.env.REACT_APP_URL);
    return {
      products: data,
    };
  } catch (error) {
    return 'An error occured'
  }
  
};
export default Index