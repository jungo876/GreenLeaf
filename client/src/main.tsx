import { createRoot } from "react-dom/client";
import { StrictMode } from 'react'
// @ts-ignore
import { AuthProvider } from "./context/AuthContext.jsx"
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
<StrictMode>
<AuthProvider>
<App />
</AuthProvider>
</StrictMode>);
