import { Calendar, MapPin, Settings2 } from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-md flex items-center justify-between">

        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-zinc-400" />
          <span className="text-zinc-100 ">São Paulo, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-zinc-400" />
            <span className="text-zinc-100 ">17 a 24 de Outubro</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 size={20} />
          </button>
        </div>
      </div>

      <main className="flex gap-16">
        <div className="flex-1"></div>
        <div className="w-80"></div>
      </main>
    </div>
  )
}