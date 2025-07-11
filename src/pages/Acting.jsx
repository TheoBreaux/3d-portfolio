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
    <section className="absolute top-28 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl">
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

      <div className="representation-container w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-10 px-4">
        {/* Representative Info */}
        <div className="representative w-64 sm:w-56 xs:w-48 flex-shrink-0">
          <a
            href="https://www.mza.agency/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="representative-logo-wrapper">
              <img
                src={MZALOGO}
                alt="michael zanuck logo"
                className="representative-logo w-full h-auto max-h-24 object-contain"
              />
            </div>
          </a>
          <p className="representative-name text-lg sm:text-base xs:text-sm whitespace-nowrap">Michael Zanuck</p>

          <div className="flex items-center space-x-2">
            <img
              className="phone-icon w-5 h-5"
              src={Phone}
              alt="phone Icon"
            />
            <p className="representative-text text-sm sm:text-xs">818.707.9747</p>
          </div>

          <div className="flex items-center">
            <a
              href="mailto:audition@mzaagency.com"
              className="representative-text text-sm sm:text-xs flex items-center space-x-1"
            >
              <img
                className="email-icon w-5 h-5"
                src={Email}
                alt="email Icon"
              />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* Second Representative */}
        <div className="representative w-64 sm:w-56 xs:w-48 flex-shrink-0">
          <a
            href="http://therobbcompany.com/home.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="representative-logo-wrapper">
              <img
                src={ROBBLOGO}
                className="representative-logo w-full h-auto max-h-24 object-contain"
                alt="robb company logo"
              />
            </div>
          </a>

          <div className="flex items-center mt-1">
            <a
              href="mailto:therobbcompany@gmail.com"
              className="representative-text text-sm sm:text-xs flex items-center space-x-1"
            >
              <img
                className="email-icon w-5 h-5"
                src={Email}
                alt="email Icon"
              />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* Podcast Section */}
        <div className="podcast-section flex flex-col sm:flex-row items-center mb-4 sm:space-y-0 sm:space-x- w-auto max-w-xs sm:max-w-sm">
          <a
            href="https://youtube.com/@yourenotmytypebro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PodcastLogo}
              alt="Theo Breaux Podcast Logo"
              className="w-16 sm:w-20 h-auto object-contain cursor-pointer"
            />
          </a>

          <div className="flex flex-col items-center sm:items-start">
            <a
              href="https://youtube.com/@yourenotmytypebro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-semibold text-blue-600 hover:underline text-center sm:text-left"
            >
              <p>
                You're Not <span className="blue-gradient_text font-semibold drop-shadow">My Type, Bro!</span>
              </p>
            </a>
            <a
              href="https://youtube.com/@yourenotmytypebro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg font-bold text-gray-500 hover:underline text-center sm:text-left"
            >
              Watch, Listen & Subscribe
            </a>
          </div>
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
