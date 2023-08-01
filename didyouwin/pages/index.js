import Header from "../components/Header";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { loggedIn, login } = useAuth();

  return (
    <div className="landing-page">
      <Header />
      <div className="container">
        <div className="landing-description">
          <h1>Collect NFTs</h1>
          <p>
            Receive your awards as NFTs<br></br>to be verified as a winner
          </p>
        </div>
        <div className="img-medal">
          <img src="/imgs/medal.png"></img>
        </div>
        <div className="landing-description">
          <h1>Be a Mentor</h1>
          <p>...or find one!</p>
        </div>
        <div className="img-person">
          <img src="/imgs/person_float.png"></img>
        </div>
        <div className="chat narrow">
          <div className="my-chat">
            <p>Hackathon&apos;s tmr</p>
            <p>I need some advice</p>
            <p>On my presentation cuz idk what to do</p>
          </div>
          <div className="mentor-chat">
            <h5>YONNIE &nbsp;&nbsp;🥇🥈</h5>
            <p>Maybe you could put some more</p>
            <p>Effort on your ppt</p>
            <p>B/c that was what got us the prize last year</p>
          </div>
        </div>
        <div className="landing-description">
          <h2>Collect awards and badges</h2>
        </div>
        <div className="img-win">
          <img className="img-trophy" src="/imgs/trophy.png"></img>
          <img className="img-sparkles" src="/imgs/sparkles.png"></img>
        </div>
        <div className="landing-description">
          <h2 className="last-sentence">
            Show Off
            <br></br>
            <br></br>
            And learn from each other
          </h2>
        </div>
        <div className="btn-wrapper">
          <Link href="/start">
            <button className="narrow">Get Started</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(50px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .chat {
            position: relative;
            z-index: 1;
            margin: 2rem 1.5rem;
            font-size: 10px;
            font-weight: 600;
          }
          .my-chat {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          .my-chat p {
            width: max-content;
            padding: 0.5rem 1rem;
            background: #fff;
            color: #000;
            border-radius: 9999px;
            text-align: right;
            margin-block: 5px;
          }
          .mentor-chat {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .mentor-chat h5 {
            margin: 0;
            letter-spacing: 2px;
            margin-bottom: 5px;
            font-family: "PPPangramSansNarrow";
            font-size: 12px;
          }
          .mentor-chat p {
            width: max-content;
            padding: 0.5rem 1rem;
            background: var(--point-color);
            color: #000;
            border-radius: 9999px;
            text-align: left;
            margin-block: 5px;
          }

          .btn-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-block: 4rem;
          }
          .img-win {
            position: relative;
            height: 12rem;
            margin-top: 1rem;
          }
          .img-trophy {
            position: absolute;
            height: 20rem;
            top: 20px;
            left: -60px;
            transform: rotate(15deg);
          }
          .img-sparkles {
            height: 10rem;
            transform: rotate(-30deg);
            position: absolute;
            top: 20px;
            right: 0;
          }

          .landing-page {
            overflow-x: hidden;
          }
          .container {
            max-width: 768px;
            margin-inline: auto;
            min-height: 100vh;
          }
          .img-person {
            position: relative;
            background: url("/imgs/person_float.png");
          }
          .img-person img {
            position: absolute;
            right: -1rem;
            height: 35rem;
            margin-top: -9rem;
            animation: float 5s infinite;
          }

          .img-medal {
            height: 15rem;
            padding-left: 4rem;
            margin-top: -2rem;
            margin-bottom: 1rem;
          }
          .img-medal img {
            height: 100%;
            width: auto;
            transform: rotate(-40deg);
          }
          .landing-description h1 {
            font-size: 3.8rem;
            margin: 0;
          }
          .landing-description h2 {
            font-size: 2.4rem;
            margin: 8rem -1.3rem 0;
          }
          .landing-description p {
            font-size: 1.2rem;
            margin: 0;
          }
          .landing-description {
            margin-inline: 1.5rem;
            margin-top: 1.5rem;
            position: relative;
            z-index: 1;
          }
          .landing-description:nth-child(1) {
            text-align: right;
          }
          .landing-description:nth-child(2) p {
            margin-left: 2rem;
            font-size: 1.8rem;
          }
          .last-sentence {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
