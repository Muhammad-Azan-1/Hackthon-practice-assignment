import Image from "next/image"
const Hero2 = () => {
  return (
    <>
  <div className=" w-full h-auto  flex flex-col sm:flex-row px-4 lg:px-14 pt-16 pb-14">
        {/* <div className="w-full flex"> */}
        <div className="flex w-[100%]  sm:w-auto md:w-[350px] shrink-0 flex-wrap flex-col items-center sm:items-start sm:justify-end md:justify-between">
          <div className="border-l-[15px]  h-[30px] border-[#DB4444] rounded-t-[5px] rounded-b-[5px] overflow-hidden">
            <h3 className="ml-4 mt-1 font-poppins text-[#DB4444]">Our products</h3>
          </div>

          <div className="text-[25px] mt-4 md:text-[36px] font-poppins">
            <h1>Explore Our Products</h1>
          </div>
        </div>
        </div>

     
        <div className="w-[100%] mb-10 flex xl:flex-row flex-col justify-center items-center gap-4">
            {/* primary/playstation */}
            <div className="rounded-md w-[70%] xl:w-[40%] h-[550px] bg-black flex justify-center items-center relative">
                <Image src={"/playstation.webp"} alt="ps5" height={400} width={400} />

                <div className="text-white flex flex-col justify-center items-start gap-2 absolute bottom-2 left-5">
                    <h2 className="text-base font-medium">PlayStation 5</h2>
                    <p className="w-[242px] text-[13px] text-gray-300">Black and White version of the PS5 coming out on sale.</p>
                    <p className="text-[13px] underline">Shop Now</p>
                </div>
            </div>

            {/* Secondary/ women's collection, perfume and speakers. */}
            <div className="mt-12  w-[88%] xl:w-[50%] flex justify-center items-center flex-col gap-5">

                {/* women's collection */}
                <div className="rounded-md relative  w-[80%] h-[320px] bg-black flex md:flex-row flex-col justify-around items-center px-5">

                    <div className=" w-[250px] text-white flex flex-col justify-center items-start gap-3">
                        <h2 className="text-base font-medium">Women&apos;s Collection</h2>
                        <p className="w-[230px] text-[13px] text-gray-300">Featured woman collections that give you another vibe.</p>
                        <p className="text-[13px] underline">Shop Now</p>
                    </div>
                    <Image src={"/women.jpeg"} alt="woman " height={400} width={300} />
                </div>

                {/* perfume and speaker */}
                <div className="gap-5 lg:gap-0 w-[75%] flex lg:flex-row flex-col justify-between items-center ">

                    <div className="w-full lg:w-[350px] xl:w-[240px] h-[274px] rounded-md bg-black flex justify-center items-center relative">
                        <Image src={"/speaker2.png"} alt="speaker" height={150} width={150} />

                        <div className="flex flex-col justify-center items-start absolute bottom-2 left-5 text-white gap-3">
                            <h2 className="text-base font-medium">Speakers</h2>
                            <p className="w-[230px] text-[13px] text-gray-300">Amazon wireless speakers</p>
                            <p className="text-[13px] underline">Shop Now</p>
                        </div>

                    </div>

                    <div className="w-full lg:w-[350px] xl:w-[240px] h-[274px] rounded-md bg-black flex justify-center items-center relative">
                        <Image src={"/perfume.png"} alt="fragrance" height={150} width={150} />

                        <div className="flex flex-col justify-center items-start absolute bottom-2 left-5 text-white gap-3">
                            <h2 className="text-base font-medium">Speakers</h2>
                            <p className="w-[230px] text-[13px] text-gray-300">Amazon wireless speakers</p>
                            <p className="text-[13px] underline">Shop Now</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    
   
    </>
  )
}

export default Hero2