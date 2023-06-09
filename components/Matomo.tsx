"use client";

import init from "@socialgouv/matomo-next";
import { useEffect } from "react";

const Matomo = () => {
  useEffect(() => {
    init({ url: "https://climatelab.matomo.cloud/", siteId: "9" });
  }, []);
  return <></>;
};

export default Matomo;
