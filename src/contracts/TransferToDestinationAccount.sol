pragma solidity ^0.8.17;

contract TransferToDestinationAccount {
    event Received(address, uint256);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}