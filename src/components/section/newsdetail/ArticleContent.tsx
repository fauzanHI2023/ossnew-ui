import { motion } from "motion/react";
import { News } from "@/app/types/news";

interface ArticleContentProps {
  post: News;
}

export function ArticleContent({ post }: ArticleContentProps) {
  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    }
    return html;
  };

  const truncateAndStripHtml = (html: string, wordLimit: number) => {
    const plainText = stripHtml(html);
    const words = plainText.split(" ");
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="prose prose-lg max-w-none mb-16">
      <p className="text-base/relaxed text-gray-700 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-[#268ece] first-letter:mr-3 first-letter:float-left">{truncateAndStripHtml(post.post_content, 4000)}</p>

      {/* <h2 className="text-black mt-12 mb-6 flex items-center gap-3">
        <span className="h-1.5 w-12 bg-gradient-to-r from-[#268ece] to-[#1a6ba0] rounded-full" />
        Revolusi Digital dengan AI
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Perkembangan teknologi AI di Indonesia mengalami percepatan yang luar biasa dalam beberapa tahun terakhir. Perusahaan-perusahaan teknologi lokal mulai mengintegrasikan AI dalam operasional mereka, menciptakan efisiensi dan
        pengalaman pengguna yang lebih baik.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Machine learning dan deep learning menjadi fondasi utama dalam pengembangan aplikasi cerdas. Dari chatbot customer service hingga sistem rekomendasi produk, AI membantu bisnis memahami dan melayani pelanggan dengan lebih personal
        dan efektif.
      </p> */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-[#268ece]/10 via-[#268ece]/5 to-transparent border-l-4 border-[#268ece] p-8 rounded-r-2xl my-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#268ece]/10 rounded-full blur-3xl" />
        <p className="text-gray-800 italic text-lg leading-relaxed relative z-10">
          "Indonesia memiliki potensi besar untuk menjadi pemain utama dalam ekosistem AI global. Dengan populasi besar dan tingkat digitalisasi yang terus meningkat, peluang inovasi sangat terbuka lebar."
        </p>
        <p className="text-[#268ece] mt-4 text-sm">— Dr. Ahmad Wijaya</p>
      </motion.div>

      {/* <h2 className="text-black mt-12 mb-6 flex items-center gap-3">
        <span className="h-1.5 w-12 bg-gradient-to-r from-[#268ece] to-[#1a6ba0] rounded-full" />
        Implementasi AI di Berbagai Sektor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Sektor finansial menjadi pionir dalam adopsi AI di Indonesia. Bank-bank besar menggunakan AI untuk deteksi fraud, credit scoring, dan customer analytics. Hal ini tidak hanya meningkatkan keamanan tetapi juga mempercepat proses
        pengambilan keputusan.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Di sektor kesehatan, AI membantu diagnosis penyakit melalui analisis citra medis. Beberapa rumah sakit di Jakarta dan Surabaya telah mengimplementasikan sistem AI untuk mendeteksi kanker dan penyakit jantung dengan tingkat akurasi
        yang tinggi.
      </p>

      <h2 className="text-black mt-12 mb-6 flex items-center gap-3">
        <span className="h-1.5 w-12 bg-gradient-to-r from-[#268ece] to-[#1a6ba0] rounded-full" />
        Tantangan dan Peluang
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Meskipun potensinya besar, implementasi AI di Indonesia masih menghadapi berbagai tantangan. Ketersediaan data berkualitas, infrastruktur digital yang merata, dan tenaga ahli yang terampil menjadi kunci keberhasilan adopsi AI lebih
        luas.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Pemerintah dan sektor swasta perlu berkolaborasi untuk menciptakan ekosistem yang mendukung pengembangan AI. Investasi dalam pendidikan teknologi, penelitian dan pengembangan, serta regulasi yang tepat akan menentukan masa depan AI
        di Indonesia.
      </p>

      <h2 className="text-black mt-12 mb-6 flex items-center gap-3">
        <span className="h-1.5 w-12 bg-gradient-to-r from-[#268ece] to-[#1a6ba0] rounded-full" />
        Masa Depan yang Cerah
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Dengan pertumbuhan ekonomi digital yang pesat, Indonesia berada di posisi strategis untuk memanfaatkan AI sebagai katalis transformasi. Startup-startup teknologi lokal mulai mengembangkan solusi AI yang disesuaikan dengan konteks
        dan kebutuhan pasar Indonesia.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Ke depannya, kita dapat mengharapkan lebih banyak inovasi AI yang tidak hanya meningkatkan efisiensi bisnis tetapi juga memberikan dampak sosial positif, seperti peningkatan akses pendidikan dan layanan kesehatan bagi masyarakat
        luas.
      </p> */}
    </motion.div>
  );
}
