import Image from 'next/image'

export default function Home() {
  return (
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Calculez votre
            <span className="relative whitespace-nowrap text-green-600">
                     <svg aria-hidden="true" viewBox="0 0 418 42"
                          className="absolute left-0 top-2/3 h-[0.58em] w-full fill-green-300/70"
                          preserveAspectRatio="none">
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                     </svg>
                     <span className="relative">ISF Vert</span>
                  </span>
            volontaire
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">L&apos;Impôt sur la Fortune Vert est
            une mesure incitative destinée à encourager les investissements dans l&apos;agroécologie en France.</p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a className="group inline-flex items-center justify-center rounded-full py-3 px-6 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900"
               href="#calcul">Je calcule mon ISF 👇</a>
          </div>
        </div>
        <section id="calcul" aria-label="Features for running your books"
                 className="relative overflow-hidden bg-green-600 pb-20 pt-16 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Votre simulation
                en 1 clic</h2>
              <p className="mt-6 text-lg tracking-tight text-green-100">Grâce à notre simulateur, estimer rapidement et
                simplement votre Impôt sur la Fortune Vert</p>
            </div>
            <div className="items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:pt-0 flex justify-center">
              <div className="rounded-xl bg-slate-50 shadow-xl shadow-green-900/20 w-full p-6 md:p-10">
                <div className="container mx-auto">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <h2 className="text-2xl font-bold mb-4 mt-0">Simulateur de l'ASF Vert</h2>
                  <form id="isf-form" className="max-w-md">
                    <div className="mb-4">
                      <label className="block font-bold mb-2" htmlFor="patrimoine">Valeur du patrimoine :</label>
                      <input
                          className="w-full px-3 py-2 border border-gray-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                          type="number" id="patrimoine" placeholder="Entrez la valeur de votre patrimoine" required/>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                            type="submit">Calculer
                    </button>
                  </form>
                  <div id="result" className="mt-4 hidden">
                    <h3 className="text-lg font-bold mb-2">Résultat :</h3>
                    <p>ISF estimé : <span id="isf-amount" className="font-medium text-xl"></span></p>
                    <a className="group inline-flex items-center justify-center rounded-full py-3 px-6 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900 mt-4"
                       href="#reduire">Découvrez comment réduire ce montant 👇</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="reduire" aria-label="Features for simplifying everyday business tasks"
                 className="pb-14 pt-16 sm:pb-20 sm:pt-32 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Investissez dans
                l&apos;agroécologie pour
                <br/><span className="text-green-600 font-medium">réduire votre ISF</span></h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">En investissant dans des projets
                agroécologiques, vous pouvez réduire votre Impôt de Solidarité sur la Fortune (ISF) et soutenir
                activement l&apos;agriculture durable.</p>
            </div>
            <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="relative">
                    <div className="w-9">
                      <span className="block m-auto text-3xl">⏰</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-medium text-green-600"><span className=""></span>50 %</h3>
                    <p className="mt-2 text-lg text-slate-900 font-display">des agriculteurs partent à la retraite dans
                      les 10 ans à venir</p>
                    <p className="mt-4 text-sm text-slate-600">Selon une récente étude, la retraite imminente de
                      nombreux agriculteurs aura un impact majeur sur le secteur agricole, nécessitant des mesures
                      adaptées pour maintenir l&apos;approvisionnement alimentaire.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-3xl">
                  <div className="relative">
                    <div className="w-9">
                      <span className="block m-auto text-3xl">🧑‍🌾</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-medium text-green-600">200 000</h3>
                    <p className="mt-2 text-lg text-slate-900 font-display">fermes à reprendre avec une reprise hors
                      cadre familiale complexe</p>
                    <p className="mt-4 text-sm text-slate-600">Environ 200 000 fermes sont disponibles pour être
                      reprises, mais la complexité de cette transition pose des défis. Trouver des solutions pour
                      faciliter ces transitions est essentiel pour maintenir la vitalité du secteur.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="relative">
                    <div className="w-9">
                      <span className="block m-auto text-3xl">🥕</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-medium text-green-600">13,41 %</h3>
                    <p className="mt-2 text-lg text-slate-900 font-display">des exploitations agricoles en France sont
                      certifiées BIO</p>
                    <p className="mt-4 text-sm text-slate-600">Environ 13,41% des exploitations agricoles en France
                      pratiquent l&apos;agriculture biologique, mais cela reste insuffisant pour contrer l&apos;effondrement
                      actuel de la biodiversité causé par l&apos;utilisation de pesticides.</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <a className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900"
                   href="https://feve.co/investir/souscription">J&apos;investis dans l&apos;agroécologie 👨‍🌾</a>
              </div>
            </div>
            <div className="hidden lg:mt-20 lg:block">
              <div className="grid grid-cols-3 gap-x-8">
                <div className="relative">
                  <div className="w-9">
                    <span className="block m-auto text-4xl">⏰</span>
                  </div>
                  <h3 className="mt-3 text-4xl font-medium text-green-600">50 %</h3>
                  <p className="mt-2 text-xl text-slate-900 font-display">des agriculteurs partent à la retraite dans
                    les 10 ans à venir</p>
                  <p className="mt-4 text-sm text-slate-600">Selon une récente étude, la retraite imminente de nombreux
                    agriculteurs aura un impact majeur sur le secteur agricole, nécessitant des mesures adaptées pour
                    maintenir l&apos;approvisionnement alimentaire.</p>
                </div>
                <div className="relative">
                  <div className="w-9">
                    <span className="block m-auto text-4xl">🧑‍🌾</span>
                  </div>
                  <h3 className="mt-3 text-4xl font-medium text-green-600">200 000</h3>
                  <p className="mt-2 text-xl text-slate-900 font-display">fermes à reprendre avec une reprise hors cadre
                    familiale complexe</p>
                  <p className="mt-4 text-sm text-slate-600">Environ 200 000 fermes sont disponibles pour être reprises,
                    mais la complexité de cette transition pose des défis. Trouver des solutions pour faciliter ces
                    transitions est essentiel pour maintenir la vitalité du secteur.</p>
                </div>
                <div className="relative">
                  <div className="w-9">
                    <span className="block m-auto text-4xl">🥕</span>
                  </div>
                  <h3 className="mt-3 text-4xl font-medium text-green-600">13,41 %</h3>
                  <p className="mt-2 text-xl text-slate-900 font-display">des exploitations agricoles en France sont
                    certifiées BIO</p>
                  <p className="mt-4 text-sm text-slate-600">Environ 13,41% des exploitations agricoles en France
                    pratiquent l&apos;agriculture biologique, mais cela reste insuffisant pour contrer l&apos;effondrement actuel
                    de la biodiversité causé par l&apos;utilisation de pesticides.</p>
                </div>
              </div>

              <div className="mt-20 flex justify-center">
                <a className="group inline-flex items-center justify-center rounded-full py-4 px-8 text-lg font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900"
                   href="https://feve.co/investir/souscription">J&apos;investis dans l&apos;agroécologie 👨‍🌾</a>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
