import {Wallet} from './near/nearWallet';
import NearInterface from './near/nearInterface';

class BlockchainInterface {
  wallet;
  interface;

  constructor ({account, network = 'testnet'}) {
    if(process.env.BLOCKCHAIN.toUpperCase() === "NEAR"){
      this.wallet = new Wallet({createAccessFor: account, network});
      this.interface = new NearInterface({walletToUse: this.wallet});
    }
  };
}

export default BlockchainInterface;
