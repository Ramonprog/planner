import { useContext, useState, createContext, ReactNode } from "react";

interface ITrip {
  destination: string;
  ends_at: string;
  id: string;
  is_confirmed: boolean;
  starts_at: string;
}

interface CreateTripContextProps {
  tripData: ITrip | undefined;
  setTripData: React.Dispatch<React.SetStateAction<ITrip | undefined>>;
}

const TripDataContext = createContext<CreateTripContextProps | null>(null);

export function TripDataPropvider({ children }: { children: ReactNode }) {
  const [tripData, setTripData] = useState<ITrip | undefined>(undefined);

  return (
    <TripDataContext.Provider value={{ tripData, setTripData }}>
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
