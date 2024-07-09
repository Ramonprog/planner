import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react"
import { useState } from "react"

function App() {

  const [isGuestInputOpen, setIsGestsInputOpen] = useState(false)

  function openGuestsInput() {
    setIsGestsInputOpen(true)
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
              <input placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-zinc-400" />
              <input placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>

            <div className="w-px h-6 bg-zinc-800" />
            {isGuestInputOpen ? (<button onClick={openGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
              Alterar local/data
              <Settings2 size={20} />
            </button>) : (<button onClick={openGuestsInput} className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
              Continuar
              <ArrowRight size={20} />
            </button>)}

          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center shadow-2xl gap-3">

              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus size={20} className="text-zinc-400" />
                <input placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
              </div>


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
          com nossos <a href="#" className=" text-zinc-300 underline">termos de uso</a> e <a href="#" className=" text-zinc-300 underline">políticas de privacidade</a> .</p>
      </div>
    </div>

  )
}

export default App
