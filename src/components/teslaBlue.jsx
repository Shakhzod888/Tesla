import "../components/teslaBlue.scss";
import BlueTesla from "../components/assets/blueTesla2.png";
import RedCar from "../components/assets/RedTesla.png";
import WhiteTesla from "../components/assets/whitetesla.png";
import BlackTesla from "../components/assets/BlackTesla.png";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";

function TeslaBlue() {
  const [count, setCount] = useState(1);

  console.log(count);
  const countNumber = () => {
    if (count < 4) {
      setCount(count + 1);
    } else {
      setCount(4);
    }
  };
  const countNumberminus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div className="bluePage">
      <header>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="24"
            viewBox="0 0 180 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_5)">
              <path
                d="M45.39 4.65002H62.84C63.981 4.37123 65.0247 3.78758 65.8596 2.96149C66.6945 2.1354 67.2891 1.09794 67.58 -0.039978H40.65C40.9429 1.09697 41.5382 2.13339 42.3728 2.95917C43.2074 3.78494 44.25 4.36924 45.39 4.65002Z"
                fill="white"
              />
              <path
                d="M45.39 13.94H62.84C63.9824 13.6642 65.0277 13.0816 65.8631 12.2551C66.6985 11.4285 67.2922 10.3894 67.58 9.25H40.65C40.9399 10.3884 41.5342 11.4264 42.3693 12.2527C43.2043 13.0789 44.2486 13.6622 45.39 13.94Z"
                fill="white"
              />
              <path
                d="M45.39 23.44H62.84C63.9824 23.1642 65.0277 22.5816 65.8631 21.7551C66.6985 20.9285 67.2922 19.8894 67.58 18.75H40.65C40.9399 19.8884 41.5342 20.9264 42.3693 21.7527C43.2043 22.5789 44.2486 23.1622 45.39 23.44Z"
                fill="white"
              />
              <path
                d="M157.81 4.70001H175.26C176.403 4.42527 177.449 3.84302 178.284 3.0163C179.12 2.18957 179.713 1.14989 180 0.0100098H153.07C153.361 1.14793 153.956 2.18539 154.79 3.01147C155.625 3.83756 156.669 4.42122 157.81 4.70001Z"
                fill="white"
              />
              <path
                d="M0 0.0500488C0.294797 1.1812 0.890079 2.21155 1.72278 3.03192C2.55548 3.8523 3.59456 4.43212 4.72998 4.71002H12.07L12.44 4.86005V23.39H17V4.86005L17.42 4.71002H24.77C25.8962 4.4174 26.925 3.83222 27.7521 3.01385C28.5793 2.19549 29.1754 1.17304 29.48 0.0500488H0Z"
                fill="white"
              />
              <path
                d="M140 23.44C140.994 23.0585 141.878 22.4385 142.576 21.6346C143.273 20.8307 143.762 19.8675 144 18.83H123.66V0.0300293H119.1V23.4301L140 23.44Z"
                fill="white"
              />
              <path
                d="M85.18 4.65002H101.3C102.453 4.36221 103.515 3.78918 104.389 2.98364C105.262 2.1781 105.92 1.16591 106.3 0.0400391H80.66V13.87H101.66V18.73H85.18C83.9261 19.0606 82.7566 19.653 81.7482 20.4683C80.7399 21.2835 79.9157 22.3032 79.33 23.46H80.66H106.12V9.27002H85.18V4.65002Z"
                fill="white"
              />
              <path
                d="M153.78 9.28998V23.44H158.32V14.02H174.84V23.44H179.37V9.30998L153.78 9.28998Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5">
                <rect width="180" height="23.47" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="headerLinks">
          <button className={` ${count === 1 ? "activeLinkBlue" : ""}`}>
            Model 5
          </button>
          <button className={` ${count === 2 ? "activeLinkRed" : ""}`}>
            Model 3
          </button>
          <button className={` ${count === 3 ? "activeLinkWhite" : ""}`}>
            Model X
          </button>
          <button className={` ${count === 4 ? "activeLinkBlack" : ""}`}>
            Model Y
          </button>
          <button>Solar Roof</button>
          <button>Solar Panels</button>
        </div>
        <div className="personalButtons">
          <div className="headerSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 0C13.9706 0 18 4.02944 18 9C18 11.1248 17.2637 13.0776 16.0323 14.6172L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L14.6172 16.0323C13.0776 17.2637 11.1248 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2Z"
                fill="white"
              />
            </svg>
            <p>Search</p>
          </div>
          <div className="headerProfile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g filter="url(#filter0_b_2_33)">
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="#F4FBFF"
                  fill-opacity="0.1"
                />
              </g>
              <path
                d="M11 28.5C11 28.9602 11.3727 29.3333 11.8333 29.3333C12.2939 29.3333 12.6667 28.9602 12.6667 28.5C12.6667 25.5593 14.3596 22.9559 16.9984 21.7248C17.9116 22.3183 18.998 22.6667 20.1659 22.6667C21.3381 22.6667 22.4287 22.3159 23.3441 21.7183C24.1318 22.0901 24.8618 22.5905 25.4694 23.1977C26.8862 24.6149 27.6667 26.498 27.6667 28.5C27.6667 28.9602 28.0394 29.3333 28.5 29.3333C28.9606 29.3333 29.3333 28.9602 29.3333 28.5C29.3333 26.0529 28.3796 23.7515 26.6478 22.0193C26.0683 21.4395 25.3948 20.9424 24.6723 20.5325C25.5008 19.5251 25.9992 18.2364 25.9992 16.8333C25.9992 13.6168 23.382 11 20.1659 11C16.9497 11 14.3325 13.6168 14.3325 16.8333C14.3325 18.233 14.8289 19.5185 15.6537 20.5249C12.7931 22.1355 11 25.1448 11 28.5ZM20.1659 12.6667C22.4632 12.6667 24.3325 14.536 24.3325 16.8333C24.3325 19.1307 22.4632 21 20.1659 21C17.8685 21 15.9992 19.1307 15.9992 16.8333C15.9992 14.536 17.8685 12.6667 20.1659 12.6667Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_2_33"
                  x="-500"
                  y="-500"
                  width="1040"
                  height="1040"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="250" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2_33"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2_33"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g filter="url(#filter0_b_2_42)">
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="#F4FBFF"
                  fill-opacity="0.1"
                />
              </g>
              <path
                d="M27 26H13C12.4477 26 12 25.5523 12 25C12 24.4477 12.4477 24 13 24H27C27.5523 24 28 24.4477 28 25C28 25.5523 27.5523 26 27 26Z"
                fill="white"
              />
              <path
                d="M27 21H13C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21Z"
                fill="white"
              />
              <path
                d="M27 16H13C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14H27C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_2_42"
                  x="-500"
                  y="-500"
                  width="1040"
                  height="1040"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="250" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2_42"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2_42"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </header>
      <div className="carsconatiner">
        <Carousel
          height={180}
          previousControlIcon={
            <IconArrowLeft
              onClick={() => {
                countNumberminus();
              }}
              className="changeCarbtn1"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "85px",
                background: "rgba(244, 251, 255, 0.10)",
                color: "white",
              }}
            />
          }
          nextControlIcon={
            <IconArrowRight
              onClick={() => {
                countNumber();
              }}
              className="changeCarbtn2"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "85px",
                background: "rgba(244, 251, 255, 0.10)",
                color: "white",
              }}
            />
          }
        >
          <Carousel.Slide>
            <div className={`BluecarContainer `}>
              <div className="carBox">
                <img src={BlueTesla} alt="" />
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`RedcarContainer `}>
              <div className="carBox ">
                <img src={RedCar} alt="" />
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`WhitecarContainer `}>
              <div className="carBox ">
                <img src={WhiteTesla} alt="" />
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`BlackcarContainer `}>
              <div className="carBox ">
                <img src={BlackTesla} alt="" />
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>

      <div className="footerLinks">
        <div className="carInfo">
          <div>
            <p className="carInfo1">396 mi</p>
            <p className="carInfo2">Range (EPA est.)</p>
          </div>
          <div>
            <p className="carInfo1">1.99 s</p>
            <p className="carInfo2">0-60 mph*</p>
          </div>
          <div>
            <p className="carInfo1">200 mph</p>
            <p className="carInfo2">Top Speed†</p>
          </div>
          <div>
            <p className="carInfo1">1,020 hp</p>
            <p className="carInfo2">Peak Power</p>
          </div>
        </div>
        <div
          className={
            count === 1
              ? "orderBtnBlue"
              : count === 2
              ? "orderBtnRed"
              : count === 3
              ? "orderBtnWhite"
              : count === 4
              ? "orderBtnBlack"
              : ""
          }
        >
          <p>Order Now </p>
          {count === 3 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M19.8289 7.55462L13.8293 0.888313C13.7013 0.746988 13.5226 0.666992 13.3333 0.666992H9.33352C9.07087 0.666992 8.83221 0.82165 8.72422 1.06164C8.61756 1.30296 8.66155 1.58428 8.83754 1.77893L14.4359 7.99993L8.83754 14.2196C8.66155 14.4156 8.61622 14.6969 8.72422 14.9369C8.83221 15.1782 9.07087 15.3329 9.33352 15.3329H13.3333C13.5226 15.3329 13.7013 15.2515 13.8293 15.1129L19.8289 8.44657C20.0569 8.19325 20.0569 7.8066 19.8289 7.55462Z"
                fill="black"
              />
              <path
                d="M11.1628 7.55462L5.16314 0.888313C5.03514 0.746988 4.85649 0.666992 4.66716 0.666992H0.66738C0.404728 0.666992 0.166074 0.82165 0.0580799 1.06164C-0.048581 1.30296 -0.00458339 1.58428 0.171407 1.77893L5.76977 7.99993L0.171407 14.2196C-0.00458339 14.4156 -0.0499143 14.6969 0.0580799 14.9369C0.166074 15.1782 0.404728 15.3329 0.66738 15.3329H4.66716C4.85649 15.3329 5.03514 15.2515 5.16314 15.1129L11.1628 8.44657C11.3908 8.19325 11.3908 7.8066 11.1628 7.55462Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M19.8288 7.55462L13.8292 0.888313C13.7012 0.746988 13.5225 0.666992 13.3332 0.666992H9.3334C9.07074 0.666992 8.83209 0.82165 8.7241 1.06164C8.61743 1.30296 8.66143 1.58428 8.83742 1.77893L14.4358 7.99993L8.83742 14.2196C8.66143 14.4156 8.6161 14.6969 8.7241 14.9369C8.83209 15.1782 9.07074 15.3329 9.3334 15.3329H13.3332C13.5225 15.3329 13.7012 15.2515 13.8292 15.1129L19.8288 8.44657C20.0568 8.19325 20.0568 7.8066 19.8288 7.55462Z"
                fill="white"
              />
              <path
                d="M11.1628 7.55462L5.16314 0.888313C5.03514 0.746988 4.85649 0.666992 4.66716 0.666992H0.66738C0.404728 0.666992 0.166074 0.82165 0.0580799 1.06164C-0.048581 1.30296 -0.00458339 1.58428 0.171407 1.77893L5.76977 7.99993L0.171407 14.2196C-0.00458339 14.4156 -0.0499143 14.6969 0.0580799 14.9369C0.166074 15.1782 0.404728 15.3329 0.66738 15.3329H4.66716C4.85649 15.3329 5.03514 15.2515 5.16314 15.1129L11.1628 8.44657C11.3908 8.19325 11.3908 7.8066 11.1628 7.55462Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeslaBlue;
