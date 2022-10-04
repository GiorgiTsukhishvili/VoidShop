import React, { useState, Fragment } from "react";
import { CartPageImagesProps } from "./cartPageInterfaces/cartPageImagesInterface";

import CartArrowLeft from "./../../assets/svg/arrow-left.svg";
import CartArrowRight from "./../../assets/svg/arrow-right.svg";

const CartPageImages = ({ images }: CartPageImagesProps) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const [shownImage, setShownImage] = useState<string>(images[currentNumber]);

  const changeImage = (num: number) => {
    if (currentNumber === 0 && num < 0) {
      setCurrentNumber(images.length - 1);
    } else if (currentNumber === images.length - 1 && num > 0) {
      setCurrentNumber(0);
    } else {
      setCurrentNumber((curNumber) => curNumber + num);
    }
    setShownImage(images[currentNumber]);
  };

  return (
    <div className="relative w-[200px] h-[290px] my-[24px]">
      <img
        src={shownImage}
        alt="Product"
        className="w-full h-full object-contain"
      />

      {images.length > 1 && (
        <Fragment>
          <img
            src={CartArrowLeft}
            alt="Arrow Left"
            className="absolute cursor-pointer translate-y-[-20px] translate-x-[100px]"
            onClick={() => changeImage(-1)}
          />
          <img
            src={CartArrowRight}
            alt="Arrow Right"
            className="absolute cursor-pointer translate-y-[-20px] translate-x-[138px]"
            onClick={() => changeImage(1)}
          />
        </Fragment>
      )}
    </div>
  );
};

export default CartPageImages;
