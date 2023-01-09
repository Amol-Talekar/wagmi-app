import {
  configureChains,
  goerli,
  createClient,
  useConnect,
  useDisconnect,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";

import { InjectedConnector } from "wagmi/connectors/injected";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import {
  ConnectButton,
  NavbarCOntainer,
  DisconnectButton,
  ButtonDiv,
} from "./style";

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [
    infuraProvider({
      apiKey: "https://goerli.infura.io/v3/30525f1d08384859ad483663c37bb5e2",
      priority: 0,
    }),
    publicProvider({ priority: 1 }),
  ]
);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export const Navbar = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();

  const coinbaseCnnector = new CoinbaseWalletConnector({
    chains: [goerli],
    options: {
      appName: "wagmi-app",
      jsonRpcUrl:
        "https://goerli.infura.io/v3/30525f1d08384859ad483663c37bb5e2",
    },
  });
  const walletConnectConnector = new WalletConnectConnector({
    chains: [goerli],
    options: {
      qrcode: true,
      rpc: {
        5: "https://goerli.infura.io/v3/30525f1d08384859ad483663c37bb5e2",
      },
    },
  });

  return (
    <NavbarCOntainer>
      <ButtonDiv>
        <ConnectButton onClick={() => connect()}>Metamask</ConnectButton>

        <ConnectButton onClick={() => coinbaseCnnector.connect()}>
          Coinbase
        </ConnectButton>

        <ConnectButton onClick={() => walletConnectConnector.connect()}>
          WalletConnect
        </ConnectButton>

        <DisconnectButton onClick={() => disconnect()}>
          Disconnect
        </DisconnectButton>
      </ButtonDiv>
    </NavbarCOntainer>
  );
};
