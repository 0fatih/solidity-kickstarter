import web3 from "./web3";


const data = require('./build/contracts/Campaign.json');

const Campaign = (address) => {
    return new web3.eth.Contract(
        data.abi,
        address
    );
}

export default Campaign;