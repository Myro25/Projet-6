import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from "./Pages/Public/Public.router";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
