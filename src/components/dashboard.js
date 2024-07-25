import admin from "../images/home/AbhinavGupta.jpeg";
import Faqs from "./faqs";
import { useState } from "react";
import Messages from "./messages";

function Dashboard() {
  const [openContent, setOpenContent] = useState("dashboard");

  return (
    <div className="flex">
      {/* <p className="mr-3 fw-700 ">Dashboard</p> */}
      <div className="sidebar">
        <div className="flex justify-center">
          <img
            src={admin}
            alt="projects"
            className="adminImage bR50 object-cover mb-2"
          ></img>
        </div>
        <p className="text-xs text-center text-white font-bold mb-3  leading-7">
          Abhinav Gupta
        </p>
        <hr></hr>
        <div>
          <ul className="mt-8">
            <li
              onClick={() => {
                setOpenContent("dashboard");
              }}
              className={`dashboardLinks pointer ${
                openContent === "dashboard" ? "activeDLink" : ""
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                setOpenContent("insight");
              }}
              className={`dashboardLinks pointer ${
                openContent === "insight" ? "activeDLink" : ""
              }`}
            >
              Insight
            </li>
            <li
              onClick={() => {
                setOpenContent("messages");
              }}
              className={`dashboardLinks pointer ${
                openContent === "messages" ? "activeDLink" : ""
              }`}
            >
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="w-4/5">
        {openContent === "insight" ? (
          <div className="">
            <p className="mr-3 fw-700 pLR67">Insight: Answer Queries</p>
            <Faqs admin={true} />
          </div>
        ) : (
          ""
        )}
        {openContent === "messages" ? (
          <div>
            <Messages />
          </div>
        ) : (
          ""
        )}
        {openContent === "dashboard" ? (
          <div>
            <p className="mr-3 fw-700 pLR67">Dashboard</p>
            <p className="text-center mt-28">
              Under Development but you can visit Insight & Messages
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Dashboard;
