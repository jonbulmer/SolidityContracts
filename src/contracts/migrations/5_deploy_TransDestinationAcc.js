const TransferToDesinationAccount =  artifacts.TransferToDesinationAccount('TransferToDestinationAccount');

module.exports = function (deployer) {
    deployer.deploy(TransferToDesinationAccount);
}