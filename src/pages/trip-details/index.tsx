import { Accessibility, Calendar, MapPin, Plus, Settings2 } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./components/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/gests";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function handleCloseCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
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

          <button className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 size={20} />
          </button>
        </div>
      </header>

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={handleOpenCreateActivityModal} className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus size={20} />
              Cadastrar Atividade
            </button>
          </div>

          <Accessibility />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal handleCloseCreateActivityModal={handleCloseCreateActivityModal} />
      )}
    </div>
  )
}