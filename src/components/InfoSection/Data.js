export const homeObjOne={
    id: 'Mint',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine:'Mint blockScapes',
    headline: 'public mint is currently closed',
    buttonLabel:'Mint',
    imgStart:false, 
    vid: require('../../videos/fin.mp4'),
    alt:'Car',
    dark:true,
    primary:true,
    darkText:false,
    kappa:false
}

export const homeObjTwo={
    id: 'info',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    headline: 'Mint Info' ,
    description:"The relatively low supply and 1 per txn mint structure is intentionally designed to create a better holder distribution & offer more creative opportunities to engage and reward holders in the future." ,
    extraText1: "Mint Date: April 3rd",
    extraText2: "Supply : 1234",
    extraText3: "Mint price: .0069",
    extraText4: "Per Txn: 1",
    extraText5: "Per Wallet: 5",
    buttonLabel:"Learn About the Art",
    imgStart:true,
    img: require('../../videos/wen.gif'),
    alt:'Piggybank',
    dark:false,
    primary:false,
    darkText:true,
    kappa:true
}

export const homeObjThree={
    id: 'Join Us',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine:'Join Our Community',
    headline: 'Be the first to get announcements and updates',
    description:"All future events or drops will be announced first via Twitter, so drop us a follow to stay updated.",
    buttonLabel:'Join Us',
    imgStart:false,
    img: require('../../images/community.svg'),
    alt:'Welcome',
    dark:false,
    primary:false,
    darkText:true,
    kappa:false,
    onClick : 'https://linktr.ee/blockscapes'
}  