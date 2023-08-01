import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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

export default function detail() {
  const router = useRouter();
  const id = router.query.id;
  const nft = nftList[id - 1];

  const goBack = () => {
    router.back();
  };

  return (
    <div className="detail">
      <button
        onClick={goBack}
        style={{
          all: "unset",
          position: "absolute",
          top: "2rem",
          left: "1.5rem",
        }}
      >
        <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
      </button>
      <div className="title">
        <h5>{nft?.title}</h5>
      </div>
      <div className="img-div">
        <img src={"/imgs/medal.png"} alt={nft?.title} />
      </div>
      <div className="date narrow">
        <p>{nft?.date}</p>
      </div>
      <div className="description narrow">
        <p>{nft?.description}</p>
      </div>
      <div className="narrow">
        <p>{nft?.rank}st Place</p>
      </div>
      <div className="twitter">
        <p>Go get twitter badge.</p>
      </div>
      <style jsx>{`
        .title {
          padding-top: 8rem;
        }
        .title h5 {
          text-align: center;
        }
        .img-div {
          width: 14rem;
          height: 14rem;
          background: url(${nft?.img_url}) no-repeat center;
          background-size: cover;
          border-radius: 1.5rem;
          backdrop-filter: grayscale(80%);
          margin: 2rem auto;
        }
        .img-div img {
          display: block;
          width: 90%;
          height: 90%;
          margin: auto;
          object-fit: contain;
        }
        p {
          text-align: center;
          margin-block: 2rem;
        }
        .twitter {
          margin-top: 14rem;
        }
        .detail {
          min-height: calc(100dvh - 4rem);
        }
      `}</style>
      `
    </div>
  );
}
