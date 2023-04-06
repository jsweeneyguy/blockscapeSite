import React, { useState, useEffect} from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
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
import { VideoBg } from "../components/HeroSection/HeroElements";

const web3Modal = new Web3Modal({
  cacheProvider : false,
  providerOptions // required
});

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState('');
  const [supply , setSupply ] = useState();

  useEffect(() => {
    window.addEventListener('beforeunload', onDisconnect);

    return () => {
      window.removeEventListener('beforeunload', onDisconnect);
    };
  }, []);

  const onDisconnect = async () => {
    // your function code here
    await setAccount('');
    library.currentProvider.disconnect();
  };


const connectWallet = async () => {
  try {
    let provider = await web3Modal.connect();
    let library = new Web3(provider);
    let accounts = await library.eth.getAccounts();
    let account = accounts[0];
    setLibrary(library);
    if (accounts) {
      setAccount(account);
      library.eth.defaultAccount = account;
      let testContract = new library.eth.Contract( abiJson , "0x7a69feDf2723A4A65A2e42Df1E1b17b208aCd7A0");
      let res = await testContract.methods.totalSupply().call();
      await setSupply(res);
      console.log(res);

    } 
  } catch (error) {
    console.error(error);
  }
};

let sendTransaction = async () => {
  try {
    let testContract = new library.eth.Contract( abiJson , "0x7a69feDf2723A4A65A2e42Df1E1b17b208aCd7A0");
    let encodedFunction = testContract.methods.mintPublic(1).encodeABI();
    let gasEstimate = await library.eth.estimateGas({ // estimate gas required to execute the transaction
      from: library.eth.defaultAccount,
      to: "0x7a69feDf2723A4A65A2e42Df1E1b17b208aCd7A0",
      data: encodedFunction,
      value: Web3.utils.toWei(".0069", "ether")
    });
    await testContract.methods.mintPublic(1).send({from : library.eth.defaultAccount , gas: gasEstimate , value: Web3.utils.toWei(".0069", "ether")});
    
  } catch (err) {
    console.log(err);
  }

}

  let Navbar = ({ toggle }) => {
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
                    to="info"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    Mint Info
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
            {account ? 
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

  let MintSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    vid,
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
                  <TextWrapper>
                  <div style={{ color: 'white' , fontSize : 16}} id='myDiv'>
                <p>Mint price: .0069</p><p>Per Txn: 1</p><p>Per Wallet: 5</p><p>Total Minted: {supply}/1234</p>
                </div>
                </TextWrapper>
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
                  <VideoBg autoPlay loop muted src={vid.default} width="300px" height="300px" />
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
      <InfoSection {...homeObjTwo} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  );
};

export default Home;
