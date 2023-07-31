import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <h1>Did You Win?</h1>
      </Link>
      <div>
        <button>Connect Wallet</button>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
          }
          .header h1 {
            margin: 0;
            font-size: 1.4rem;
          }
        `}
      </style>
    </div>
  );
}
