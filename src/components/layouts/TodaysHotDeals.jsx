import React from "react";
import Container from "../Container";
import Button from "../Button";

const TodaysHotDeals = () => {
  return (
    <div className="bg-[url('/src/assets/todaysBnr.png')] bg-no-repeat bg-cover bg-center">
      <Container>
        <div className="ml-[692px] pt-50">
          <h4 className="text-[#80B500] text-base font-Nunito font-bold">
            Todays Hot Deals
          </h4>
          <h3 className="text-Primary text-[50px] font-Inter font-bold leading-15 mt-2">
            Original Stock Honey Combo Package
          </h3>
          <p className="text-[#546375] text-base font-Nunito w-[450px] leading-5 mt-5">
            Cur tantas regiones barbarorum obiit, tot maria transmist summo bono
            fruitur id est voluptate barbarorum{" "}
          </p>
          <div className="flex gap-x-10 mt-10">
            <div className="text-center">
              <div className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 px-5 py-4 rounded-[50%] text-[18px] font-Nunito font-bold">
                02
              </div>
              <h4 className="text-[#223645] text-base font-Inter">Days</h4>
            </div>
            <div className="text-center">
              <div className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 px-5 py-4 rounded-[50%] text-[18px] font-Nunito font-bold">
                14
              </div>
              <h4 className="text-[#223645] text-base font-Inter">Houres</h4>
            </div>
            <div className="text-center">
              <div className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 px-5 py-4 rounded-[50%] text-[18px] font-Nunito font-bold">
                42
              </div>
              <h4 className="text-[#223645] text-base font-Inter">Minutes</h4>
            </div>
            <div className="text-center">
              <div className="bg-white hover:bg-[#80B500] text-[#80B500] hover:text-white duration-200 px-5 py-4 rounded-[50%] text-[18px] font-Nunito font-bold">
                59
              </div>
              <h4 className="text-[#223645] text-base font-Inter">Seconds</h4>
            </div>
          </div>
          <div className="mt-10 flex gap-5">
            <Button
              btnTxt={"Shop Now"}
              className={
                "hover:bg-transparent hover:text-[#80B500] duration-200"
              }
            />
            <Button
              btnTxt={"Deal of The Day"}
              className={
                "hover:bg-transparent hover:text-[#80B500] duration-200"
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TodaysHotDeals;
