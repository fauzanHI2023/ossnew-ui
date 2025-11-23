import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type InitiativeType = "disaster" | "children" | "empowerment" | "infrastructure";

export interface FeaturedProgram {
  id: string;
  title: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  image: string;
}

export interface InitiativeDetail {
  type: InitiativeType;
  title: string;
  description: string;
  featuredPrograms: FeaturedProgram[];
}
