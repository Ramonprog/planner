import { useContext, useState, createContext, ReactNode } from "react";

interface OwnerData {
  ownerName: string;
  ownerEmail: string;
  ownerEventDateTo: string;
  ownerEventDateFrom: string;
}

interface CreateTripContextProps {
  destination: string;
  setDestination: (prop: string) => void;
  ownerData: OwnerData;
  setOwnerData: (data: Partial<OwnerData>) => void;
}

//Partial<OwnerData>: O tipo Partial é uma utilidade do TypeScript que transforma todas 
//as propriedades de um tipo em opcionais. No caso de Partial<OwnerData>, 
//significa que o objeto data pode conter zero ou mais propriedades do tipo OwnerData,
//e todas elas são opcionais.

const CreateTripContext = createContext<CreateTripContextProps | null>(null);

export function CreateTripContextProvider({ children }: { children: ReactNode }) {
  const [destination, setDestination] = useState<string>('');
  const [ownerData, setOwnerDataState] = useState<OwnerData>({
    ownerName: '',
    ownerEmail: '',
    ownerEventDateTo: '',
    ownerEventDateFrom: ''
  });

  const setOwnerData = (data: Partial<OwnerData>) => {
    setOwnerDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <CreateTripContext.Provider value={{ destination, setDestination, ownerData, setOwnerData }}>
      {children}
    </CreateTripContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCreateTripContext() {
  const context = useContext(CreateTripContext);
  if (!context) {
    throw new Error("useCreateTripContext must be used within a CreateTripContextProvider");
  }
  return context;
}
