import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GIF from "../assets/Home Video.mp4";

import img1 from "../assets/Nfts/space-1.PNG"
import img2 from "../assets/Nfts/space-2.jpg"
import img3 from "../assets/Nfts/space-3.PNG"
import img4 from "../assets/Nfts/space-4.PNG"
import img5 from "../assets/Nfts/space-5.PNG"
import img6 from "../assets/Nfts/space-6.PNG"
import img7 from "../assets/Nfts/space-7.PNG"
import img8 from "../assets/Nfts/space-8.PNG"
import img9 from "../assets/Nfts/space-9.PNG"
import img10 from "../assets/Nfts/space-10.PNG"

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

const CoverVideo = () => {

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgIndex === (images.length - 1)) {
        setImgIndex(0);
        return
      }
      setImgIndex(prevState => prevState + 1)
    }, 500)

    return () => clearInterval(interval)
  }, [imgIndex])

  useEffect(() => {
    const preloadImages = (urlList) => {
      let fragment = document.createDocumentFragment(); 
      for (let i = 0; i < urlList.length; i++) {
        const imgUrl = urlList[i];
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'preload');
        linkEl.setAttribute('href', imgUrl);
        linkEl.setAttribute('as', 'image');
        fragment.appendChild(linkEl);
      }
      document.head.appendChild(fragment);
    }
    preloadImages(images)
  }, [])

  return (
    <VideoContainer>
      <Img 
        src={images[imgIndex]} 
        alt=""
      />
      {/* <video src={GIF} type="video/mp4" autoPlay muted loop /> */}
    </VideoContainer>
  );
};

export default CoverVideo;
