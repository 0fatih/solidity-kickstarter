import web3 from "./web3";

const data = require('./build/contracts/CampaignFactory.json');
const instance = new web3.eth.Contract(
    data.abi,
  "0x9ba0161a968526C1BB6618efFD74f76e663c9A8c"
);



export default instance;