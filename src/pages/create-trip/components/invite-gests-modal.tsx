import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface InviteGuestsModalProps {
  setIsGuestsModalOpen: (value: boolean) => void
  emailsToInvite: string[]
  removeEmailToInvite: (email: string) => void
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  openGuestsInput: () => void
}

export function InviteGuestsModal({ setIsGuestsModalOpen, emailsToInvite, removeEmailToInvite, addEmailToInvite, openGuestsInput }: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl  w-[640px]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-300">Selecionar convidados</h2>
          <button onClick={() => setIsGuestsModalOpen(false)} className="text-zinc-300">
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-2">Os convidados irão receber e-mails para confiurmar a participação na viagem.</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {emailsToInvite.map((email, index) => {
            return (
              <div key={index} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">{email}</span>
                <button type="button" onClick={() => removeEmailToInvite(email)} className="text-zinc-300">
                  <X size={16} />
                </button>
              </div>
            )
          })}

        </div>
        <div className="w-full h-px bg-zinc-800 my-3"></div>
        <form onSubmit={addEmailToInvite} className="flex flex-wrap gap-2 items-center p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
          <AtSign size={20} className="text-zinc-400 size-5" />
          <input
            placeholder="Digite o e-mail do convidado"
            type="email"
            name="email"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
          <button type="submit" onClick={openGuestsInput} className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
            Convidar
            <Plus size={20} />
          </button>
        </form>
      </div>
    </div>

  )
}