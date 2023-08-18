const InternetMoneySwapRouter = artifacts.require('InternetMoneySwapRouter');
const fee = 729;
const destination = '0xdeA72ab699E1EfcdE4faE2b192719306A5E53FD0';
const wNative = '0x30a8184bf935Ac6F58131F0fF519FfD5E26F32D8';
module.exports = function (deployer) {
    deployer.deploy(InternetMoneySwapRouter,destination,wNative ,fee);
}