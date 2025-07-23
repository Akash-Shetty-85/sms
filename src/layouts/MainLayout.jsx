// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Navigationbar />
            <main className="flex-1 pt-20 px-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
