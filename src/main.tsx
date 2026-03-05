import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const params = new URLSearchParams(window.location.search);
const p = params.get("p");

if (p) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  const path = decodeURIComponent(p);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  window.history.replaceState(null, "", `${base}${normalizedPath}`);
}

createRoot(document.getElementById("root")!).render(<App />);
