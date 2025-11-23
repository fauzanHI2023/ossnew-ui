"use client";
import React from "react";
import { ReadingProgress } from "@/components/section/newsdetail/ReadingProgress";
import { FloatingShare } from "@/components/section/newsdetail/FloatingShare";
import { HeroSection } from "@/components/section/newsdetail/HeroSection";
import { AuthorInfo } from "@/components/section/newsdetail/AuthorInfo";
import { ShareButtons } from "@/components/section/newsdetail/ShareButtons";
import { ArticleContent } from "@/components/section/newsdetail/ArticleContent";
import { ArticleActions } from "@/components/section/newsdetail/ArticleActions";
import { RelatedNews } from "@/components/section/newsdetail/RelatedNews";
import { ContributorInvitation } from "@/components/section/newsdetail/ContributorInvitation";
import { Separator } from "@/components/ui/separator";
import { articleData, relatedArticlesData, articleTags } from "../../../../../data/articleData";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "motion/react";
import { fetchNews } from "../../../../../services/publication/auth-news";
import { useParams } from "next/navigation";
import { useNewsDetail } from "../../../../../hooks/useNewsDetail";

const page = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const { post, isLoading, isError } = useNewsDetail(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading news...</p>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Gagal memuat data news.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white xl:mt-[4rem]">
      <ReadingProgress />
      <FloatingShare />

      {/* Hero Section */}
      <article className="pt-8 pb-20">
        <HeroSection post={post} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Author Info */}
            {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
              <AuthorInfo author={articleData.author} publishDate={articleData.publishDate} readTime={articleData.readTime} />
            </motion.div> */}

            {/* Share Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
              <ShareButtons />
            </motion.div>

            <Separator className="mb-12" />

            {/* Article Content */}
            <ArticleContent post={post} />

            <Separator className="mb-10" />

            {/* Article Actions */}
            <ArticleActions likes={articleData.likes} comments={articleData.comments} tags={articleTags} />
          </div>
        </div>
      </article>

      {/* Related News */}
      <RelatedNews articles={relatedArticlesData} />

      {/* Contributor Invitation */}
      <ContributorInvitation />

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default page;
