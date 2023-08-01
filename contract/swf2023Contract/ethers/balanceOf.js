const ethers = require("ethers");
const { contract } = require("./loadContract");

const receiver = "0x1b04d37A675897bb0B42c7e0f502071E34AABeD1";

async function main() {
  const balance = await contract.balanceOf(receiver);
  console.log(Number(balance));
}

main();
