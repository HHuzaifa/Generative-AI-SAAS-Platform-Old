"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("328a4890-fa86-41a6-98e2-26bef35ae3d8");
  }, []);

  return null;
};