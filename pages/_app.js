import { Web3Modal } from "@web3modal/react"
import { chains, providers } from "@web3modal/ethereum"
import "../styles/globals.css"

const modalConfig = {
  projectId: "WALLCONN_ID",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "Next Web3Modal Connection",
    chains: [
      chains.goerli,
      chains.polygonMumbai,
      chains.binanceSmartChainTestnet,
      chains.arbitrumGoerli,
    ],
    providers: [
      providers.walletConnectProvider({
        projectId: "WALLCONN_ID",
      }),
    ],
    autoConnect: true,
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal config={modalConfig} />
    </>
  )
}

export default MyApp
