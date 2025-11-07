import { initiatives } from "../data/initiatives";
import { InitiativeType, InitiativeDetail } from "../src/app/types/initiatives";

export async function fetchInitiativeByType(type: InitiativeType): Promise<InitiativeDetail | undefined> {
  return initiatives.find((item) => item.type === type);
}
