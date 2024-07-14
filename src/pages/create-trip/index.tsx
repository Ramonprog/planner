
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./components/invite-gests-modal"
import { ConfirmTripModal } from "./components/confirm-trip-modal"
import { DestinationAndDateStep } from "./components/destination-and-date-step"
import { InviteGuestsStep } from "./components/invite-guests-step"

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

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
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
          <DestinationAndDateStep closeGuestsInput={closeGuestsInput} isGuestInputOpen={isGuestInputOpen} openGuestsInput={openGuestsInput} />

          {isGuestInputOpen && (
            <InviteGuestsStep emailsToInvite={emailsToInvite} setIsConfirmTripModalOpen={setIsConfirmTripModalOpen} setIsGuestsModalOpen={setIsGuestsModalOpen} />
          )}

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline">termos de uso</a> e <a href="#" className=" text-zinc-300 underline">políticas de privacidade</a> .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal emailsToInvite={emailsToInvite} openGuestsInput={openGuestsInput} removeEmailToInvite={removeEmailToInvite} setIsGuestsModalOpen={setIsGuestsModalOpen} addEmailToInvite={addEmailToInvite} />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal createTrip={createTrip} setIsConfirmTripModalOpen={setIsConfirmTripModalOpen} />
      )}
    </div>
  )
}

