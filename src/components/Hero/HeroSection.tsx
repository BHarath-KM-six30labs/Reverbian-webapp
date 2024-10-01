
import "./hero.css";

function HeroSection() {
  return (
    <>
      <div className="bg-[#f5f5f5] h-[360px] flex flex-col items-center">
        <p className="text-[60px] Inter font-bold text-center pt-14 leading-[5rem]">
          Crafting value in Growth <br />
          with Marketing
        </p>
        <p className="text-[28px] Inter font-bold text-center pt-5">
          Enable your 0-1-10mn journey{" "}
        </p>
        <div className="flex justify-center items-center mt-5">
          <input
            type="text"
            placeholder="your@example.com"
            className="border-2 p-2 rounded-md "
          />
          <input
            type="button"
            value={"Submit"}
            className="bg-black text-white border-2 border-white px-2 py-2 rounded-md ml-2 "
          />
        </div>
      </div>
      <div className="flex mt-5 mx-16">
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-5">
            <p className="Inter text-[64px] font-bold">56%</p>
            <p className="text-[24px] font-semibold">
              of early-stage enterprises <br /> and SMBs spend{" "}
            </p>
          </div>
          <div className="flex items-end mb-10 gap-5 relative">
            <p className="Inter text-[64px] font-bold">&lt; 1 hr</p>
            <p className="text-[24px] font-semibold absolute left-[11rem] bottom-4 Inter">
              a day on marketing.{" "}
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center ml-[10rem] mt-12  ">
          <p className="text-[20px] Inter">
            Why? Limited bandwidth, insufficient resources, strategic
            uncertainty, or budget constraints often hold them back. And they
            fall short on marketing.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
