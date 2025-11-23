import { initiatives } from "../data/initiatives";
import { InitiativeType, InitiativeDetail } from "../utils/types/initiatives";

export async function fetchInitiativeByType(type: InitiativeType): Promise<InitiativeDetail | undefined> {
  return initiatives.find((item) => item.type === type);
}
