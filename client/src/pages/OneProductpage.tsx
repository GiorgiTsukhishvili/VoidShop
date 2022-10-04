import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import * as api from "./../api";
import { OneProducItem } from "./pagesInterfaces/oneProductInterface";
import { v4 } from "uuid";
import { useCategoriesAndPricesContext } from "../context/CategoriesAndPricesContext";
import { useCartItemsContext } from "../context/CartItemsContext";

const OneProductpage = () => {
  const { id } = useParams();
  const { addItemToCart } = useCartItemsContext();

  const { chosenSymbol } = useCategoriesAndPricesContext();

  const [product, setProduct] = useState<OneProducItem>();
  const [displayedImage, setDisplayedImage] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.getOneItem(id!);

      setProduct(data.data.item);

      setDisplayedImage(data.data.item.gallery[0]);
    };

    getData();
  }, [id]);

  return product !== undefined ? (
    <div className="mt-[160px] mr-[220px] mb-[170px] ml-[100px] text-[#1d1f22] flex">
      <div className="flex flex-col gap-[40px] min-w-[80px] h-[511px] overflow-y-auto overflow-x-hidden images">
        {product.gallery.map((image) => (
          <img
            src={image}
            alt="Products"
            key={v4()}
            className="cursor-pointer min-w-[80px] h-[80px] object-cover"
            onClick={() => setDisplayedImage(image)}
          />
        ))}
      </div>
      <div>
        <img
          src={displayedImage}
          alt="Product"
          className="w-[610px] min-w-[300px] h-[511px] ml-[40px] object-cover"
        />
        {product.inStock !== "true" && (
          <h1 className="absolute font-normal text-[40px] leading-[160%] text-[#8d8f9a] translate-x-[130px] translate-y-[-300px]">
            OUT OF STOCK
          </h1>
        )}
      </div>

      <div className="ml-[100px]">
        <h1 className="font-semibold text-[30px] leading-[27px] mb-[16px]">
          {product.brand}
        </h1>

        <h1 className="font-normal mb-[43px] text-[30px] leading-[27px]">
          {product.name}
        </h1>

        <h1 className=" uppercase font-bold mb-[36px] text-[18px] leading-[18px]">
          Price:{" "}
        </h1>
        <p className="text-[24px] leading-[18px] font-bold mb-[25px]">
          {chosenSymbol}{" "}
          {product.prices
            .filter((item) => item.currency.symbol === chosenSymbol)[0]
            .amount.toFixed(2)}
        </p>

        <button
          className="uppercase w-[292px] h-[52px] bg-[#5ece7b] font-semibold text-[16px] leading-[120%] text-white cursor-pointer mt-[30px] mb-[40px]"
          onClick={() => addItemToCart(product)}
          disabled={product.inStock !== "true"}
        >
          Add to cart
        </button>

        <h1 className="text-[20px] font-medium">{product.description}</h1>
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

export default OneProductpage;
