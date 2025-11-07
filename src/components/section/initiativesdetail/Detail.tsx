import type { InitiativeDetail } from "@/app/types/initiatives";

interface Props {
  data: InitiativeDetail;
}

export default function InitiativeDetail({ data }: Props) {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{data.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {data.featuredPrograms.map((program) => (
          <div key={program.id} className="rounded-xl border p-4 shadow hover:shadow-lg transition">
            <img src={program.image} alt={program.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-semibold">{program.title}</h3>
            <p className="text-gray-600">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
