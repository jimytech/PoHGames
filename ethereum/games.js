import web3 from './web3';
import PoHGames from './build/PoHGames.json';
 
const instance = new web3.eth.Contract(
  PoHGames.abi,
  "0xaA1a35D0ae3958d1a6E27eD8b7F95FC1f969eAf3"
);
 
export default instance;