import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;
  return (
    <div
      className=" border-2 rounded-lg border-sky-500 m-2  p-4 flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 "
      key={product.slug}
    >
      <div className="flex items-center justify-center  mb-2">
        <Link to={`/product/${product.slug}`}>
          <img
            className="max-w-[300px] w-full mb-2"
            src={product.image}
            alt="product.name"
          />
        </Link>
      </div>
      <div className="p-2">
        <Link to={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </Link>
        <strong>
          <p>{product.price}</p>
        </strong>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <p>{product.brand}</p>
        <button className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded text-white mt-3 font-bold hover:from-blue-500 hover:to-blue-400">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Product;
