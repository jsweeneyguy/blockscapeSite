import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  kappa,
  img,
  alt,
  primary,
  dark,
  dark2, 
  extraText1,
  extraText2,
  extraText3,
  extraText4,
  extraText5,
  onClick
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <TextWrapper>
                <div style={{ color: 'black' , fontSize : 22}} id='myDiv'>
                <p>{extraText1}</p><p>{extraText2}</p><p>{extraText3}</p><p>{extraText4}</p><p>{extraText5}</p>
                </div>
                </TextWrapper>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={kappa? "About blockScapes" : "" }
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    offset={-80}
                    onClick={() => window.location.href = onClick}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
