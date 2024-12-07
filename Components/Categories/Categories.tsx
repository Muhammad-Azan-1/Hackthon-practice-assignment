import Image from "next/image";
import Button from "../Button/Button";
const Categories = () => {
  return (
    <>
    <div className=" w-full h-auto  flex flex-col sm:flex-row px-4 lg:px-14 pt-16">
      <div className="flex w-[100%]  min-3:w-auto md:w-[400px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
        <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
          <h3 className="ml-4 mt-1 font-poppins text-[#DB4444]">Categories</h3>
        </div>

        <div className="text-[25px] text-center sm:text-left w-auto sm:w-[350px] mt-4 md:text-[36px] font-poppins">
          <h1>Browse By Category</h1>
        </div>
      </div>

      <div className="hidden sm:flex justify-end mt-5 sm:mt-0 sm:w-[90%] items-end ">
          <div className="flex justify-between items-end w-[130px]  md:w-[110px] mb-2 ">
            <Image
              src="/arrow2.svg"
              alt="arrow-left"
              width={50}
              height={30}
              className="rotate-180 w-[40px] md:w-auto rounded-[50%] bg-slate-100"
            ></Image>

            <Image
              src="/arrow1.svg"
              alt="arrow-left"
              width={50}
              height={30}
              className="rotate-180 w-[40px] md:w-auto  rounded-[50%] bg-slate-100"
            ></Image>
          </div>
        </div>
      </div>


      
      {/* images card */}

      <div className=" mb-6 pt-8 w-full h-auto px-8 md:px-10 sm:px-8   min-3:gap-4 lg:flex lg:justify-between grid max-2:grid-cols-1 grid-cols-2  place-items-center sm:justify-items-center  sm:gap-6 sm:grid sm:grid-cols-3 ">
        <div className="w-[280px] min-3:w-[170px] hover:text-white  h-[145px] rounded-[4px] border-[1px] border-[#0000004D] flex flex-col justify-center items-center hover:bg-[#DB4444]">
          <Image
            src="/Category-CellPhone.svg"
            alt="phone"
            width={65.63}
            height={65.63}
            className=""
          />
          <p className="text-[16px] ">Phones</p>
        </div>

        <div className="w-[280px] min-3:w-[170px] mt-6 min-3:mt-0 hover:text-white h-[145px] rounded-[4px] border-[1px] border-[#0000004D] flex flex-col justify-center items-center hover:bg-[#DB4444]">
          <Image
            src="/Category-Computer.svg"
            alt="computer"
            width={65.63}
            height={65.63}
          />
          <p className="text-[16px] ">Computers</p>
        </div>

        <div className="w-[280px] min-3:w-[170px] mt-6 min-3:mt-0 h-[145px] hover:text-white rounded-[4px] border-[1px] border-[#0000004D] flex flex-col justify-center items-center hover:bg-[#DB4444]">
          <Image
            src="/Category-SmartWatch.svg"
            alt="watch"
            width={65.63}
            height={65.63}
          />
          <p className="text-[16px] ">SmartWatches</p>
        </div>

        <div className="max-2:hidden min-3:w-[170px] h-[145px] hover:text-white rounded-[4px] border-[1px] border-[#0000004D] flex flex-col justify-center items-center bg-[#DB4444]">
          <Image
            src="/Category-Camera.svg"
            alt="camera"
            width={65.63}
            height={65.63}
            className="text-black"
          />
          <p className="text-[16px]">Camera</p>
        </div>

        <div className="max-2:hidden w-[170px] hover:text-white h-[145px] rounded-[4px] border-[1px] border-[#0000004D] flex flex-col justify-center items-center hover:bg-[#DB4444]">
          <Image
            src="/Category-Headphone.svg"
            alt="headphone"
            width={65.63}
            height={65.63}
          />
          <p className="text-[16px] ">HeadPhones</p>
        </div>

        <div className="max-2:hidden w-[170px] hover:text-white h-[145px] rounded-[4px] border-[1px] border-[#0000004D] flex flex-col justify-center items-center hover:bg-[#DB4444]">
          <Image
            src="/Category-Gamepad.svg"
            alt="gaming"
            width={65.63}
            height={65.63}
          />
          <p className="text-[16px] ">Gaming</p>
        </div>
      </div>
      <Button/>
      
    </>
  );
};

export default Categories;
