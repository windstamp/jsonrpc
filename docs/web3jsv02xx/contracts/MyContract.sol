pragma solidity ^0.4.23;

contract MyContract {
    address public owner;
    int public value;

    event SetValue(int value);

    constructor() public {
        owner = msg.sender;
    }

    function setValue(int v) public {
        value = v;

        emit SetValue(value);
    }

    function getValue() public view returns(int) {
        return value;
    }
}
