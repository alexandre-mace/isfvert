import IsfForm from "@/components/IsfForm";
import Image from "next/image";
import Share from "@/components/Share";
import Matomo from "@/components/Matomo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        aria-label="Simulation ISF Vert"
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
                  href="https://www.impots.gouv.fr/particulier/calcul-de-lisf"
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
        aria-label="Comment réduire l'impact de mon argent"
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
                  href="https://feve.co/investir?utm_source=isfvert&utm_medium=cta"
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
      <section id="faq" aria-label="FAQ" className="pb-14 sm:pb-20 lg:pb-32">
        <div className="mx-auto pt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-2xl tracking-tight sm:text-3xl md:text-4xl text-center">
            La FAQ
          </div>
          <div className={"mx-auto max-w-3xl mt-12"}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>L'ISF Vert c’est quoi ?</AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    C’est une version revisitée de l’Impôt de Solidarité sur la
                    Fortune (ISF)*, en version “verte”, c'est-à-dire au service
                    de la transition écologique et de la préservation de
                    l’environnement.
                  </p>
                  <p className={"mb-6"}>
                    L'idée derrière l'ISF Vert est{" "}
                    <b>
                      d'utiliser l'impôt comme un levier pour mobiliser des
                      capitaux privés en faveur de la transition écologique
                    </b>
                    . En mobilisant des ressources financières privées, il peut
                    contribuer à accélérer le financement de la transition
                    écologique en complément des investissements publics. Les
                    contribuables assujettis à l'IFI* pourraient bénéficier de
                    réductions d'impôt en investissant dans des entreprises ou
                    des fonds d'investissement qui répondent à des critères
                    environnementaux précis. Ces critères peuvent inclure des
                    domaines tels que les énergies renouvelables, l'efficacité
                    énergétique, la rénovation thermique des bâtiments,
                    l’agroécologie, la gestion durable des ressources, la
                    préservation de la biodiversité, les transports à faible
                    émission etc.
                  </p>{" "}
                  <p className={"mb-6"}>
                    Pour le moment, l’ISF Vert{" "}
                    <b>n’existe qu’à l’état de proposition</b>. Cette piste de
                    financement de la transition écologique a été promue par
                    Greenpeace, reprise par divers courants politiques, et ce
                    principe est également présent dans le rapport France
                    Stratégie 2023 “LES INCIDENCES ÉCONOMIQUES DE L’ACTION POUR
                    LE CLIMAT” (dirigé par Jean Pisany-Ferry et Selma Mahfouz).
                  </p>
                  <p className={""}>
                    <i>
                      *l'Impôt de Solidarité sur la Fortune (ISF) a été remplacé
                      en France par l'Impôt sur la Fortune Immobilière (IFI) en
                      2018
                    </i>
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className={"text-left"}>
                  En quoi l'ISF Vert pourrait avoir un impact rapide et
                  substantiel pour financer la transition écologique en France ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    L’ISF Vert pourrait être un excellent levier pour accélérer
                    la transition écologique en France en complément des efforts
                    publics et des politiques gouvernementales existantes. En
                    effet, la mobilisation de capitaux grâce aux incitations
                    fiscales de l'ISF Vert permettrait aux contribuables
                    assujettis à l'Impôt sur la Fortune Immobilière (IFI)
                    d’allouer une partie des revenus de leur patrimoine à des
                    projets axés sur la transition écologique.
                  </p>
                  <p className={"mb-6"}>
                    Pour que l’ISF Vert soit efficace, il faudra des critères
                    d’éligibilité rigoureux et une évaluation régulière des
                    projets bénéficiaires pour s'assurer que les investissements
                    réalisés grâce à cet ISF climatique aient un véritable
                    impact positif sur la transition écologique.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  D’où vient l’idée d’un ISF Vert ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    Les propositions concrètes pour un ISF Vert proviennent de
                    divers acteurs, notamment des experts en fiscalité, des
                    économistes, des ONG environnementales, des chercheurs et
                    des décideurs politiques. L'idée d'un ISF Vert découle de la
                    volonté de mobiliser des ressources financières privées pour
                    soutenir la transition écologique. Elle est souvent
                    considérée comme une évolution de l'Impôt de Solidarité sur
                    la Fortune (ISF), qui a été remplacé en France par l'Impôt
                    sur la Fortune Immobilière (IFI) en 2018.
                  </p>
                  <p className={"mb-6"}>
                    L'ISF Vert s'inscrit dans le contexte plus large de la prise
                    de conscience croissante des enjeux environnementaux et de
                    la nécessité d'agir rapidement pour lutter contre le
                    changement climatique, la perte de biodiversité et préserver
                    la planète. Les gouvernements et les organisations
                    internationales ont reconnu l'importance d'investissements
                    massifs dans des projets durables et d'encouragement des
                    entreprises à adopter des pratiques respectueuses de
                    l'environnement.
                  </p>
                  <p className={""}>
                    Dans ce cadre, l'idée d'un ISF Vert émerge comme un moyen de
                    canaliser les capitaux privés vers des investissements
                    écologiques. Elle s'inspire également des concepts de
                    finance verte et d'investissement responsable, qui visent à
                    intégrer des critères environnementaux, sociaux et de
                    gouvernance (ESG) dans les décisions d'investissement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  L’ISF vert a-t-il déjà été mis en place dans certains pays ?{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <p className={""}>
                    Plusieurs pays ont déjà échangé sur des initiatives
                    similaires sous des noms différents. Par exemple, aux
                    Pays-Bas, il existe le "Green Funds Scheme", qui offre des
                    avantages fiscaux aux investisseurs dans des fonds durables.
                    En Belgique, il y a eu des discussions sur la création d'un
                    "ISF Climat" axé sur le financement de projets climatiques.
                    Il est important de souligner que chaque pays peut avoir ses
                    propres initiatives et approches en matière de fiscalité
                    verte. Les détails spécifiques de l'ISF Vert peuvent varier
                    d'un pays à l'autre en fonction des contextes législatifs,
                    économiques et politiques spécifiques.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Quelle est la différence entre ISF Vert et ISF Climatique ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    L'ISF Vert et l'ISF Climatique sont deux concepts similaires
                    qui visent à encourager les investissements dans des projets
                    et des entreprises liés à la transition écologique.
                    Cependant, ils peuvent varier en termes de portée et de
                    focus.
                  </p>
                  <p className={"mb-6"}>
                    <b>L'ISF Vert</b> se concentre sur les investissements dans
                    des entreprises et des projets ayant un{" "}
                    <b>impact environnemental positif général</b>. Les critères
                    d'éligibilité de l'ISF Vert peuvent couvrir un large
                    éventail de domaines environnementaux, tels que les énergies
                    renouvelables, l'efficacité énergétique, la préservation de
                    la biodiversité, l’agriculture biologique, la lutte contre
                    la pollution plastique et autres micro-polluants etc.
                  </p>
                  <p className={"mb-6"}>
                    D'un autre côté, l'<b>ISF Climatique</b> se concentre
                    spécifiquement sur les investissements visant à{" "}
                    <b>réduire les émissions de gaz à effet de serre</b> et à
                    lutter contre le changement climatique. Il met l'accent sur
                    les projets et les entreprises qui contribuent directement à
                    la réduction des émissions de CO2 et à l'atténuation des
                    impacts climatiques. Les investissements éligibles à l'ISF
                    Climatique peuvent inclure des initiatives dans les énergies
                    renouvelables, l'efficacité énergétique, la gestion des
                    déchets, le transport durable, etc.
                  </p>
                  <p className={""}>
                    En résumé, les deux concepts partagent une vision commune
                    d'utiliser le système fiscal pour encourager les
                    investissements dans des projets écologiques, mais l'ISF
                    Climatique met l'accent sur l'aspect “réchauffement
                    climatique” spécifiquement quand l’ISF Vert englobe un
                    spectre plus large de la transition écologique.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Quels sont les freins à mettre en place un ISF Vert en France
                  ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    La mise en place d'un ISF Vert en France semble très
                    intéressante sur le papier mais peut être ralentie par
                    plusieurs freins potentiels. En effet, elle nécessite une
                    réflexion approfondie pour diriger efficacement les
                    investissements financiers vers les enjeux de la transition
                    écologique.
                  </p>
                  <p className={"mb-6"}>
                    Parmi les freins à la mise en place d’une ISF Vert, il y a
                    la contestation des contribuables. Cet ISF Climatique
                    pourrait concerner les plus riches fortunes françaises, soit
                    moins quelques pourcents de la population française selon
                    les planchers et plafonds choisis. La mise en place d'un
                    nouvel impôt, même s'il est axé sur des objectifs
                    environnementaux, peut rencontrer de la résistance auprès
                    des contribuables concernés par ce nouvel Impôt Sur la
                    Fortune Vert : il est souvent argué que ces contribuables
                    “surtaxés” quitteraient le pays du fait d’impôts trop
                    importants. <br /> Comme toute nouvelle réforme d’ampleur,
                    la mise en œuvre d'un ISF Vert nécessite la création d’un
                    processus administratif spécifique qui peut être complexe à
                    mettre en place. Il faut définir des critères d'éligibilité
                    clairs et vérifiables pour les investissements écologiques
                    ainsi qu’un suivi sur le long terme. L’objectif est d’éviter
                    un effet greenwashing des investissements liés à cet ISF
                    vert. Il est important de s'assurer que les projets soutenus
                    contribuent effectivement à la réduction des émissions de
                    gaz à effet de serre et/ou à la protection de
                    l'environnement.
                  </p>
                  <p className={""}>
                    Les avantages fiscaux donnés aux contribuables pourraient
                    représenter une perte de revenu pour l’État sauf (i) si
                    l’assiette de l’IFI actuelle est revisitée et en particulier
                    si cette assiette reprend tous les actifs qui ont été sortis
                    de l’ISF pour créer l’IFI ou (ii) si les taux et seuils sont
                    revisités eux aussi. <br /> Une fiscalité plus lourde
                    pourrait par ailleurs affecter l’attractivité de la France,
                    en particulier si les critères d'éligibilité sont trop
                    restrictifs ou si les incitations fiscales ne sont pas
                    alignées sur les réalités économiques. Il faudrait donc
                    veiller à maintenir un équilibre entre les incitations à
                    investir dans des projets verts et le maintien d’un impôt
                    acceptable financièrement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Quel est le lien entre ISF Vert et ESG ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    L'ISF Vert et les critères ESG (Environnementaux, Sociaux et
                    de Gouvernance) sont liés par leur objectif commun de
                    promouvoir des investissements durables et responsables.
                  </p>
                  <ul className={"mb-6 list-disc pl-5"}>
                    <li>
                      L'ISF Vert se réfère spécifiquement à un dispositif fiscal
                      visant à mobiliser des capitaux privés pour financer la
                      transition écologique en encourageant les investissements
                      dans des projets et des entreprises ayant un impact
                      environnemental positif.
                    </li>
                    <li>
                      Les critères ESG sont utilisés pour évaluer les
                      performances environnementales, sociales et de gouvernance
                      des entreprises et des investissements. Ils permettent aux
                      investisseurs d'intégrer des considérations non
                      financières dans leurs décisions d'investissement et de
                      favoriser des pratiques durables.
                    </li>
                  </ul>
                  <p className={"mb-6"}>
                    L'ISF Vert pourrait être conçu pour encourager les
                    investissements conformes à des critères ESG spécifiques.
                    Les projets et les entreprises éligibles à l'ISF Vert
                    pourraient être évalués selon des critères ESG pour
                    s'assurer qu'ils respectent les normes environnementales,
                    sociales et de gouvernance.
                  </p>
                  <p className={""}>
                    Par exemple, un projet d'énergie renouvelable pourrait être
                    évalué sur des critères tels que son impact sur les
                    émissions de gaz à effet de serre, sa gestion des déchets,
                    son utilisation responsable des ressources naturelles, ainsi
                    que son impact social, comme la création d'emplois locaux ou
                    la participation des parties prenantes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Pourquoi payer l’ISF Vert ?</AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    <b>1 - Financement de la transition écologique</b>
                    <br /> L'ISF Vert peut constituer une source de financement
                    significative pour soutenir la transition écologique en
                    France. En imposant les patrimoines les plus importants, il
                    est possible de mobiliser des ressources financières
                    nécessaires pour investir dans les énergies renouvelables,
                    l'efficacité énergétique, les transports durables et
                    d'autres initiatives vertes. Cela peut accélérer la
                    transition vers une économie plus durable et aider à lutter
                    contre le changement climatique.
                  </p>
                  <p className={"mb-6"}>
                    <b>2 - Activité économique plus juste et équitable</b>
                    <br /> L'ISF Vert peut jouer un rôle dans la promotion de la
                    justice sociale. En redistribuant une partie des revenus de
                    cet impôt vers des programmes sociaux et des initiatives
                    d'inclusion, il contribue à réduire les inégalités et à
                    soutenir les communautés les plus vulnérables. Cela permet
                    de garantir que la transition écologique ne se fait pas aux
                    dépens des plus défavorisés, mais qu'elle bénéficie à tous,
                    en créant des emplois verts, en améliorant l'accès aux
                    énergies renouvelables et en favorisant une transition
                    juste. En orientant les fonds vers des initiatives
                    écologiques, il permet de créer des opportunités économiques
                    et des emplois dans le secteur de la transition écologique,
                    tout en bénéficiant à l'ensemble de la société. De plus, les
                    entreprises françaises qui s'engagent dans des pratiques
                    durables peuvent bénéficier d'un avantage concurrentiel, car
                    elles répondent aux attentes croissantes des consommateurs
                    en matière de responsabilité environnementale.
                  </p>
                  <p className={""}>
                    <b>3 - Responsabilité envers les générations futures</b>
                    <br /> Payer l'ISF Vert reflète votre engagement envers les
                    générations futures. En prenant en compte l'impact
                    environnemental de votre patrimoine, vous reconnaissez la
                    nécessité de préserver les ressources naturelles pour les
                    futures générations. En contribuant financièrement à la
                    transition écologique, vous agissez de manière responsable
                    envers l'avenir de vos propres enfants et des générations à
                    venir, en les dotant d'un environnement sain et durable.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  En quoi l’ISF vert peut soutenir la transition écologique
                  d’agriculture française ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"mb-6"}>
                    L’agriculture a structurellement un fort impact
                    environnemental, puisque le secteur agricole est responsable
                    de 23 % des émissions anthropiques de gaz à effet de serre
                    (GES), a un impact sur la perte de biodiversité, sur l’usage
                    de l’eau, et génère des pollutions (air, eau, sols) liées
                    aux intrants de synthèse utilisés.
                  </p>
                  <p className={"mb-6"}>
                    L’agroécologie permet de réduire ces impacts en limitant les
                    besoins en ressources non renouvelables, en limitant
                    l’impact sur les sols et l’eau en particulier et en essayant
                    de favoriser des écosystèmes riches en biodiversité.
                  </p>
                  <p className={""}>
                    On peut donc imaginer que l’investissement dans des projets
                    en agroécologie fasse partie des placements déductibles de
                    l’ISF vert. A ce titre, des foncières comme celles de Fermes
                    En Vie ou de Terre de Liens qui permettent à des jeunes de
                    s’installer pour développer des projets ambitieux en
                    agroécologie pourraient faire partie des investissements
                    déductibles.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
          <a
            className={"underline"}
            href="https://feve.co?utm_source=isfvert&utm_medium=cta"
            target="_blank"
          >
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
