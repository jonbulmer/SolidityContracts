const TIMEDividend =  artifacts.require("TIMEDividend");
const InternetMoneySwapRouter = artifacts.require("InternetMoneySwapRouter");

module.exports = async function (callback) {
    const accounts = await new web3.eth.getAccounts();
    timeDividend = await TIMEDividend.deployed();
    accumulativeDididend = await timeDividend.accumulativeDividendOf(accounts[0]);
    console.log(accumulativeDididend.toString());
    totalSupply = await timeDividend.totalSupply();
    console.log(totalSupply.toString());
    imSwap = await InternetMoneySwapRouter.deployed();
    fee = await imSwap.destination();

    console.log(fee);

    
    //console.log(web3.utils.fromWei(balance.toString()));
    callback();
}