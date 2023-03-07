import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
import Icon1 from '../../images/p5js.svg'
import Icon2 from '../../images/infinite.svg'
import Icon3 from '../../images/test.png'
const  Services = () => {
  return (
    <ServicesContainer id="About blockScapes">
      <ServicesH1>About blockScapes</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={() => window.location.href = 'https://medium.com'}>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Fully Generative</ServicesH2>
          <ServicesP>
            Each piece is fully on-chain, rendered perpetually in p5js using its mint hash and tokenid. Click any box to learn more about it
          </ServicesP>
        </ServicesCard>
        <ServicesCard  onClick={() => window.location.href = 'https://medium.com'}>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Not Animated, Infinite</ServicesH2>
          <ServicesP>
            blockScapes are not .gifs or .mp4s that loop or end, but are dynamically rendered javascript using randomness to make each viewing unique and infinite.
          </ServicesP>
        </ServicesCard>
        <ServicesCard  onClick={() => window.location.href = 'https://medium.com'}>
          <ServicesIcon src={Icon3} />
          <ServicesH2>On-Chain Security</ServicesH2>
          <ServicesP>
            blockScapes utilizes ArtBlocks secure contract standards for storing art scripts and rendering art with each tokenid and mint hash.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
export default Services;