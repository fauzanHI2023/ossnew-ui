import { fetchInitiativeByType } from "../../../../../hooks/useInitiativeDetail";
import InitiativeDetail from "@/components/section/initiativesdetail/Detail";
import { InitiativeType } from "@/app/types/initiatives";
import { notFound } from "next/navigation";
import { Hero } from "@/components/section/initiativesdetail/Hero";
import { Programs } from "@/components/section/initiativesdetail/Programs";
import { CallToAction } from "@/components/section/initiativesdetail/CallToAction";

interface Props {
  params: { type: string };
}

export default async function InitiativeTypePage({ params }: Props) {
  const type = params.type as InitiativeType;
  const data = await fetchInitiativeByType(type);

  if (!data) return notFound();

  return (
    <div className="p-8 bg-white">
      <Hero />
      <Programs data={data} />
      <CallToAction />
    </div>
  );
}
