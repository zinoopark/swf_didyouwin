require("dotenv").config();
const abi = require("../artifacts/contracts/DIDYouWinToken.sol/Token.json").abi;

const ethers = require("ethers");

const MUMBAI_RPC_URL = "https://rpc-mumbai.maticvigil.com/";
const mumbai = new ethers.JsonRpcProvider(MUMBAI_RPC_URL);

const owner = new ethers.Wallet(process.env.PRIVATE_KEY, mumbai);
const contract = new ethers.Contract(process.env.DEPLOYED_CONTRACT, abi, owner);

async function main() {
  const totalSupply = await contract.totalSupply();
  const name = await contract.name();
  const symbol = await contract.symbol();

  console.log(`Contract Address : ${process.env.DEPLOYED_CONTRACT}`);
  console.log(`Token TotalSupply : ${Number(totalSupply)}`);
  console.log(`Token name : ${name}`);
  console.log(`Token symbol : ${symbol}`);
}
main();

module.exports = {
  owner,
  contract,
  mumbai,
};
