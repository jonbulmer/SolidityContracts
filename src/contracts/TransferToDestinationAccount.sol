pragma solidity ^0.8.17;

contract TranferToDestinationAccount {
    event Received(address, uint256);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}