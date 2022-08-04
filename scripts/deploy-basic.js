const { ethers} = require("hardhat");

async function main() {
  console.log("Deploying MyTokenWithPresale...");

  const MyTokenWithPresale = await ethers.getContractFactory(
    "MyTokenWithPresale"
  );
  const myTokenWithPresale = await MyTokenWithPresale.deploy();

  await myTokenWithPresale.deployed();
  console.log("MyTokenWithPresale deployed to:", myTokenWithPresale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
