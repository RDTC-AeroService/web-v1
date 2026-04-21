import type { ReactNode } from "react";
import type { SectionKey } from "../../pages/home/section-config";

export type MenuItem = {
  icon: ReactNode;
  label: string;
  path: string;
  key: SectionKey;
};