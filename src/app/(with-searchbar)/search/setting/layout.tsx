import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>세팅헤더</div>
      {children}
    </div>
  );
}
