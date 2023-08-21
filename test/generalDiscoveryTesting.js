const TIMEDividend =  artifacts.require("TIMEDividend");

module.exports = async function (callback) {
    const accounts = await new web3.eth.getAccounts();
    timeDividend = await TIMEDividend.deployed();
    balance = await timeDividend.accumulativeDividendOf(accounts[1]);
    console.log(balance);
    
    //console.log(web3.utils.fromWei(balance.toString()));
    callback();
}