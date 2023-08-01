import Link from "next/link";
import useAuth from "../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const { loggedIn, login } = useAuth();

  const handleClickLogin = () => {
    login();
  };
  const handleClickLogout = () => {
    logout();
  };

  return (
    <div className="header">
      <Link href="/">
        <h1>Did You Win?</h1>
      </Link>
      <div>
        {loggedIn ? (
          <button onClick={handleClickLogout}>
            <LogoutIcon />
          </button>
        ) : (
          <button onClick={handleClickLogin}>Connect Wallet</button>
        )}
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
