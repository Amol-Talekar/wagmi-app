import React from "react";
import {
  useAccount,
  useConnect,
  useEnsName,
  useNetwork,
  useBalance,
  useDisconnect,
} from "wagmi";
import { HomeContainer } from "./style";

export const Home = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { chain, chains } = useNetwork();

  const {
    data: balanceData,
    isError,
    isLoading,
  } = useBalance({
    address: address,
  });

  // console.log(
  //   "address: ",
  //   address,
  //   "  ",
  //   "ensName: ",
  //   ensName,
  //   " ",
  //   "chainId",
  //   chain,
  //   "  ",
  //   "Chain"
  // );

  return (
    <HomeContainer>
      {isConnected ? (
        <div>
          <h2>
            Chain ID : {chain?.name} {chain?.id}
          </h2>
          <h2>Address : {address}</h2>
          <h2>
            Balance : {balanceData?.formatted} {balanceData?.symbol}
          </h2>
        </div>
      ) : (
        <h2>You have not connected yet</h2>
      )}
    </HomeContainer>
  );
};
