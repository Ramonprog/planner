import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
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
  )
}