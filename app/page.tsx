import IsfForm from "@/components/IsfForm";
import Image from "next/image";
import Share from "@/components/Share";
import Matomo from "@/components/Matomo";

export default function Home() {
  return (
    <main>
      <Matomo />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-32 pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Calculez votre
          <span className="relative whitespace-nowrap text-green-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-green-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-6">ISF Vert</span>
            <br />
          </span>
          volontaire
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          L&apos;Impôt sur la Fortune Vert est une mesure incitative destinée à
          encourager les investissements dans la transition écologique en
          France.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-x-6">
          <a
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900"
            href="#calcul"
          >
            Je calcule mon ISF 👇
          </a>
          <Share />
        </div>

        <div className={"mt-16 flex justify-center"}>
          <Image
            src={"/isf.webp"}
            alt={"Photo justice argent"}
            height={318}
            width={462}
            className={"rounded"}
          />
        </div>

        <div className={"mt-24"}>
          <h2 className={"font-display text-3xl tracking-tight sm:text-3xl"}>
            Qu&apos;est-ce que l&apos;ISF Vert ou climatique ?
          </h2>
          <p className={"mt-4 tracking-tight text-slate-700 max-w-3xl mx-auto"}>
            L&apos;ISF Vert, également connu sous le nom d&apos;ISF Climatique,
            est un concept émergent proposé par{" "}
            <a href="https://www.greenpeace.fr/isf-climatique/" target="_blank">
              Greenpeace
            </a>{" "}
            . Récemment, le <b>22 mai 2023</b>, la Première ministre a publié le{" "}
            <b>rapport de France Stratégie</b>, dans lequel Jean Pisani-Ferry
            recommande{" "}
            <b>l&apos;instauration d&apos;une taxe sur le patrimoine</b> des
            plus aisés. Cet impôt vise à combiner la fiscalité écologique et la
            justice sociale en incluant l&apos;empreinte carbone des avoirs
            financiers dans le calcul de l&apos;ISF. Son objectif est de
            <b> promouvoir des investissements durables et responsables</b> en
            faveur de la transition écologique en France.
          </p>
        </div>

        <div className={"mt-16"}>
          <h3 className={"font-display text-3xl tracking-tight sm:text-3xl"}>
            Pourquoi votre argent a un impact important ?
          </h3>
          <p className={"mt-4 tracking-tight text-slate-700 max-w-3xl mx-auto"}>
            La taxation des grandes fortunes repose sur la constatation que
            leurs placements financiers soutiennent souvent des activités
            polluantes. Selon un{" "}
            <a href="https://www.oxfamfrance.org/wp-content/uploads/2019/11/Rapport-La-colossale-empreinte-carbone-des-banques-fran%C3%A7aises.pdf">
              rapport conjoint des Amis de la Terre et d&apos;Oxfam
            </a>
            , les banques ont émis 782 millions de tonnes de CO2eq en 2018. Vos
            fonds bancaires financent des{" "}
            <b>
              activités non conformes aux accords de Paris (par exemple des
              nouveaux projets d’extraction d’énergie fossile)
            </b>
            , qui vont à l&apos;encontre de la transition vers des solutions
            durables. Cela se produit souvent à votre insu, même si vous êtes
            déjà <b>conscient et volontaire</b> pour vous engager dans cette
            transition.
          </p>
        </div>

        <div className={"mt-16"}>
          <h2 className={"font-display text-3xl tracking-tight sm:text-3xl"}>
            Quels avantages offre l&apos;ISF Vert ?
          </h2>
          <p className={"mt-4 tracking-tight text-slate-700 max-w-3xl mx-auto"}>
            L&apos;ISF climatique vise à inciter les grandes fortunes à orienter
            <b> leurs investissements vers des projets verts et durables : </b>,
            la décarbonation des moyens de transports, l’isolation des passoires
            thermiques, etc. Contribuez à la <b>transition écologique</b> tout
            en bénéficiant d<b>&apos;avantages fiscaux</b> grâce à votre ISF
            Vert en France.
          </p>
        </div>

        <div className="mt-24">
          <p className="font-display text-3xl tracking-tight sm:text-3xl text-slate-900">
            Ils parlent de l&apos;ISF Vert
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            <li className="flex">
              <a href="https://lecercledeseconomistes.fr/un-isf-vert">
                <Image
                  src={"/cercle-eco.png"}
                  alt={"ISF Vert et impôts sur la fortune : urgence climatique"}
                  width={300}
                  height={600}
                />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.jpbetbeze.com/medias/un-isf-vert/"
                target={"_blank"}
              >
                <Image
                  src={"/jpbet.png"}
                  alt={"Contribuable en France : impôts"}
                  width={300}
                  height={600}
                />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.actu-environnement.com/ae/news/isf-climatique-impots-fortune-greenpeace-rapport-36292.php4"
                target={"_blank"}
              >
                <Image
                  src={"/actu.png"}
                  alt={"ISF Vert et investissement : gérer mes revenus"}
                  width={300}
                  height={600}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section
        id="calcul"
        aria-label="Features for running your books"
        className="relative overflow-hidden bg-green-600 pb-20 pt-16 sm:py-32"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <div className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
              Votre simulation en 1 clic{" "}
              <img
                src="https://em-content.zobj.net/thumbs/240/apple/354/high-voltage_26a1.png"
                alt="Rapidité"
                className={"h-12 w-12 inline"}
              />
            </div>
            <p className="mt-6 text-lg tracking-tight text-white">
              Grâce à notre simulateur, estimez rapidement et simplement votre
              Impôt sur la Fortune Vert
            </p>
          </div>
          <div className="items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-12 lg:pt-0 flex flex-col justify-center">
            <div className="rounded-xl bg-slate-50 shadow-xl shadow-green-900/20 w-full p-6 md:p-10">
              <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 mt-0">
                  Simulateur de l&apos;ISF Vert
                </h2>
                <IsfForm />
              </div>
            </div>

            <div className={"mt-2 text-white text-start text-sm"}>
              <p className={"font-display tracking-tight"}>
                💡 Notre calcul de l&apos;ISF Vert se base sur{" "}
                <a
                  className={"text-white"}
                  target={"_blank"}
                  href="https://www.journaldunet.fr/patrimoine/guide-des-finances-personnelles/1202027-isf-bareme-calcul-et-simulation/"
                >
                  l&apos;ISF historique
                </a>
              </p>
              <p className={"font-display tracking-tight"}>
                Nous avons pris comme hypothèse, dans ce simulateur, que tout
                placement vert est déduit de la base taxable de votre patrimoine
                pour le calcul de l&apos;ISF Vert.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="reduire"
        aria-label="Features for simplifying everyday business tasks"
        className="pb-14 pt-16 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <div className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Votre argent a déjà un{" "}
              <span className="text-green-600 font-medium">
                impact important
              </span>
              , n&apos;attendez pas que la loi vous oblige à passer à l’action
            </div>

            <div className={"mt-16 mb-10"}>
              <h3
                className={"font-display font-medium text-2xl tracking-tight"}
              >
                L&apos;agroécologie, le secteur de choix pour réduire votre ISF
                Vert
              </h3>
              <p
                className={
                  "mt-4 tracking-tight text-slate-700 max-w-3xl mx-auto md:text-lg"
                }
              >
                L&apos;agroécologie est LA solution pour réduire de manière
                significative l&apos;impact environnemental de
                l&apos;agriculture et soutenir la transition écologique. En
                adoptant des pratiques respectueuses de l&apos;environnement,
                elle régénère les sols, préserve la biodiversité et renforce la
                résilience des exploitations agricoles.
              </p>
            </div>
          </div>
          <div className="lg:mt-20 block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
              <div className="relative mt-12 md:mt-0">
                <div className="w-9">
                  <span className="block m-auto text-3xl md:text-4xl">
                    <img
                      src="https://em-content.zobj.net/thumbs/240/apple/354/alarm-clock_23f0.png"
                      alt="Réveil"
                      className={"h-8 w-8 inline-block"}
                    />
                  </span>
                </div>
                <div className="mt-3 text-2xl md:text-4xl font-medium text-green-600">
                  50 %
                </div>
                <p className="mt-1 md:mt-2 text-lg md:text-xl text-slate-900 font-display">
                  des agriculteurs partent à la retraite dans les 10 ans à venir
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Selon une récente étude, la retraite imminente de nombreux
                  agriculteurs aura un impact majeur sur le secteur agricole,
                  nécessitant des mesures adaptées pour maintenir notre
                  souveraineté alimentaire.
                </p>
              </div>
              <div className="relative mt-12 md:mt-0">
                <div className="w-9">
                  <span className="block m-auto text-3xl md:text-4xl">
                    <img
                      src="https://em-content.zobj.net/thumbs/240/apple/354/farmer_1f9d1-200d-1f33e.png"
                      alt="Agriculteur"
                      className={"h-8 w-8 inline-block"}
                    />
                  </span>
                </div>
                <div className="mt-3 text-2xl md:text-4xl font-medium text-green-600">
                  200 000
                </div>
                <p className="mt-1 md:mt-2 text-lg md:text-xl text-slate-900 font-display">
                  fermes à reprendre avec une reprise hors cadre familiale
                  complexe
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Environ 200 000 fermes sont disponibles pour être reprises,
                  mais la complexité de cette transition pose des défis. Trouver
                  des solutions pour faciliter ces transitions est essentiel
                  pour maintenir la vitalité du secteur.
                </p>
              </div>
              <div className="relative mt-12 md:mt-0">
                <div className="w-9">
                  <span className="block m-auto text-3xl md:text-4xl">
                    <img
                      src="https://em-content.zobj.net/thumbs/240/apple/354/carrot_1f955.png"
                      alt="Carotte"
                      className={"h-8 w-8 inline-block"}
                    />
                  </span>
                </div>
                <div className="mt-3 text-2xl md:text-4xl font-medium text-green-600">
                  13 %
                </div>
                <p className="mt-1 md:mt-2 text-lg md:text-xl text-slate-900 font-display">
                  seulement des exploitations agricoles en France sont
                  certifiées BIO
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Environ 13% des exploitations agricoles en France pratiquent
                  l&apos;agriculture biologique, c&apos;est insuffisant pour
                  contrer l&apos;effondrement actuel de la biodiversité causé
                  par l&apos;utilisation de pesticides. Le Plan stratégique
                  national (PNS) fixe l&apos;objectif à 18% en 2027.
                </p>
              </div>
              <div className="relative mt-12 md:mt-12">
                <div className="w-9">
                  <span className="block m-auto text-3xl md:text-4xl">
                    <img
                      src="https://em-content.zobj.net/thumbs/240/apple/354/dashing-away_1f4a8.png"
                      alt="Gaz"
                      className={"h-8 w-8 inline-block"}
                    />
                  </span>
                </div>
                <div className="mt-3 text-2xl md:text-4xl font-medium text-green-600">
                  24%
                </div>
                <p className="mt-1 md:mt-2 text-xl text-slate-900 font-display">
                  des émissions de gaz à effet de serre proviennent de
                  l&apos;agriculture
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Environ 24% des émissions mondiales de gaz à effet de serre
                  sont attribuables à l&apos;agriculture. La transition
                  agroécologique vise à réduire ces émissions en favorisant des
                  pratiques agricoles respectueuses du climat.
                </p>
              </div>
              <div className="relative mt-12 md:mt-12">
                <div className="w-9">
                  <span className="block m-auto text-3xl md:text-4xl">
                    <img
                      src="https://em-content.zobj.net/thumbs/240/apple/354/droplet_1f4a7.png"
                      alt="Goutte d'eau"
                      className={"h-8 w-8 inline-block"}
                    />
                  </span>
                </div>
                <div className="mt-3 text-2xl md:text-4xl font-medium text-green-600">
                  50 %
                </div>
                <p className="mt-1 md:mt-2 text-xl text-slate-900 font-display">
                  des écosystèmes aquatiques sont dégradés
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Environ 50% des écosystèmes aquatiques sont dégradés en raison
                  de la pollution agricole. La transition agroécologique promeut
                  des pratiques agricoles durables pour préserver la qualité de
                  l&apos;eau et la santé des écosystèmes aquatiques.
                </p>
              </div>
              <div className="relative mt-12 md:mt-12">
                <div className="w-9">
                  <span className="block m-auto text-3xl md:text-4xl">
                    <img
                      src="https://em-content.zobj.net/thumbs/240/apple/354/honeybee_1f41d.png"
                      alt="Abeille"
                      className={"h-8 w-8 inline-block"}
                    />
                  </span>
                </div>
                <div className="mt-3 text-2xl md:text-4xl font-medium text-green-600">
                  40%
                </div>
                <p className="mt-1 md:mt-2 text-xl text-slate-900 font-display">
                  de perte de la biodiversité des pollinisateurs
                </p>
                <p className="mt-4 text-sm text-slate-600">
                  Environ 40% des espèces de pollinisateurs, tels que les
                  abeilles et les papillons, déclinent. La transition
                  agroécologique promeut des pratiques agricoles favorables aux
                  pollinisateurs pour préserver leur rôle vital dans la
                  pollinisation des cultures.
                </p>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-center items-center max-w-2xl mx-auto text-center">
              <p className="mt-4  mb-10 md:text-lg tracking-tight text-slate-700">
                En investissant dans des projets agroécologiques, vous pouvez
                ainsi{" "}
                <a href="#footer" className={"underline"}>
                  réduire
                  <span className={"inline-block ml-2"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 translate-y-1 -translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </span>
                </a>{" "}
                votre Impôt de Solidarité sur la Fortune Vert (ISF Vert) et
                soutenir activement l&apos;agriculture durable.
              </p>

              <div>
                <a
                  className="group inline-flex items-center justify-center rounded-full py-4 px-8 text-lg font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900"
                  href="https://feve.co/investir"
                >
                  J&apos;investis dans l&apos;agroécologie 👨‍🌾
                </a>
              </div>
              <div className={"mt-8"}>
                <Share />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={"bg-slate-100 py-20"} id={"footer"}>
        <div className={"container mx-auto"}>
          <span className={"inline-block"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 translate-y-1 -translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </span>
          Cette page web a été créée par{" "}
          <a className={"underline"} href="https://feve.co" target="_blank">
            FEVE
          </a>{" "}
          , une entreprise à mission de l’économie sociale et solidaire, pour
          sensibiliser aux enjeux de la transition agroécologique, et à l’impact
          positif que peut avoir l’épargne citoyenne pour financer le monde de
          demain. L’ISF Vert est au cœur des débats politiques mais n’est en
          aucun cas une réalité à ce stade. Ne paniquez pas ! Mais n’hésitez pas
          à prendre votre part dès maintenant.
        </div>
      </footer>
    </main>
  );
}
