import { useAccount, ConnectButton } from "@web3modal/react"

const Home = () => {
  const { account } = useAccount()
  console.log(account.status)
  console.log(account.connector)
  return (
    <>
      {!account.isConnected ? (
        <ConnectButton />
      ) : (
        <h3>
          <span> Connected address: {account.address}</span>
          <br />
          <span> Connected provider: {account.connector.name}</span>
        </h3>
      )}
    </>
  )
}

export default Home
