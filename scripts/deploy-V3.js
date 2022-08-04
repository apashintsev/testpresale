const { ethers, upgrades } = require("hardhat");

const PROXY = "0x0EB0f941c91051D947f02c601A351dEFc9049fcE";

async function main() {
    const MyERC20UpgradebleV3 = await ethers.getContractFactory("MyERC20UpgradebleV3");
    console.log("Upgrading MyERC20Upgradeble...");
    await upgrades.upgradeProxy(PROXY, MyERC20UpgradebleV3);
    console.log("MyERC20Upgradeble upgraded");
}

main();