import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useTripDataContext } from "../../../context/TripDataContext";

export function Guests() {

  const { tripParticipants } = useTripDataContext()

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {tripParticipants.length && tripParticipants.map(participant => {
          return (
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="font-medium block text-zinc-100">{participant.name ? participant.name : '--'}</span>
                <span className="font-medium block text-zinc-500 truncate ">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="text-lime-300 size-5 flex-shrink-0" />
              ) : (
                <CircleDashed className="text-zinc-400 size-5 flex-shrink-0" />
              )}

            </div>
          )
        })}

      </div>
      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
        Gerencar convidados
        <UserCog size={20} />
      </button>
    </div>
  )
}