const ethers = require("ethers");
// const { contract } = require("./loadContract");
const { owner, mumbai } = require("./loadContract");

const abi = require("../artifacts/contracts/DIDYouWinToken.sol/Token.json").abi;

const receiver = new ethers.Wallet(
  "49cfd32417bc6549bf1b33a45635bb1086b50f4c6ce0f02d3730dec380cc0f8a",
  mumbai
);

const contract = new ethers.Contract(
  process.env.DEPLOYED_CONTRACT,
  abi,
  receiver
);

async function main() {
  const transferRes = await contract.safeTransferFrom(
    receiver.address,
    owner.address,
    1
  );
  console.log(transferRes);
}
main();
