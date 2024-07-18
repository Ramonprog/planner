import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
}

export function DestinationAndDateStep({ closeGuestsInput, isGuestInputOpen, openGuestsInput }: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center shadow-2xl gap-3">

      <div className="flex items-center gap-2 flex-1">
        <MapPin size={20} className="text-zinc-400" />
        <input disabled={isGuestInputOpen} placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
      </div>

      <div className="flex items-center gap-2">
        <Calendar size={20} className="text-zinc-400" />
        <input disabled={isGuestInputOpen} placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
      </div>

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestInputOpen ? (
        <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 size={20} />
        </button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight size={20} />
        </Button>

      )}

    </div>
  )
}