import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";
import { CreateTripContextProvider } from "./context/CreateTripContext";
import { TripDataPropvider } from "./context/TripDataContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

function App() {
  return (
    <CreateTripContextProvider>
      <TripDataPropvider>
        <RouterProvider router={router} />
      </TripDataPropvider>
    </CreateTripContextProvider>
  )
}

export default App
