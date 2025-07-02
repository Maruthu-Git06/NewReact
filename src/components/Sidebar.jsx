import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../routes";
import './Sidebar.css';
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaChartPie, FaBars } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle button visible only on small screens */}
      <div className="d-md-none bg-dark text-white p-2">
        <FaBars onClick={toggleSidebar} style={{ cursor: "pointer", fontSize: "24px" }} />
      </div>

      {/* Sidebar content */}
      <div
        className={`sidebar text-white p-3 d-flex flex-column bg-dark ${
          isOpen ? "d-block" : "d-none"
        } d-md-block`}
        style={{ minHeight: "100vh", width: "260px" }}
      >
        <h4 className="text-white mb-4 d-flex align-items-center justify-content-center fw-bold fs-2">
          <LuChartNoAxesCombined className="me-2" style={{ color: "#61dafb" }} /> UT
        </h4>
        <nav className="nav flex-column mt-3" style={{ fontSize: "18px" }}>
          <NavLink
            to={Routes.Dashboard.path}
            className={({ isActive }) =>
              `nav-link text-white mb-3 ${isActive ? "active" : ""}`
            }
          >
            <FaChartPie /> Dashboard
          </NavLink>
          <NavLink
            to={Routes.Report.path}
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <HiDocumentReport /> Metrics Report
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;