import { ReactNode } from "react";
import "./styles.css";
import KambazNavigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <MobileNavigation />
    <div className="d-flex">
    <div>
    <KambazNavigation />
    </div>
    <div className="wd-main-content-offset p-3 flex-fill">
      {children}
    </div>
    </div>
    </div>
  );
}
