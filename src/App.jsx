import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: "-0.9",
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.4,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".char", {
      scale: 0.5,
      x: "-50%",
      rotate: 0,
      duration: 3,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1.1,
      x: "-50%",
      rotate: 0,
      duration: 3,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.1}%`,
      });
      gsap.to(".sky", {
        x: `${xMove}%`,
      });
      gsap.to(".bg", {
        x: `${xMove * 0.1}%`,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bgwsky.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] ">
          <div className="landing bg-black overflow-hidden relative ">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-1">
                  <div className="line bg-white w-14 h-2"></div>
                  <div className="line bg-white w-9 h-2"></div>
                  <div className="line bg-white w-4 h-2"></div>
                </div>
                <h3 className="text-3xl -mt-2 leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden h-screen w-full">
              <img
                className=" sky scale-[2.5] rotate-[-20deg] absolute top-0 left-0 h-full w-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg scale-[1.05] rotate-[-20deg] absolute top-0 left-0 h-full w-full "
                src="./bg.png"
                alt=""
              />
              <div className=" text absolute scale-[1.2] rotate-[-10deg]  left-1/2 text-8xl -translate-x-1/2 text-white flex flex-col gap-1">
                <h1 className="-ml-10">grand</h1>
                <h1 className="ml-10">theft</h1>
                <h1 className="-ml-10">auto</h1>
              </div>
              <img
                className="char absolute -bottom-[42%] left-1/2 -translate-x-1/2 scale-[0.5] rotate-[-10deg]"
                src="./char.png"
                alt=""
              />
            </div>

            <div className="btmbar absolute bottom-0 left-0 w-full py-20 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex relative text-white items-center ">
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_display]">Scroll down</h3>
              </div>
              <img
                className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[55px] "
                src="./ps5.png"
                alt="ps6"
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="cntr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./char2_boy.png"
                  alt=""
                />
              </div>

              <div className="rg w-[30%]">
                <h1 className="text-6xl text-amber-500">Still Running</h1>
                <h1 className="text-6xl text-amber-500">Not Hunting</h1>
                <p className="mt-10 font-medium text-xl font-[Helvatica_Now_Display]">
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  eius sit fuga quia aspernatur, ut quibusdam repellat. Dolores,
                  doloremque repellat.
                </p>
                <p className="mt-4 font-medium text-xl font-[Helvatica_Now_Display]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  quidem ullam ad voluptatem similique inventore eum
                  consequuntur laborum. Accusantium deleniti repellat quae
                  possimus obcaecati quisquam porro assumenda, ex nesciunt
                  mollitia.
                </p>
                {/* <button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-600 text-black p-3 text-xl my-5">
                  Download Now
                </button> */}

                <div className="mt-6">
                  <a
                    className="bg-amber-600 hover:bg-amber-700 active:bg-amber-600 text-black p-3 text-xl"
                    href="https://www.youtube.com/watch?v=VQRLujxTm3c"
                    target="blank"
                  >
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
