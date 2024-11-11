import { Route, Routes } from "react-router-dom"
import { AuthLayout, HomeLayout, ProductLayout } from "./layout"

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Routes>
        <Route path="/*" element={<HomeLayout />} />
        <Route path="/products/*" element={<ProductLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
      </Routes>
    </div>
  )
}

export default App
