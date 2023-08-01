const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Token", [
    "DID YOU WIN?",
    "DY",
    true,
  ]);

  await contract.waitForDeployment();
  console.log(`Deployed : ${contract.target}`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
