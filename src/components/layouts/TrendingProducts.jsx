import React from "react";
import Container from "../Container";
import productImg from "/src/assets/products.png";
import Products from "../Products";
import { FaCircleChevronRight } from "react-icons/fa6";
import Images from "../Images";
import trendingImg from "/src/assets/trendingBgImg.png";
import Badge from "../Badge";

const TrendingProducts = () => {
  return (
    <div className="my-30">
      <Container>
        <div className="text-center">
          <h3 className="text-Primary text-5xl font-bold font-Inter ">
            Trending Products
          </h3>
          <p className="text-[#546375] text-base font-Rubik mt-4">
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
        <div className="flex gap-x-10 mt-10">
          <div className="bg-[#F5F5F5] p-6 h-[233px] w-[270px]">
            <h4 className="text-[#80B500] text-[10px] font-bold font-Nunito">
              FRUITS & ORGANIC
            </h4>
            <h3 className="text-Primary text-[18px] font-bold font-Inter w-[143px] leading-5 py-2">
              50% off in Fresh Mango Drinks
            </h3>
            <button className="flex items-center gap-x-1 text-[#80B500] text-[13px] font-bold font-Nunito mt-3">
              Buy Now <FaCircleChevronRight />
            </button>
          </div>
          <div className="">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="relative">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
            <Badge
              className={"-mr-5 rounded-tl-[10px] rounded-br-[10px]"}
              badgeTxt={"-29%"}
            />
          </div>
          <div className="">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10 ">
          <div className="relative">
            <Images srcImg={trendingImg} />
            <div className="absolute top-0 left-5 p-6 ">
              <h4 className="text-[#80B500] text-[10px] font-bold font-Nunito">
                - 29% OFF
              </h4>
              <h3 className="text-Primary text-[18px] font-bold font-Inter w-[143px] leading-5 py-2">
                Green lemon & Orange Juice
              </h3>
              <button className="flex items-center gap-x-1 text-[#80B500] text-[13px] font-bold font-Nunito mt-3">
                Buy Now <FaCircleChevronRight />
              </button>
            </div>
          </div>
          <div className="">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
          </div>
          <div className="relative">
            <Products
              productImg={productImg}
              productReview={"(24)"}
              productTitle={"Juicy Orange Pack"}
              productPrice={"$19.00"}
            />
            <Badge
              className={"-mr-5 rounded-tl-[10px] rounded-br-[10px]"}
              badgeTxt={"-29%"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingProducts;
