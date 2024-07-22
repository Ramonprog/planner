/* eslint-disable react-hooks/exhaustive-deps */
import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { format } from "date-fns";
import { useTripDataContext } from "../../../context/TripDataContext";

export function DestinationAndDateHeader() {

  const { tripData } = useTripDataContext()


  const displayedDate = tripData && tripData.starts_at && tripData.ends_at ? format(tripData.starts_at, "d 'de' LLL").concat(' até ').concat(format(tripData.ends_at, "d 'de' LLL")) : null

  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-900 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin size={20} className="text-zinc-400" />
        <span className="text-zinc-100 ">{tripData?.destination}</span>
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