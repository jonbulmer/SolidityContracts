const InternetMoneySwapRouter = artifacts.require('InternetMoneySwapRouter');

module.exports = function (deployer, network, accounts) {
    const fee = 729;
    const destination = "0x5d73A2001c69F97E29303DD806E8349AA8170449";
    const wNative = "0x4924E36Ac85D48fE6838B4c30B6713272D2C5742";
    deployer.deploy(InternetMoneySwapRouter,destination,wNative ,fee);
}