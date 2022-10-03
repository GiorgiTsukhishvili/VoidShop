import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import * as api from "./../api";
import { OneProducItem } from "./pagesInterfaces/oneProductInterface";
import { v4 } from "uuid";

const OneProductpage = () => {
  const { id } = useParams();

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
      <div className="flex flex-col gap-[40px] w-[80px] h-[511px] overflow-y-auto overflow-x-hidden images">
        {product.gallery.map((image) => (
          <img
            src={image}
            alt="Products"
            key={v4()}
            className="cursor-pointer w-[80px] h-[80px] object-cover"
          />
        ))}
      </div>
      <div>
        <img
          src={displayedImage}
          alt="Product"
          className="w-[610px] h-[511px] ml-[40px] object-cover"
        />
        {product.inStock !== "true" && (
          <h1 className="absolute font-normal text-[40px] leading-[160%] text-[#8d8f9a] translate-x-[220px] translate-y-[-300px]">
            OUT OF STOCK
          </h1>
        )}
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

export default OneProductpage;
