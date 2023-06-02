import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Calculer votre ISF vert : Outil en ligne pour estimer votre impôt écologique en France",
  description:
    "Utilisez notre outil de calcul en ligne pour estimer votre ISF vert, l'impôt qui intègre l'empreinte carbone des avoirs financiers. Découvrez comment réduire cet impôt en investissant dans la transition écologique et bénéficiez d'avantages fiscaux pour vos contributions vertes. Contribuez à la lutte contre l'urgence climatique grâce à votre ISF vert.",
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
        {children}
      </body>
    </html>
  );
}
