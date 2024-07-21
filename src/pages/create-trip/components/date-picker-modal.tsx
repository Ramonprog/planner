import { X } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"

interface DatePickerModalProps {
  setIsDatePickerOpen: (prop: boolean) => void
  eventStartAndAndEndDates: undefined | DateRange
  setEventStartAndEndDates: (event: undefined | DateRange) => void
}

export function DatePickerModal({ setIsDatePickerOpen, eventStartAndAndEndDates, setEventStartAndEndDates }: DatePickerModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg font-semibold text-zinc-300">Selecione a data</h2>
          <button onClick={() => setIsDatePickerOpen(false)} className="text-zinc-300">
            <X size={20} />
          </button>
        </div>


        <DayPicker
          mode="range"
          selected={eventStartAndAndEndDates}
          onSelect={setEventStartAndEndDates}
          classNames={{
            selected: `bg-lime-300 text-lime-600`,
            chevron: `fill-lime-300`,
            range_middle: `bg-lime-300`,
            range_end: `bg-lime-300 rounded-r-full`,
            range_start: `bg-lime-300 rounded-l-full`,
            today: `border-1 text-lime-300 border-indigo-800`
          }} />
      </div>
    </div>
  )
}