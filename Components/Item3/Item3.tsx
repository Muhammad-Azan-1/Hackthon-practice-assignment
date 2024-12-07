import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const Item3 = () => {
  return (
    <>
      <div className=" w-full h-auto  flex flex-col sm:flex-row px-4 lg:px-14 pt-16">
        {/* <div className="w-full flex"> */}
        <div className="flex w-[100%]  sm:w-auto md:w-[350px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
          <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
            <h3 className="ml-4 mt-1 font-poppins text-[#DB4444]">Our products</h3>
          </div>

          <div className="text-[25px] mt-4 md:text-[36px] font-poppins">
            <h1>Explore Our Products</h1>
          </div>
        </div>

        {/* </div> */}

        <div className="hidden sm:flex justify-end mt-5 sm:mt-0 sm:w-[90%] items-end ">
          <div className="flex justify-between items-end w-[90px] md:w-[110px] mb-2 ">
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

      {/* items */}

      <div className="w-full h-auto pt-8 px-4 lg:px-8 xl:px-10 flex items-center max:justify-center max:gap-16 max-733:gap-[48px] xl:gap-0 justify-between flex-wrap">
        {/* Image box1 */}
        <div className="sm-max:w-[380px] max:w-[280px] w-[260px] xl:w-[300px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center cursor-pointer ">
            <Image
              src="/ct0.svg"
              alt="item2"
              width={150}
              height={100}
              className="w-[170px] sm:w-[150px]"
            ></Image>

            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
            <h1 className="font-poppins font-[500]">Breed Dry Dog Food</h1>

            <div className="flex items-center justify-center sm:justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$960</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-gray-500" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* image box2 */}
        <div className="sm-max:w-[380px] max:w-[280px]  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative cursor-pointer   w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/ct1.svg"
              alt="item2"
              width={170}
              height={100}
              className="w-[170px] sm:w-[150px]"
            ></Image>

            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-[0]   rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center items-center sm:items-start gap-2">
            <h1 className="font-poppins font-[500]">CANON EOS DSLR Camera</h1>

            <div className="flex items-center justify-center sm:justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$260</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-gray-500" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-gray-500" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box image3 */}
        <div className="max:w-[280px] hidden sm:inline-block  w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/item1.svg"
              alt="item2"
              width={170}
              height={100}
              className=""
            ></Image>

            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">HAVIT HV-G92 Gamepad</h1>
            <div className="flex items-center justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$360</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box image4 */}
        <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/ct3.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
              <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">ASUS FHD Gaming Laptop</h1>

            <div className="flex items-center justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$860</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box5 */}
        <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/ct4.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
                   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">Kids Electric Car</h1>

            <div className="flex items-center justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$460</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-gray-500" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box6 */}

        <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/ct5.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
                   <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">Jr. Zoom Soccer Cleats</h1>

            <div className="flex items-center justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$760</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box7 */}

        <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/ct6.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
               <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">GP11 Shooter USB Gamepad</h1>

            <div className="flex items-center justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$560</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>

        {/* box8 */}

        <div className="max:w-[280px] hidden sm:inline-block w-[260px] xl:w-[280px] h-[350px] bg-white rounded-[5px]">
          <div className="relative overflow-hidden w-full h-[65%] bg-[#F5F5F5] flex justify-center items-center">
            <Image
              src="/ct7.svg"
              alt="item2"
              width={120}
              height={100}
              className=""
            ></Image>
               <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-3 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faHeart} />
            </div>
            <div className="absolute px-2 py-1 text-[14px] text-black bg-white rounded-[50%]  top-12 right-4">
              <FontAwesomeIcon className="text-[16px]" icon={faEye} />
            </div>

            <div className="absolute font-poppins bg-black bottom-0 rounded-b-[3px] w-full text-white flex justify-center items-center h-[35px]">
              Add to Cart
            </div>
          </div>

          <div className="py-3 pl-1 flex flex-col justify-center gap-2">
            <h1 className="font-poppins font-[500]">Quilted Satin Jacket</h1>
            <div className="flex items-center justify-start w-[80%]">
              <h2 className="text-[#DB4444]">$160</h2>
              <div className="ml-2">
              <FontAwesomeIcon className="text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              <FontAwesomeIcon className="ml-1 text-[#FFAD33]" icon={faStar} />
              </div>
              <h3 className="text-gray-500 mb-2 ml-1 ">(88)</h3>
            </div>
          </div>
        </div>
      </div>
      <Button />
    </>
  );
};

export default Item3;
