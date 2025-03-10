import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthRegister from "./pages/auth/AuthRegister.tsx";
import AuthLogin from "./pages/auth/AuthLogin.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./libs/queryClient.ts";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="register" element={<AuthRegister />} />
            <Route path="login" element={<AuthLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  </StrictMode>
);
