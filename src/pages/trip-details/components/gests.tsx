import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="font-medium block text-zinc-100">Jessca Whte</span>
            <span className="font-medium block text-zinc-500 truncate ">
              jesscaWhte@gmal.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="font-medium block text-zinc-100">Ronaldo Vasconcelos</span>
            <span className="font-medium block text-zinc-500 truncate ">vasconcelosRonalo@gmail.com</span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="font-medium block text-zinc-100">Claudo Marques</span>
            <span className="font-medium block text-zinc-500 truncate ">marquesClaudio@gmail.com</span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
        Gerencar convidados
        <UserCog size={20} />
      </button>
    </div>
  )
}