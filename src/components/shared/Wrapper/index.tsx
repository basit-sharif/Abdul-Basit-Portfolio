import { ReactNode } from "react";

interface typeForChildren {
    children:ReactNode;
}

export default function Wrapper({children}:typeForChildren) {
  return (
    <div className="max-w-screen-xl mx-auto p-2">{children}</div>
  )
}