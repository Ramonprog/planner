import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from "lucide-react"
import { FormEvent, useState } from "react"

function App() {

  const [isGuestInputOpen, setIsGestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>(['ramon@teste.com'])

  function openGuestsInput() {
    setIsGestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGestsInputOpen(false)
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')

    if (!email) return

    const isEmailExists = emailsToInvite.some(item => item === email)

    if (isEmailExists) return alert('Email já adicionado')

    setEmailsToInvite([...emailsToInvite, email as string])

    event.currentTarget.reset()
  }



  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/Logo.svg" alt="Plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className="space-y-4">
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
              <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Continuar
                <ArrowRight size={20} />
              </button>
            )}

          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center shadow-2xl gap-3">

              <button type="button" onClick={() => setIsGuestsModalOpen(true)} className="flex items-center gap-2 flex-1">
                <UserRoundPlus size={20} className="text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>

              </button>


              <div className="w-px h-6 bg-zinc-800" />

              <button className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar Viagem
                <ArrowRight size={20} />
              </button>
            </div>
          )
          }

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline">termos de uso</a> e <a href="#" className=" text-zinc-300 underline">políticas de privacidade</a> .
        </p>
      </div>

      {isGuestsModalOpen && (
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
                    <button type="button" className="text-zinc-300">
                      <X size={16} />
                    </button>
                  </div>
                )
              })}

            </div>
            <div className="w-full h-px bg-zinc-800 my-3"></div>
            <form onSubmit={addEmailToInvite} className="flex flex-wrap gap-2 flex items-center">
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

      )}


    </div>

  )
}

export default App
