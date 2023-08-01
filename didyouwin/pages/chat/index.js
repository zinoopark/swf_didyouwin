import Link from "next/link";
import { useRouter } from "next/router";
import { nftList } from "../../competition";

const typeList = ["All Chats", "Programming", "Art", "Climate", "Sports"];

export default function Index() {
  const router = useRouter();
  const tab = router.query.tab;

  return (
    <div>
      <div className="header">
        <h2>Your Chats</h2>
      </div>
      <div className="sub-header">
        <ul>
          {typeList.map((type) => {
            return (
              <li className={`${type === tab ? "active" : ""}`} key={type}>
                <Link href={`/chat?tab=${type}`}>{type}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="chat-list">
        <ul>
          {nftList.map((nft) => {
            return (
              <li className="chat-li" key={nft.title}>
                <Link href={`/chat/${nft.title}`}>
                  <div className="chat">
                    <div className="chat-img">
                      <img src={nft.img_url} alt={nft.title} />
                    </div>
                    <div className="chat-title">
                      <h3>{nft.title}</h3>
                      <p>{nft.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <style global jsx>{`
        .chat-title {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .chat-list li {
          padding: 1rem;
        }
        .chat {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
        }
        h3,
        p {
          margin: 0;
        }

        .chat-img {
          width: max-content;
        }
        .chat-img img {
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          object-fit: cover;
        }

        .sub-header {
          overflow-x: scroll;
        }
        .sub-header::-webkit-scrollbar {
          width: 4px; /* 스크롤바의 너비 */
        }
        .sub-header ul {
          width: max-content;
          display: flex;
          padding: 5px 2rem;
          gap: 2rem;
          font-size: 1.2rem;
        }
        .active {
          color: var(--point-color);
        }
        body {
          background-color: #fff;
          min-height: 100dvh;
          padding-block: 3rem;
        }
        .header h2 {
          text-align: center;
        }
      `}</style>
      `
    </div>
  );
}
