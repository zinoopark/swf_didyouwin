import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ConfettiExplosion from "react-confetti-explosion";

import { useEffect, useState } from "react";
import { nftList } from "../../competition";

export default function detail() {
  const router = useRouter();
  const id = router.query.id;
  const nft = nftList[id - 1];
  const [isExplosion, setIsExplosion] = useState(false);
  const [medalAnimate, setMedalAnimate] = useState(false);

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMedalAnimate(true);
      setTimeout(() => {
        setIsExplosion(true);
      }, 400);
    }
  }, []);

  return (
    <div className="detail">
      {isExplosion && (
        <ConfettiExplosion
          particleCount={400}
          duration={2500}
          force={1}
        ></ConfettiExplosion>
      )}
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
        <h3>{nft?.title}</h3>
      </div>
      <div className="img-div">
        <img
          className={`${medalAnimate ? "medal-animation" : ""}`}
          src={"/imgs/medal.png"}
          alt={nft?.title}
        />
      </div>
      <div className="date narrow">
        <p>{nft?.date}</p>
      </div>
      <div className="description narrow">
        <p>{nft?.description}</p>
      </div>
      <div className="narrow">
        <p>Mass Adoption</p>
      </div>
      <div className="narrow rank">
        <p>{nft?.rank}st Place</p>
      </div>
      <div className="twitter">
        <p>Go get twitter badge.</p>
      </div>
      <style jsx>{`
        .rank {
          margin-top: 2rem;
        }

        .title {
          padding-top: 8rem;
        }
        .title h3 {
          text-align: center;
        }
        .date {
          margin-block: -1rem 2rem;
        }
        .img-div {
          width: 14rem;
          height: 14rem;
          background: url(${nft?.img_url}) no-repeat center bottom;
          background-size: cover;
          border-radius: 1.5rem;
          backdrop-filter: grayscale(80%);
          margin: 2rem auto;
          overflow: hidden;
        }
        .img-div img {
          display: block;
          width: 90%;
          height: 90%;
          margin: auto;
          object-fit: contain;
          margin-top: 20rem;
          transition: all 2.4s ease;
        }
        .medal-animation {
          margin-top: 0 !important;
        }
        p {
          text-align: center;
          font-size: 1.2rem;
          margin-block: 1rem;
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
