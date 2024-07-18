import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps {
  handleCloseCreateActivityModal: () => void;
}

export function CreateActivityModal({ handleCloseCreateActivityModal }: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl  w-[40rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-300">Cadastrar atividade</h2>
          <button onClick={handleCloseCreateActivityModal} className="text-zinc-300">
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-2">
          Todos convidados podem visualizar as atividades.
        </p>


        <form className="space-y-3 mt-5">
          <div className="flex flex-wrap gap-2 items-center p-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Tag size={20} className="text-zinc-400 size-5" />
            <input
              placeholder="Qual a atividade"
              name="title"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex flex-1 flex-wrap gap-2 items-center p-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Calendar size={20} className="text-zinc-400 size-5" />
            <input
              placeholder="Data e horário da atividade"
              type="datetime-local"
              name="occurs_at"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
            />
          </div>



          <button type="submit" className="bg-lime-300 text-lime-950  rounded-lg h-11 px-5 w-full justify-center font-medium flex items-center gap-2 hover:bg-lime-400">
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  )
}