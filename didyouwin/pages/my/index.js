import Header from "../../components/Header";
import Link from "next/link";
import { nftList } from "../../competition";

const nftList2022 = nftList.filter?.((nft) => nft.date.startsWith("2022"));
const nftList2023 = nftList.filter?.((nft) => nft.date.startsWith("2023"));

export default function My() {
  return (
    <div>
      <div className="profile-div">
        <div className="profile-img">
          <img src="/imgs/profile/3DDD.png" alt="profile" />
        </div>
        <div className="profile-info">
          <h1>Yonnie</h1>
        </div>
      </div>
      <div className="nft-div">
        <NftListPerYear year="2023" nftList={nftList2023} />
        <NftListPerYear year="2022" nftList={nftList2022} />
      </div>
      <style jsx>{`
        .profile-div {
          padding: 2rem 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .profile-img {
          width: 8rem;
          height: 8rem;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .profile-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profile-info h1 {
          letter-spacing: 2px;
        }
        .nft-div {
          padding: 0 1rem;
          max-width: 768px;
          margin-inline: auto;
        }
      `}</style>
    </div>
  );
}

const NftListPerYear = ({ year, nftList }) => {
  return (
    <div className="nft-list">
      <div className="nft-list-title">
        <h2>{year}</h2>
      </div>
      <div className="nft-list-content">
        {nftList?.map((nft, index) => {
          const offset = year === "2023" ? 0 : nftList2023?.length;
          const pageId = index + 1 + offset;
          return (
            <div className="nft-img" key={index}>
              <Link href={"/my/" + pageId}>
                <img src={nft.img_url} alt={nft.title} />
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .nft-list {
            margin-block: 2rem;
            width: 90%;
            margin-inline: auto;
          }
          .nft-list-title {
          }
          .nft-img {
            width: 6rem;
            height: 6rem;
            border-radius: 1.5rem;
            overflow: hidden;
          }
          .nft-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .nft-list-content {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
          }
        `}
      </style>
    </div>
  );
};
