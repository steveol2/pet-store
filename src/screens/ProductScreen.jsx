import { useParams } from "react-router-dom";
import { useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import Rating from "../Component/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../Component/LoadingBox";
import MessageBox from "../Component/MessageBox";
import { getError } from "../util";
import { Store } from "../Store.jsx";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `http://localhost:5000/api/products/slug/${slug}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `http://localhost:5000/api/products/_id/${product._id}`
    );

    if (data.stock < quantity) {
      window.alert("sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="error">{error}</MessageBox>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="col-span-2 w-full max-w-md mx-auto my-8 bg-center ">
        <img className="w-full" src={product.image} alt={product.name} />
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
        <ul className="mt-8">
          <li>
            <h1 className="text-2xl ">{product.name}</h1>
          </li>
          <li>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </li>
          <li>Price: {product.price}</li>
          <li>
            Description: <p> {product.description} </p>
          </li>
        </ul>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <div className="flex items-center mt-8 mb-2">
          <div className="mr-4">
            <p>Price:</p>
          </div>
          <div>{product.price}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <p>Status:</p>
          </div>
          <div>
            {product.stock > 0 ? (
              <button className="bg-green-400 p-1  ">In Stock</button>
            ) : (
              <button className="bg-red-400 p-1">Out of Stock</button>
            )}
          </div>
        </div>
        {product.stock > 0 && (
          <ul>
            <li>
              <button onClick={addToCartHandler} className="bg-green-400 p-1">
                Add to Cart
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductScreen;
