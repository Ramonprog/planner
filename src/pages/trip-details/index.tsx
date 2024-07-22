/* eslint-disable react-hooks/exhaustive-deps */
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { CreateActivityModal } from "./components/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/gests";
import { DestinationAndDateHeader } from "./components/destination-and-date-header";
import { Activitys } from "./components/activitys";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useTripDataContext } from "../../context/TripDataContext";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);
  const { tripId } = useParams()
  const { setTripData, setTripParticipants } = useTripDataContext()

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function handleCloseCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  async function getTripId() {
    try {
      const { data } = await api.get(`/trips/${tripId}`)
      setTripData(data.trip)
    } catch (error) {
      console.log("🚀 ~ getTripId ~ error:", error)

    }
  }
  async function getParticipants() {
    try {
      const { data } = await api.get(`/trips/${tripId}/participants`)
      setTripParticipants(data.participants)
    } catch (error) {
      console.log("🚀 ~ getTripId ~ error:", error)

    }
  }

  useEffect(() => {
    getParticipants()
    getTripId()
  }, { tripId })

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={handleOpenCreateActivityModal} className="bg-lime-300 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus size={20} />
              Cadastrar Atividade
            </button>
          </div>

          <Activitys />
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