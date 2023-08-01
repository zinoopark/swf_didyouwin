import Header from "../../components/Header";
import Link from "next/link";

const nftList = [
  {
    img_url: "https://seoulweb3festival.com/share/img/sub/img01_1_poster.jpg",
    title: "Seoul Web 3.0 Festival 2023",
    description: "Art Hall 2 & Design Hall, Dongdaemun Design Plaza(DDP)",
    date: "2023-11-27",
    rank: 1,
    type: "Programming",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2023/07/CCimglYRrmIIJlUVBafFqLBvMVxSxsXg.png",
    title: "캠퍼스온에어-지구를 지켜라, 예스지! 환경영상공모전",
    description: "2023 캠퍼스온에어-지구를 지키자, 예스지(ESG)! ",
    date: "2023-08-07",
    rank: 1,
    type: "Climate",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2023/07/tnGYckFWgvekepsNcPtLDzINtlYXXMRN.png",
    title: "제16회 서울시 청소년 119안전뉴스 영상 경연대회",
    description: "제16회 서울시 청소년 119안전뉴스 영상 경연대회",
    date: "2023-07-24",
    rank: 2,
    type: "Art",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2023/07/hRNtQDXdaQGQudJzGkWGnKiMjGbJhhGF.jpg",
    title: "여름방학 서울런 학습수기·영상·웹툰 공모전",
    description: "여름방학 서울런 학습수기·영상·웹툰 공모전",
    date: "2023-09-24",
    rank: 1,
    type: "Art",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2023/07/siicvKvTxMxOYYcrMcMdPbFzWgCnJxJf.png",
    title: " 맛있는 아리수 숏폼, 웹툰 공모전",
    description: "맛있는 아리수 숏폼, 웹툰 공모전",
    date: "2023-02-11",
    rank: 1,
    type: "Art",
  },
  {
    img_url:
      "https://news.seoul.go.kr/culture/files/2023/07/64ae017df0fab2.75151665.jpg",
    title: "제3회 서울유니버설디자인어워드",
    description: "제3회 서울유니버설디자인어워드",
    date: "2023-01-27",
    rank: 1,
    type: "Art",
  },
  {
    img_url:
      "https://womenmarathon.co.kr/data/file/board01_8012/thumb-238350739_LUWrSpMx_7c58b5b5c92941423d7d80a5853071f85b7b44c3_600x848.jpg",
    title: "2023 서울여성마라톤",
    description: "2023 서울여성마라톤",
    date: "2023-11-27",
    rank: 1,
    type: "Sports",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2023/06/PJBFKlcEdlgenLcNodzFjisYsmsvMZbY.png",
    title: "2023 서울정원박람회 학생정원 아이디어 공모",
    description: "월드컵 하늘공원 일대",
    date: "2023-11-27",
    rank: 1,
    type: "Climate",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2021/09/GMRZlAPkHMzDGcpBdRiIVDyKHOChBfqO.jpg",
    title:
      "2021 시민청 정책카페 '나와 닮은 반려식물 찾기 프로젝트 : 나의 비밀정원'",
    description:
      "2021 시민청 정책카페 '나와 닮은 반려식물 찾기 프로젝트 : 나의 비밀정원'",
    date: "2023-11-27",
    rank: 1,
    type: "Climate",
  },
  {
    img_url:
      "https://mediahub.seoul.go.kr/uploads/competition/2021/12/ZlrIXUWnYraGexNRPciCmYjEcBeYdwsv.jpg",
    title:
      "청년과 함께하는 '서울시 에너지정보플랫폼 해커톤 대회' 시민평가단 모집",
    description:
      "청년과 함께하는 '서울시 에너지정보플랫폼 해커톤 대회' 시민평가단 모집",
    date: "2022-01-27",
    rank: 1,
    type: "Programming",
  },
  {
    img_url: "https://www.kchannel.kr/news/photo/202307/121215_116188_2216.png",
    title: "서울 100Km",
    description: "서울을 달리는 새로운 방법",
    date: "2022-11-27",
    rank: 1,
    type: "Sports",
  },
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dYo1TwSramfQYTT7M2wK9LNnSyGvcHBoCdx2zRVUVvp2uR5xBIDXZPDa-m7Rig2Sqmk&usqp=CAU",
    title: "2022 서울달리기",
    description: "2022 서울달리기",
    date: "2022-11-27",
    rank: 1,
    type: "Sports",
  },
];

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
