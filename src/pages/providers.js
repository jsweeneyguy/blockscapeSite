import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, 
    chainId : 5,// Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: "0e7e7c844dbc4039b91a409a53242a8f" // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, 
    chainId : 5,// required
    options: {
      infuraId: "0e7e7c844dbc4039b91a409a53242a8f" // required
    }
  }
};