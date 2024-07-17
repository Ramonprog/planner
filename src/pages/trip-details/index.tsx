import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage() {
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
            <button className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus size={20} />
              Cadastrar Atividade
            </button>
          </div>

          <div className="space-y-8 ">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl font-semibold text-zinc-300">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-md flex items-center gap-3 ">
                  <CircleCheck size={20} className="text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-md flex items-center gap-3 ">
                  <CircleCheck size={20} className="text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importante</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="font-medium block text-zinc-100">Reserva do AirBnB</span>
                  <a href="#" className="font-medium block text-zinc-500 truncate hover:text-zinc-200">www.google.com.br22442424242323222222</a>
                </div>
                <Link2 className="text-zinc-400 size-5 flex-shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="font-medium block text-zinc-100">Regras da casa</span>
                  <a href="#" className="font-medium block text-zinc-500 truncate hover:text-zinc-200">www.google.com.br22442424242323222222</a>
                </div>
                <Link2 className="text-zinc-400 size-5 flex-shrink-0" />
              </div>
            </div>
            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
              Cadastrar novo link
              <Plus size={20} />
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800"></div>

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
        </div>
      </main>
    </div>
  )
}