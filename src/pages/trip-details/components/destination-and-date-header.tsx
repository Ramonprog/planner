import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

export function DestinationAndDateHeader() {
  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-900 shadow-md flex items-center justify-between">
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

        <Button variant="secondary">
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      </div>
    </header>
  )
}