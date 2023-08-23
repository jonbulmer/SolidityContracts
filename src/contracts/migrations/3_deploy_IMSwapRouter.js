const InternetMoneySwapRouter = artifacts.require('InternetMoneySwapRouter');

module.exports = function (deployer, network, accounts) {
    const fee = 729;
    const destination = accounts[9];
    const wNative = accounts[8];
    deployer.deploy(InternetMoneySwapRouter,destination,wNative ,fee);
}