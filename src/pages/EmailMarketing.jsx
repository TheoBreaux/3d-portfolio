import { images } from "../pages/index.js";
import CTA from "../components/CTA";
import { useNavigate } from "react-router-dom";

const EmailMarketing = () => {
  const navigate = useNavigate();

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Email{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Marketing Portfolio
        </span>
      </h1>
      <div className="mt-1 flex flex-col gap-3 text-slate-500">
        <p>
          Over the past few years, I have developed a strong proficiency in
          various technical and marketing areas, particularly using Klaviyo to
          manage email marketing campaigns for OMG Sportswear USA and Circuit
          Rave Gear. I excel at designing and implementing targeted email
          marketing campaigns that engage audiences and boost conversion rates.
          My skills include creating engaging content, strategically segmenting
          email lists, and analyzing campaign data to drive continuous
          improvement.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Email Campaigns</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {Object.keys(images).map((imageName) => (
            <div key={imageName} className="w-1/1 p-2">
              <img
                src={images[imageName]}
                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                alt={imageName}
                onClick={() => handleImageClick(imageName)}
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default EmailMarketing;
