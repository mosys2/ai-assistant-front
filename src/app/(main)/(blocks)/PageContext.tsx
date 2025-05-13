"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Home from "../(sections)/home/page";
import Why from "../(sections)/why/page";
import Packages from "../(sections)/packages/Packages";

const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 9999,
    }}
  >
    <div style={{ textAlign: "center" }}>
      <Image
        className="loading-logo"
        src={logo}
        alt="Loading Logo"
        style={{
          width: "50px",
          height: "auto",
        }}
      />
      <p style={{ color: "#3347fc", fontSize: "18px", marginTop: "20px" }}>
        Loading...
      </p>
    </div>
  </div>
);

const Header = dynamic(() => import("./Header"), {
  loading: () => <Loading />,
});

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <Loading />,
});

const PageContext = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Simulate the initial load being complete after a short delay (e.g., 100ms).
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 100);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount.
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      // Check for hash in the URL
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1)); // Remove '#' and get the element
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [isInitialLoad]);



  return (
    <>
      {isInitialLoad ? null : (
        <>
          <Header />
          <main>
            <Home />
            <Why />
            <Packages />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default PageContext;
