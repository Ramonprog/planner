import { ArrowRight, Calendar, MapPin, Settings2, User, UserRoundPlus, X } from "lucide-react"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./components/invite-gests-modal"

export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestInputOpen, setIsGestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

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

  function removeEmailToInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter(item => item !== email))
  }

  function createTrip() {
    navigate('/trips/1')
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

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline">termos de uso</a> e <a href="#" className=" text-zinc-300 underline">políticas de privacidade</a> .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal emailsToInvite={emailsToInvite} openGuestsInput={openGuestsInput} removeEmailToInvite={removeEmailToInvite} setIsGuestsModalOpen={setIsGuestsModalOpen} addEmailToInvite={addEmailToInvite} />
      )}

      {isConfirmTripModalOpen && (
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


            <form onSubmit={addEmailToInvite} className="space-y-3 mt-5">
              <div className="flex flex-wrap gap-2 items-center p-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <User size={20} className="text-zinc-400 size-5" />
                <input
                  placeholder="Seu nome completo"
                  name="name"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="flex flex-wrap gap-2 items-center p-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <User size={20} className="text-zinc-400 size-5" />
                <input
                  placeholder="Seu nome completo"
                  type="email"
                  name="personal_email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button type="submit" onClick={createTrip} className="bg-lime-300 text-lime-950  rounded-lg h-11 px-5 w-full justify-center font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar criação de viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

