import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Header/Footer";
import LoadingScreen from "../Header/ScreenLoder";

function RootLayout() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, [location]); 

  return (
    <div>
      <Navbar />
      
      {loading ? (
        // <p className="text-center pt-40 h-screen font-semibold text-xl">Loading...</p> 
        <LoadingScreen />
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}

export default RootLayout;
