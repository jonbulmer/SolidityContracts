// Use BigNumber
const decimals = web3.utils.toBN(18);
const totalSupply = web3.utils.toBN(20000000000);

const TIMEDividend = artifacts.require('TIMEDividend');
const supply = totalSupply.mul(web3.utils.toBN(10).pow(decimals));
module.exports = function (deployer) {
    deployer.deploy(TIMEDividend, supply);
}