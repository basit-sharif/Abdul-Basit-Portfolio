"use client"
import { animateAllWeb } from "@/components/utils/functions/animationFunction";
import { ReactNode, useEffect } from "react";

interface typeForChildren {
  children: ReactNode;
}

export default function Wrapper({ children }: typeForChildren) {
  let isBrowser = () => typeof window !== undefined;

  useEffect(() => {
    if(isBrowser())
    animateAllWeb();
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto p-2">{children}</div>
  )
}