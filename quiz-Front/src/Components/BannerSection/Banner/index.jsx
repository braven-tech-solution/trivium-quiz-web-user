import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-900px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedText = styled.p`
  opacity: 0;
  animation: ${slideIn} 2s ease forwards;
`;
const AnimatedDes = styled.p`
  opacity: 0;
  animation: ${slideIn} 1s ease forwards;
`;

const Banner = ({ banner, ques, ans }) => {
  const animatedTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Fire callback when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (animatedTextRef.current) {
      observer.observe(animatedTextRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [banner]); // Run useEffect whenever the banner prop changes

  const styles = {
    background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${banner}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    objectFit: "cover",
    // width: "100%"
  };
  // console.log(isVisible);
  return (
    <>
      <div
        className={`px-10 w-full md:h-[78vh] h-[30vh]  duration-300 `}
        style={styles}
      >
        <div
          className={`pt-[300px] absolute top-0 text-white`}
          ref={animatedTextRef}
        >
          <AnimatedText>
            <p className="text-2xl text-white font-semibold w-[500px] capitalize">
              {ques}
            </p>
          </AnimatedText>
          <AnimatedDes>
            <p className="text-4xl font-semibold w-[500px] capitalize">{ans}</p>
          </AnimatedDes>
        </div>
      </div>
    </>
  );
};

export default Banner;
