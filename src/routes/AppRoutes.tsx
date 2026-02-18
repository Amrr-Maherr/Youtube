import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/profile" element={<div>profile</div>} />
      </Routes>
    </BrowserRouter>
  );
}
