import FooterBar from "./Footer/FooterBar";
import MainNav from "./Nav-bar/MainNav";
import NavTop from "./Nav-bar/NavTop";
import { AuthGuard } from "./auth/AuthGuard";
import ScrollLoader from "./components/Cards/ScrollLoader";
import ScrollToTop from "./components/Cards/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "Exam Prince",
  description: "Get your certified exams...",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavTop />
        <MainNav />
        <ScrollLoader />
        <AuthGuard>{children}</AuthGuard>
        <ScrollToTop />
        <FooterBar />
      </body>
    </html>
  );
}
