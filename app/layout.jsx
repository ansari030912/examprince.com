import FooterBar from "./Footer/FooterBar";
import MainNav from "./Nav-bar/MainNav";
import NavTop from "./Nav-bar/NavTop";
import { AuthGuard } from "./auth/AuthGuard";
import ScrollLoader from "./components/Cards/ScrollLoader";
import ScrollToTop from "./components/Cards/ScrollToTop";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
  title: "Exam Prince",
  description: "Get your certified exams...",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <GoogleTagManager gtmId="G-FDQ0DQHTHX" />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FDQ0DQHTHX');
            `,
          }}
        />
        <NavTop />
        <MainNav />
        <ScrollLoader />
        <AuthGuard>{children}</AuthGuard>
        <ScrollToTop />
        <FooterBar />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/66d5b307ea492f34bc0cc14c/1i6pc6lu3";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
