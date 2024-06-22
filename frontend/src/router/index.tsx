import { ChatBox } from "@/components/pages/chat box";
import { ChatPDF } from "@/components/pages/chat PDF";
import { Dashboard } from "@/components/pages/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const RootRoute = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/chatbox/:id",
      element: <ChatBox />,
    },
    {
      path: "/chatPDF/:id",
      element: <ChatPDF />,
    },
  ]);

  return <RouterProvider router={routers} />;
};
