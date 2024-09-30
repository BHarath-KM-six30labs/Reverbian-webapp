import image from "../../assets/image1.png";

function About() {
  return (
    <div className="flex mt-5 mx-10 gap-10">
      <div className="w-[40%] h-[350px] bg-[#E3E3E3] flex items-center justify-center">
        <img src={image} alt="image" className="max-h-full max-w-full object-cover" />
      </div>
      <div className="w-[60%]">
        <h4 className="text-[22px] font-semibold">What we do</h4>
        <h4 className="text-[#757575] text-[18px]">the TL’DR version</h4>
        <p className="mt-5 italic font-semibold text-[16px]">
          We offer fractional marketing services. <br />
          Strategic Vision. Hands-on execution.
        </p>
        <p className="text-[16px]">
          From acting as your CMO to delivering expertise in strategy,
          branding, digital, content, analytics, SEO, and paid campaigns—
          <br />
          we seamlessly fill the gaps in your marketing function.
        </p>
      </div>
    </div>
  );
}

export default About;
