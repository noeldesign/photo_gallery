import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EventsPage from "./pages/Events";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/events", element: <EventsPage />,
                loader: async () => {
                    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/resources/by_asset_folder?asset_folder=Events&tags=true&metadata=true`, {
                        headers: {
                            Authorization: `Basic ${Buffer.from(
                                `${process.env.REACT_APP_API_KEY}:${process.env.REACT_APP_API_SECRET}`
                            ).toString("base64")}`,
                        } // end of headers
                    }) // end of fetch
                    const data = await res.json();
                    console.log(data)
                    return data;
                } // end of loader function
            }, // end of path: "/events"
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
