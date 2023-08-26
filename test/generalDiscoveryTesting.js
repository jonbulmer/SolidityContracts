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

    const amountSwap = web3.utils.toBN(10);
    const decimals = web3.utils.toBN(18);

    const swapBN = amountSwap.mul(web3.utils.toBN(10).pow(decimals));

    //await imSwap.addDex(
    //    "Account8Dex",
    //    accounts[8]
    //);

    allDexInfo = await imSwap.allDexInfo();

    wETHAddress = await imSwap.wNative();

    console.log(wETHAddress);

    console.log(allDexInfo);

    const d1 = new Date();
    const now = d1.getTime();

    deadlineInDays = now + 360000;

    imSwap.swapNativeToV2(
        0,
        ["0x4924E36Ac85D48fE6838B4c30B6713272D2C5742","0x5d73A2001c69F97E29303DD806E8349AA8170449"],
        100,
        1,
        deadlineInDays
    );

    console.log("finish " + deadlineInDays);
    
    //console.log(web3.utils.fromWei(balance.toString()));
    callback();
}