const TIMEDividend =  artifacts.require("TIMEDividend");
const InternetMoneySwapRouter = artifacts.require("InternetMoneySwapRouter");
const WETH = artifacts.require("WETH");

module.exports = async function (callback) {

    // The accounts on the instance
    const accounts = await new web3.eth.getAccounts();

    // the time contract
    timeDividend = await TIMEDividend.deployed();
    accumulativeDididend = await timeDividend.accumulativeDividendOf(accounts[0]);
    totalSupply = await timeDividend.totalSupply();
    console.log ("TIME Dividend");
    console.log("The total supply " + totalSupply.toString());
    console.log("The Accumulatve Dividend " +  accumulativeDididend[0]);

    imSwap = await InternetMoneySwapRouter.deployed();
    wETH = await WETH.deployed(); 

    const amountSwap = web3.utils.toBN(10);

    console.log("amountSwap " + amountSwap);

    const decimals = web3.utils.toBN(18);

    console.log("decimal " + decimals);

    const swapBN = amountSwap.mul(web3.utils.toBN(10).pow(decimals));

    //console.log("swapBN " + swapBN);

    //await imSwap.addDex(
    //    "UniSwapV2Router",
    //    "0x657028D5db0dA3D16A611AAd138b15DBc7A7650e"
    //);

    allDexInfo = await imSwap.allDexInfo();

    wETHAddress = await imSwap.wNative();

    //await wETH.deposit({from: accounts[9], value: swapBN });
    
    wEthBalance  = await wETH.totalSupply();

    //for (i  0 )
    account10 = await wETH.balanceOf(accounts[9]);

    const decimals13 = web3.utils.toBN(13);

    const amountIn = web3.utils.toBN(503645);

    const amountInBN = amountIn.mul(web3.utils.toBN(10).pow(decimals13));

    console.log("amountIn " + amountInBN);


    //console.log("WETH Balance: " + wEthBalance );



    console.log(wETHAddress);

    //console.log(allDexInfo);

    const d1 = new Date();
    const now = d1.getTime();

    deadlineInDays = now + 360000;


    
    await imSwap.swapNativeToV2(
        0,
        accounts[0],
        ["0x0875Fe5b3414afBC10B5610dCC75E0C4A2033a08","0xc606CC8a65b1978C2D376843b8DE14739C842c4C"],
        1007290,
        1,
        deadlineInDays
    ).send({from: accounts[0], value: swapBN});

    //checkPair = await imSwap.checkPairForValidPrice(   
    //  "0x657028D5db0dA3D16A611AAd138b15DBc7A7650e",
    //    "0x0875Fe5b3414afBC10B5610dCC75E0C4A2033a08"
    //    );

    //console.log("checkPair");    

    //console.log(checkPair);    

    //console.log("finish " + deadlineInDays);
    
    //console.log(web3.utils.fromWei(balance.toString()));
    callback();
}