const InternetMoneySwapRouter = artifacts.require('InternetMoneySwapRouter');

module.exports = function (deployer, network, accounts) {
    const fee = 729;
    const destination = "0xB370FEe7F317ef006e4e37504cb8D1aC730460C0";
    const wNative = "0x86789d5c943E44D79974E2b7CcAA0FC546D5552F";
    deployer.deploy(InternetMoneySwapRouter,destination,wNative ,fee);
}