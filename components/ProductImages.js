import styled from "styled-components";
import { useState } from "react";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

const Image = styled.img`
    width: 60px;
    height: 60px;
  `;

const BigImage = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 60px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        {/* <BigImage src={activeImage} /> */}
        <SideBySideMagnifier
          alwaysInPlace
          transitionSpeed="0.1"
          inPlaceMinBreakpoint
          imageSrc={activeImage}
          imageAlt="Example"
        />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}