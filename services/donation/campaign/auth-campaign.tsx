import axios from "axios";
import { Campaign } from "@/app/types/campaign";
const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/donation/campaign-api`;
const apiProgramUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/donation/campaign-api/get-program`;
const apiKey = process.env.NEXT_PUBLIC_API_KEY_CAMPAIGN || "";

export const fetchCampaign = async (): Promise<Campaign[]> => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    });

    // Pastikan hasilnya array
    const campaigns: Campaign[] = Array.isArray(response.data) ? response.data : response.data.data || [];

    // Sort dari id terbesar ke terkecil
    campaigns.sort((a: Campaign, b: Campaign) => b.id - a.id);

    return campaigns;
  } catch (error) {
    console.error("Error fetching campaign", error);
    return [];
  }
};

export const fetchCampaignByCoreProgram = async (coreProgram: string) => {
  try {
    const response = await axios.get(`${apiProgramUrl}?core_program=${coreProgram}`, {
      headers: {
        Authorization: apiKey,
      },
    });
    return Array.isArray(response.data) ? response.data : response.data?.data || [];
  } catch (error) {
    console.error(`Error fetching campaign for ${coreProgram}:`, error);
    return null;
  }
};

export const fetchChildrenCampaigns = async () => fetchCampaignByCoreProgram("children");
export const fetchDisasterCampaigns = async () => fetchCampaignByCoreProgram("disaster");
export const fetchEmpowermentCampaigns = async () => fetchCampaignByCoreProgram("empowerment");
export const fetchInfrastructureCampaigns = async () => fetchCampaignByCoreProgram("infrastructure");
export const fetchQurbanCampaigns = async () => fetchCampaignByCoreProgram("sebar qurban");
