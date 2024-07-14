import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  setIsGuestsModalOpen: (value: boolean) => void;
  setIsConfirmTripModalOpen: (value: boolean) => void;
  emailsToInvite: string[];
}


export function InviteGuestsStep({ emailsToInvite, setIsConfirmTripModalOpen, setIsGuestsModalOpen }: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center shadow-2xl gap-3">

      <button type="button" onClick={() => setIsGuestsModalOpen(true)} className="flex items-center gap-2 flex-1">
        <UserRoundPlus size={20} className="text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(as)</span>
        ) : (<span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>)}

      </button>


      <div className="w-px h-6 bg-zinc-800" />

      <button onClick={() => { setIsConfirmTripModalOpen(true) }} className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
        Confirmar Viagem
        <ArrowRight size={20} />
      </button>
    </div>
  )
}