import type { ReactNode } from "react";

export interface ServingMethod {
  name: string;
  icon: ReactNode;
  temp: string;
  glass: string;
  description: string;
  perfectFor: string;
  quote: string;
}
