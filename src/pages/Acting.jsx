import Headshot1 from '../assets/images/headshot-center.jpg';
import Headshot2 from '../assets/images/professional-theatrical.jpg';
import Headshot3 from '../assets/images/body-theatrical.jpg';
import Headshot4 from '../assets/images/cop-theatrical.jpg';
import Headshot5 from '../assets/images/commercial-smile.jpg';
import Headshot6 from '../assets/images/blue-smile.jpg';
import Reel from '../assets/videos/theo-breaux-reel.mp4';
import MZALOGO from '../assets/images/mza-logo.png';
import ROBBLOGO from '../assets/images/robb-logo.png';

const Acting = () => {
  const openGalleryImageHandler = () => {
    console.log('CLICKED!');
  };

  return (
    <section className="max-container">
      <img
        src={Headshot1}
        className="w-screen h-auto"
        alt="Headshot 5"
        onClick={openGalleryImageHandler}
      />
      <div className="flex flex-row items-center justify-center mt-5">
        <a
          href="https://www.mza.agency/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={MZALOGO}
            className="w-2/4 h-auto"
            alt="Headshot 5"
            onClick={openGalleryImageHandler}
          />
        </a>

        <a
          href="http://therobbcompany.com/home.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ROBBLOGO}
            className="w-2/4 h-auto"
            alt="Headshot 5"
            onClick={openGalleryImageHandler}
          />
        </a>
      </div>

      <div className="mt-5 flex flex-col">
        {/* <h1 className="text-4xl mb-1 text-left ml-12">
          My{' '}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Reel
          </span>
        </h1> */}
        <div className="flex flex-col items-center justify-center">
          <video
            controls
            autoPlay
            width="100%"
            className="video-reel-player"
            src={Reel}
          ></video>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-[80%] mx-auto mt-10">
        <img
          src={Headshot6}
          className="w-1/5 mx-3 cursor-pointer"
          alt="Headshot 1"
          onClick={openGalleryImageHandler}
        />

        <img
          src={Headshot2}
          className="w-1/5 mx-3 cursor-pointer"
          alt="Headshot 2"
          onClick={openGalleryImageHandler}
        />

        <img
          src={Headshot3}
          className="w-1/5 mx-3 cursor-pointer"
          alt="Headshot 3"
          onClick={openGalleryImageHandler}
        />
        <img
          src={Headshot4}
          className="w-1/5 mx-3 cursor-pointer"
          alt="Headshot 4"
          onClick={openGalleryImageHandler}
        />
        <img
          src={Headshot5}
          className="w-1/5 mx-3 cursor-pointer"
          alt="Headshot 5"
          onClick={openGalleryImageHandler}
        />
      </div>
    </section>
  );
};

export default Acting;

// (
//   <div className="flex items-center justify-center h-screen bg-black">
//     <img
//       className="w-full max-w-4xl h-auto"
//       src={UnderConstruction}
//       alt="Under Construction"
//     />
//   </div>
// );
