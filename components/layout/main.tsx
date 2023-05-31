import { LayoutProps } from "@/models/common";
import Link from "next/link";
import * as React from "react";
import Footer from "../footer/footer";

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
