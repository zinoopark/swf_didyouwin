const ethers = require("ethers");
const { owner, contract } = require("./loadContract");

async function mint() {
  const res = await contract.mintNFT(
    "0x1b04d37A675897bb0B42c7e0f502071E34AABeD1",
    "https://seoulweb3festival.com/"
  );
  console.log(res);
}
mint();
