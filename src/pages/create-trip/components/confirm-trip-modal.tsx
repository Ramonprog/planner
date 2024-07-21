import { User, X } from "lucide-react";
import { FormEvent } from "react";
import { useCreateTripContext } from "../../../context/CreateTripContext";

interface ConfirmTripModalProps {
  setIsConfirmTripModalOpen: (value: boolean) => void,
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({ setIsConfirmTripModalOpen, createTrip }: ConfirmTripModalProps) {

  const { setOwnerData, ownerData } = useCreateTripContext()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl  w-[40rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-300">Confirmar criação de viagem</h2>
          <button onClick={() => setIsConfirmTripModalOpen(false)} className="text-zinc-300">
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-2">
          Para concluir a criação da viagem para <b>Florianópolis</b>, Brasil nas datas de <b>16 a 27 de Agosto de 2024</b> seus dados abaix:
        </p>


        <form onSubmit={createTrip} className="space-y-3 mt-5">
          <div className="flex flex-wrap gap-2 items-center p-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User size={20} className="text-zinc-400 size-5" />
            <input
              placeholder="Seu nome completo"
              name="name"
              value={ownerData.ownerName || ''}
              onChange={(event) => setOwnerData({ ownerName: event.target.value })}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center p-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User size={20} className="text-zinc-400 size-5" />
            <input
              placeholder="Seu nome completo"
              type="email"
              value={ownerData.ownerEmail || ''}
              onChange={(event) => setOwnerData({ ownerEmail: event.target.value })}
              name="personal_email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <button type="submit" className="bg-lime-300 text-lime-950  rounded-lg h-11 px-5 w-full justify-center font-medium flex items-center gap-2 hover:bg-lime-400">
            Confirmar criação de viagem
          </button>
        </form>
      </div>
    </div>
  )
}