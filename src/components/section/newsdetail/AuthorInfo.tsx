import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuthorInfoProps {
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate: string;
  readTime: string;
}

export function AuthorInfo({ author, publishDate, readTime }: AuthorInfoProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative flex items-center gap-4">
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <Avatar className="h-16 w-16 border-3 border-white shadow-lg ring-2 ring-[#268ece]/20">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-gradient-to-br from-[#268ece] to-[#1a6ba0] text-white">
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-[#268ece] rounded-full flex items-center justify-center shadow-lg">
            <Award className="h-3 w-3 text-white" />
          </div>
        </motion.div>

        <div className="flex-1">
          <p className="text-black mb-0.5">{author.name}</p>
          <p className="text-sm text-gray-500">{author.role}</p>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="bg-white hidden sm:flex border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white transition-all">
            Follow
          </Button>
        </motion.div>
      </div>

      <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#268ece]/10 flex items-center justify-center">
            <Calendar className="h-4 w-4 text-[#268ece]" />
          </div>
          <span>{publishDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#268ece]/10 flex items-center justify-center">
            <Clock className="h-4 w-4 text-[#268ece]" />
          </div>
          <span>{readTime}</span>
        </div>
      </div>
    </motion.div>
  );
}
