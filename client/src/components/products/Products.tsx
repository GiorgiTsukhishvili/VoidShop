import React, { useState, Fragment } from "react";
import { useCategoriesAndPricesContext } from "../../context/CategoriesAndPricesContext";
import { ProductsItems } from "./productsInterface";
import GreenCart from "./../../assets/svg/green-cart.svg";
import { Link } from "react-router-dom";
import { useCartItemsContext } from "../../context/CartItemsContext";

const Products = ({ product }: { product: ProductsItems }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { chosenSymbol } = useCategoriesAndPricesContext();
  const { addItemToCart } = useCartItemsContext();

  return (
    <div className="relative ml-[30px]">
      <Link to={`/product/${product._id}`} className="ml-[30px] cursor-pointer">
        <div
          className={`w-[386px] h-[444px] mb-[100px] p-2.5 flex flex-col items-start justify-center text-[#1d1f22] ${
            isHovering && "shadow-lg"
          } `}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={product.gallery[0]}
            alt="Product"
            className="w-[354px] h-[330px] object-cover"
          />
          <h1 className="mt-[24px] font-light text-[18px] leading-[160%]">
            {product.brand} {product.name}
          </h1>
          <p className="font-medium text-[18px] leading-[160%]">
            {chosenSymbol}{" "}
            {product.prices
              .filter((item) => item.currency.symbol === chosenSymbol)[0]
              .amount.toFixed(2)}
          </p>

          {product.inStock !== "true" && (
            <p className="absolute text-[#8d8f9a] text-[24px] leading-[160%] font-normal translate-x-[100px] translate-y-[-50px]">
              OUT OF STOCK
            </p>
          )}
        </div>
      </Link>

      {isHovering && (
        <img
          src={GreenCart}
          alt="Cart"
          className="absolute cursor-pointer translate-x-[280px] translate-y-[-230px]"
          onMouseEnter={() => setIsHovering(true)}
          onClick={
            product.inStock === "true" ? () => addItemToCart(product) : () => {}
          }
        />
      )}
    </div>
  );
};

export default Products;
