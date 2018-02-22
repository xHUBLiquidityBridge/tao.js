import dsEthToken_1 from '../abi/ds-eth-token/v1';
import erc20Token_1 from '../abi/erc20-token/v1';
import tokens from '../tokens';


const mapping = {

  [tokens.DAI] : [
    { version: 1, tokenAddress: '0x....', abi: erc20Token_1.interface },
  ]
};
export default mapping;