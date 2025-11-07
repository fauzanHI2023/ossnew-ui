import axios from "axios";

export const fetchLibrary = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/publikasi/library-api`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY_LIBRARY || "",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching library:", error);
    return null;
  }
};

export const fetchLibraryByType = async (categoryPosts: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/publikasi/library-api/get-library-by-type?type_report=${categoryPosts}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY_LIBRARY || "",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching news for ${categoryPosts}:`, error);
    return null;
  }
};

export const fetchMagazineLibrary = async () => fetchLibraryByType("magazine");
export const fetchCatalogLibrary = async () => fetchLibraryByType("catalog");
export const fetchCompanyProfileLibrary = async () => fetchLibraryByType("companyprofile");
