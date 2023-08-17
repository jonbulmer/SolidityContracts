const TIMEDividend = artifacts.require('TIMEDividend');
const supply = 20000000000;
module.exports = function (deployer) {
    deployer.deploy(TIMEDividend, supply);
}