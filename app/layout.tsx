import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Calculer mon ISF vert ou ISF climatique en ligne : Estimer votre impôt écologique en France",
  description:
    "Utilisez notre outil de calcul en ligne pour estimer votre ISF vert ou ISF climatique, l'impôt qui intègre l'empreinte carbone des avoirs financiers. Découvrez comment réduire cet impôt en investissant dans la transition écologique et bénéficiez d'avantages fiscaux. Contribuez à la lutte contre l'urgence climatique avec votre ISF vert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/240/apple/354/large-green-circle_1f7e2.png"
          sizes="any"
        />
        <meta
          property="og:title"
          content="Calculer mon ISF vert en ligne : Estimer votre impôt écologique en France"
        />
        <meta
          property="og:description"
          content="Utilisez notre outil de calcul en ligne pour estimer votre ISF vert, l'impôt qui intègre l'empreinte carbone des avoirs financiers. Découvrez comment réduire cet impôt en investissant dans la transition écologique et bénéficiez d'avantages fiscaux. Contribuez à la lutte contre l'urgence climatique avec votre ISF vert."
        />
        <meta
          property="og:image"
          content="https://www.isfvert.fr/_next/image?url=%2Fisf.webp&w=1080&q=75"
        />
        {children}
      </body>
    </html>
  );
}
