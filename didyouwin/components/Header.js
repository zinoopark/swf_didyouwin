import Link from "next/link";
import useAuth from "../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Header() {
  const { loggedIn, login, logout } = useAuth();

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
      <div className="btn-list">
        {loggedIn && (
          <Link href="/my">
            <button
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "url(/imgs/profile/3DDD.png)",
                backgroundSize: "cover",
              }}
            ></button>
          </Link>
        )}
        {loggedIn ? (
          <button
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleClickLogout}
          >
            <div style={{ width: "20px", height: "20px" }}>
              <LogoutIcon />
            </div>
          </button>
        ) : (
          <button onClick={handleClickLogin}>Connect Wallet</button>
        )}
      </div>
      <style jsx>
        {`
          .btn-list {
            display: flex;
            gap: 15px;
          }
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
