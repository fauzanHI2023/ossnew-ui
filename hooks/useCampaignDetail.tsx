import { useQuery } from "@tanstack/react-query";
import { fetchCampaign } from "../services/donation/campaign/auth-campaign";
import { Campaign } from "../utils/types/campaign";

export function useCampaignDetail(slug?: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["campaign", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Missing slug");

      // Ambil semua campaign (array)
      const campaigns: Campaign[] = await fetchCampaign();

      // Cari campaign berdasarkan slug
      const foundPost = campaigns.find((post) => post.slug === slug);

      if (!foundPost) throw new Error("Post not found");

      // Biarkan HTML di campaign_description tetap ada
      return {
        ...foundPost,
        campaign_description: foundPost.campaign_description,
      };
    },
    enabled: !!slug, // hanya jalan kalau slug tersedia
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  return { post: data, isLoading, isError };
}
