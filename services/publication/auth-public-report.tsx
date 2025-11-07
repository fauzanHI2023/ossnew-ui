import axios from "axios";

export const fetchPublicReports = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/publikasi/public-report-api`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY_PUBLIC_REPORT || "",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching public reports:", error);
    return null;
  }
};

export const fetchPublicReportByType = async (typeReports: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/publikasi/public-report-api/get-public-report-by-type?type_report=${typeReports}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY_PUBLIC_REPORT || "",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching news for ${typeReports}:`, error);
    return null;
  }
};

export const fetchAnnualReport = async () => fetchPublicReportByType("annual");
export const fetchFinancialReport = async () => fetchPublicReportByType("financial");
export const fetchFactsheetReport = async () => fetchPublicReportByType("factsheet");
