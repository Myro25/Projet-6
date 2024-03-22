import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Logement, Error404 } from "./lien";
import Layout from "@/Layout/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    )
}

export default PublicRouter;