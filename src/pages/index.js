import React, { useState, useEffect} from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "../components/Navbar/NavbarElements";
import { IconContext } from "react-icons/lib";
import Web3Modal from "web3modal";
import { providerOptions } from "./providers";
import Web3 from "web3";
import { Button } from "../components/ButtonElement";
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
} from "../components/InfoSection/InfoElements";
import abiJson from "./abi";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [connected , setConnected] = useState(false);
  const web3Modal = new Web3Modal({
    cacheProvider : true,
    providerOptions // required
  });

const connectWallet = async () => {
  try {
    const provider = await web3Modal.connect();
    const library = new Web3(provider);
    const accounts = await library.eth.getAccounts();
    library.eth.getChainId().then(console.log)
    const account = accounts[0];
    console.log(account)
    console.log(accounts);
    setAccounts(accounts)
    setProvider(provider);
    setLibrary(library);
    if (accounts) {
      setAccount(account);
      library.eth.defaultAccount = account;
      const connected = true;
      setConnected(connected);

    } 
    console.log(account)
    console.log(connected)
  } catch (error) {
    console.error(error);
  }
};

const sendTransaction = async () => {
  try {
    const testContract = new library.eth.Contract( abiJson , "0x8320c49A391fe1E0F41d2345ED1BB2909096Df53");
    const encodedFunction = testContract.methods.store(100).encodeABI();
    const gasEstimate = await library.eth.estimateGas({ // estimate gas required to execute the transaction
      from: library.eth.defaultAccount,
      to: "0x8320c49A391fe1E0F41d2345ED1BB2909096Df53",
      data: encodedFunction,
    });
    console.log(gasEstimate);
    const sendTx = await testContract.methods.store(100).send({from : library.eth.defaultAccount , gas: gasEstimate});
    
  } catch (err) {
    console.log(err);
  }

}

  const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}>
                blockScapes
              </NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="Mint"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    Mint
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="About blockScapes"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    About the Art 
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="Join Us"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    Join Us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    onClick={() => window.location.href = 'https://linktr.ee/blockscapes'}
                    smooth={true}
                    duration={500}
                    spy={false}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    More
                  </NavLinks>
                </NavItem>
              </NavMenu>
            <>
            {connected ? 
            <NavBtn>
            <NavBtnLink onClick={connectWallet}>{String(account).substring(0,4)}...{String(account).substring(38,42)}</NavBtnLink>
          </NavBtn> :
            <NavBtn>
          <NavBtnLink onClick={connectWallet}>Connect Wallet</NavBtnLink>
          </NavBtn> 
          }
          </>
          </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  };

  const MintSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
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
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      offset={-80}
                      onClick={sendTransaction}
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
  
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <MintSection {...homeObjOne} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  );
};

export default Home;
