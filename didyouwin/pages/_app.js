import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "../components/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="next-body">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
