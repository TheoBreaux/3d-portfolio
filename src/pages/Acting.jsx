import Headshot1 from '../assets/images/headshot-center.jpg'
import Reel from '../videos/theo-breaux-reel.mp4'
import MZALOGO from '../assets/images/mza-logo.png'
import ROBBLOGO from '../assets/images/robb-logo.png'
import PodcastLogo from '../assets/images/ynmtb-logo.png'
import { actorImages } from '../pages/index.js'
import { useNavigate } from 'react-router-dom'
import { filmActingRoles, televisionActingRoles, theaterActingRoles } from '../constants'
import CTA from '../components/CTA.jsx'
import ActingCredit from '../components/ActingCredit.jsx'
import InstagramIcon from '../assets/icons/instagram-icon.svg'
import FacebookIcon from '../assets/icons/facebook-icon.svg'
import Email from '../assets/icons/email.svg'
import Phone from '../assets/icons/phone-solid.svg'
import Resume from '../assets/icons/file-solid.svg'

const Acting = () => {
  const navigate = useNavigate()

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`)
  }

  return (
    <section className="max-container">
      <div className="flex items-center justify-center space-x-4">
        <h1 className="acting-head-text">
          Theo <span className="blue-gradient_text font-semibold drop-shadow">Breaux</span>
        </h1>
        <a
          href="https://www.instagram.com/theobreaux/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="insta-icon"
            src={InstagramIcon}
            alt="Instagram Icon"
          />
        </a>
        <a
          href="https://www.facebook.com/BreauxTheo/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="insta-icon"
            src={FacebookIcon}
            alt="facebook Icon"
          />
        </a>
        <a
          href="../../public/files/acting-resume.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="insta-icon"
            src={Resume}
            alt="file Icon"
          />
        </a>
      </div>

      <img
        src={Headshot1}
        className="w-screen h-auto"
        alt="Headshot 5"
      />

      <div className="representation-container w-full max-w-5xl mx-auto flex justify-center space-x-10">
        {/* Representative Info */}
        <div className="representative w-64">
          <a
            href="https://www.mza.agency/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="representative-logo-wrapper">
              <img
                src={MZALOGO}
                alt="michael zanuck logo"
                className="representative-logo"
              />
            </div>
          </a>
          <p className="representative-name">Michael Zanuck</p>

          <div className="flex items-center">
            <img
              className="phone-icon"
              src={Phone}
              alt="phone Icon"
            />
            <p className="representative-text">818.707.9747</p>
          </div>

          <div className="flex items-center">
            <a
              href="mailto: audition@mzaagency.com"
              className="representative-text"
            >
              <img
                className="email-icon"
                src={Email}
                alt="email Icon"
              />
            </a>
          </div>
        </div>

        {/* Podcast Section */}
        <div className="podcast-section flex items-center space-x-4 w-auto">
          <a
            href="https://youtube.com/@yourenotmytypebro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PodcastLogo}
              alt="Theo Breaux Podcast Logo"
              className="w-32 h-32 object-contain cursor-pointer"
            />
          </a>

          <div className="flex flex-col">
            <a
              href="https://youtube.com/@yourenotmytypebro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              You're Not My Type, Bro!
            </a>
            <a
              href="https://youtube.com/@yourenotmytypebro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-500 hover:underline"
            >
              Listen & Subscribe
            </a>
          </div>
        </div>

        {/* Uncomment this block if you want to add the second representative */}

        <div className="representative w-64">
          <a
            href="http://therobbcompany.com/home.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="representative-logo-wrapper">
              <img
                src={ROBBLOGO}
                className="representative-logo"
                alt="robb company logo"
              />
            </div>
          </a>

          {/* <p className="representative-name">Sherry Robb</p>
          <div className="flex items-center">
            <img
              className="phone-icon"
              src={Phone}
              alt="phone Icon"
            />
            <p className="representative-text">818.384.0848</p>
          </div> */}
          <div className="flex items-center">
            <a
              href="mailto: therobbcompany@gmail.com"
              className="representative-text"
            >
              <img
                className="email-icon"
                src={Email}
                alt="email Icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col">
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

      <div className="flex">
        {Object.keys(actorImages).map((imageName) => (
          <div
            key={imageName}
            className="w-1/4 p-2" // Adjust width as needed
          >
            <div className="relative w-full h-50 overflow-hidden">
              <img
                src={actorImages[imageName]}
                className="w-full h-full object-cover cursor-pointer"
                alt={imageName}
                onClick={() => handleImageClick(imageName)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center mt-5">
        <h1 className="text-4xl font-bold text-left m-0 p-0">
          Television <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        {televisionActingRoles.map((role) => {
          return <ActingCredit role={role} />
        })}

        <h1 className="text-4xl font-bold text-left mt-4">
          Film <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        {filmActingRoles.map((role) => {
          return <ActingCredit role={role} />
        })}
        <h1 className="text-4xl font-bold text-left mt-4">
          Theater <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        {theaterActingRoles.map((role) => {
          return <ActingCredit role={role} />
        })}
      </div>
      {/* <div className="flex justify-center mt-5">
        <p className="cta-text">Resume</p>
        <a
          href="../../public/acting-resume.pdf"
          download
          className="btn"
        >
          Download
        </a>
      </div> */}

      <CTA />
    </section>
  )
}

export default Acting
