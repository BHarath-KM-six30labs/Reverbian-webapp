import Cards from "./components/Cards";
import PillarCards from "./components/PillarCards";

function Partnership() {
  return (
    <>
    {/* mt-24 */}
      <div className="flex  mx-16 gap-10 h-96 relative">
        <div className="w-[42%] flex items-center ">
          <h2 className="text-[45px] font-semibold ml-7  leading-[3.5rem] ">
            Partnership solving for early growth firms to scale business.
          </h2>
        </div>
        <div className="w-1/2 flex items-end absolute bottom-14 right-16">
          <p className="text-[20px] ml-28  w-[400px]">
            Our goal is simple: to create value and drive business growth
            through marketing for early stage firms.
          </p>
        </div>
      </div>
      
      <Cards/>
      <PillarCards/>
    </>
  );
}

export default Partnership;
