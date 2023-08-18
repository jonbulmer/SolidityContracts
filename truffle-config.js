module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"    
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  migrations_directory: './src/contracts/migrations/',
  compilers: {
    solc: {
      version: "0.8.17",
      opmimizer: {
        enabled: true,
        runs:1000  
      },
      "outputSelection": {
        "*": {
          "*": [
            "evm.bytecode",
            "evn.deployedBytecode",
            "devdoc",
            "userdoc",
            "metadata",
            "abi"
          ]
        }
      },
      libraries: {}
    }
  }
}
