import { useContext, useState, createContext, ReactNode } from "react";

interface ITrip {
  destination: string;
  ends_at: string;
  id: string;
  is_confirmed: boolean;
  starts_at: string;
}

interface ITripParticipants {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean
}

interface CreateTripContextProps {
  tripData: ITrip | undefined;
  setTripData: React.Dispatch<React.SetStateAction<ITrip | undefined>>;
  tripParticipants: ITripParticipants[];
  setTripParticipants: React.Dispatch<React.SetStateAction<ITripParticipants[]>>
}

const TripDataContext = createContext<CreateTripContextProps | null>(null);

export function TripDataPropvider({ children }: { children: ReactNode }) {
  const [tripData, setTripData] = useState<ITrip | undefined>(undefined);
  const [tripParticipants, setTripParticipants] = useState<ITripParticipants[]>([])
  return (
    <TripDataContext.Provider value={{ tripData, setTripData, tripParticipants, setTripParticipants }}>
      {children}
    </TripDataContext.Provider>
  );
}

export function useTripDataContext() {
  const context = useContext(TripDataContext);
  if (!context) {
    throw new Error("useCreateTripContext must be used within a CreateTripContextProvider");
  }
  return context;
}
