"use client";
import Navbar from "../components/Navbar";

export default function layout({ children }) {
  return (
    <>
      <div data-theme="dark" className="min-h-screen bg-primary">
        <div className="main-layout pb-12 lg:pb-16">
          <Navbar projectBtn="btn-outline" />
          {children}
        </div>
      </div>
    </>
  );
}
