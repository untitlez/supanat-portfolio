"use client";
import Navbar from "../components/Navbar";

export default function layout({ children }) {
  return (
    <>
      <div data-theme="dark" className="min-h-screen bg-primary">
        <div className="main-layout">
          <Navbar portfolioBtn="btn-outline" />
          {children}
        </div>
      </div>
    </>
  );
}
