/* eslint-disable react-hooks/exhaustive-deps */
import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { format } from "date-fns";

interface ITrip {
  destination: string
  ends_at: string
  id: string
  is_confirmed: boolean
  starts_at: string
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams()
  const [trip, setTrip] = useState<ITrip | undefined>()

  async function getTripId() {
    try {
      const { data } = await api.get(`/trips/${tripId}`)
      setTrip(data.trip)
    } catch (error) {
      console.log("🚀 ~ getTripId ~ error:", error)

    }
  }

  useEffect(() => {
    getTripId()
  }, { tripId })

  const displayedDate = trip && trip.starts_at && trip.ends_at ? format(trip.starts_at, "d 'de' LLL").concat(' até ').concat(format(trip.ends_at, "d 'de' LLL")) : null

  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-900 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin size={20} className="text-zinc-400" />
        <span className="text-zinc-100 ">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-zinc-400" />
          <span className="text-zinc-100 ">{displayedDate}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      </div>
    </header>
  )
}