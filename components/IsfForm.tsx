"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const IsfForm = () => {
  const [patrimoine, setPatrimoine] = useState("");
  const [greenInvestments, setGreenInvestments] = useState("");
  const [isfAmount, setIsfAmount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let amount = parseFloat(patrimoine) - parseFloat(greenInvestments);

    if (amount <= 800000) {
      setIsfAmount(0);
    } else if (amount <= 1300000) {
      setIsfAmount(amount * 0.005);
    } else if (amount <= 2570000) {
      setIsfAmount(amount * 0.007);
    } else if (amount <= 5000000) {
      setIsfAmount(amount * 0.01);
    } else if (amount <= 10000000) {
      setIsfAmount(amount * 0.0125);
    } else {
      setIsfAmount(amount * 0.015);
    }

    setShowResult(true);
  };

  return (
    <>
      <form id="isf-form" className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="relative block font-bold mb-2" htmlFor="patrimoine">
            Valeur du patrimoine :
            <span className={"absolute -left-10"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            type="number"
            id="patrimoine"
            placeholder="Entrez la valeur de votre patrimoine (dont montants investis dans des placements verts)"
            required
            onChange={(e) => setPatrimoine(e.target.value)}
          />
          <label
            className="relative block font-bold mb-2 mt-4"
            htmlFor="patrimoine"
          >
            Valeur de vos placements verts :
            <span className={"absolute -left-10"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </span>
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            type="number"
            id="greenInvest"
            placeholder="Entrez la valeur de vos placements verts"
            required
            onChange={(e) => setGreenInvestments(e.target.value)}
          />
          <div className={"mt-2"}>
            Base taxable ISF Vert :{" "}
            <span className={"font-bold"}>
              {Math.round(
                parseFloat(patrimoine ? patrimoine : String(0)) -
                  parseFloat(greenInvestments ? greenInvestments : String(0))
              )}{" "}
              €
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms" required={true} aria-label={"termes"} />
            <label
              htmlFor="terms"
              className="text-sm leading-4 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Je certifie ne pas avoir oublié de comptes de sociétés offshore ou
              autres comptes aux iles caïman
            </label>
          </div>
        </div>

        <button
          className="bg-green-600 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          type="submit"
        >
          Calculer
        </button>
      </form>
      {showResult && (
        <div id="result" className="mt-4">
          <h3 className="text-lg font-bold mb-2">Résultat :</h3>
          <p>
            ISF estimé :{" "}
            <span id="isf-amount" className="font-medium text-xl">
              {Number(isfAmount.toFixed(0)).toLocaleString()} €
            </span>
          </p>
          <a
            className="group inline-flex items-center justify-center rounded-full py-3 px-6 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-200 text-green-900 hover:bg-green-300 hover:text-black active:bg-green-400 focus-visible:outline-slate-900 mt-4"
            href="#reduire"
          >
            Découvrez comment réduire ce montant 👇
          </a>
        </div>
      )}
    </>
  );
};

export default IsfForm;
