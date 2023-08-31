const TransferToDestinationAccount =  artifacts.require('TransferToDestinationAccount');

module.exports = function (deployer) {
    deployer.deploy(TransferToDestinationAccount);
}