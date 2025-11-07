import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../services/publication/auth-news";
import { News } from "@/app/types/news";

export function useNewsDetail(slug?: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["campaign", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Missing slug");

      // Ambil semua campaign (array)
      const news: News[] = await fetchNews();

      // Cari campaign berdasarkan slug
      const foundPost = news.find((post) => post.slug === slug);

      if (!foundPost) throw new Error("Post not found");

      // Biarkan HTML di campaign_description tetap ada
      return {
        ...foundPost,
        campaign_description: foundPost.post_content,
      };
    },
    enabled: !!slug, // hanya jalan kalau slug tersedia
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  return { post: data, isLoading, isError };
}
