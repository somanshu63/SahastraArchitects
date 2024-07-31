import admin from "../images/home/AbhinavGupta.jpeg";
import Faqs from "./faqs";
import { useEffect, useState } from "react";
import Messages from "./messages";
import DonutChart from "react-donut-chart";

function Dashboard() {
  const [openContent, setOpenContent] = useState("dashboard");
  const [sites, setSites] = useState();
  const [siteCountss, setSiteCountss] = useState();
  useEffect(() => {
    fetch("https://sahastrabackend.onrender.com/dashboard")
      .then((data) => data.json())
      .then((data) => setSites(data))
      .catch((error) => console.log(error));
  }, []);
  const siteCounts = {};
  useEffect(() => {
    sites?.forEach((item) => {
      if (siteCounts[item.site]) {
        siteCounts[item.site]++;
      } else {
        siteCounts[item.site] = 1;
      }
    });
    setSiteCountss(siteCounts);
  }, [sites]);
  const data = [
    {
      label: "Home",
      value: siteCountss
        ? Math.round((siteCountss["home"] / sites?.length) * 100)
        : "",
    },
    {
      label: "ADS",
      value: siteCountss
        ? Math.round((siteCountss["ADS"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Work",
      value: siteCountss
        ? Math.round((siteCountss["work"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Gallery",
      value: siteCountss
        ? Math.round((siteCountss["gallery"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Purpose",
      value: siteCountss
        ? Math.round((siteCountss["purpose"] / sites?.length) * 100)
        : "",
    },
    {
      label: "People",
      value: siteCountss
        ? Math.round((siteCountss["people"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Insight",
      value: siteCountss
        ? Math.round((siteCountss["insight"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Studios",
      value: siteCountss
        ? Math.round((siteCountss["studios"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Contact us",
      value: siteCountss
        ? Math.round((siteCountss["contact us"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Sitemap",
      value: siteCountss
        ? Math.round((siteCountss["sitemap"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Facade",
      value: siteCountss
        ? Math.round((siteCountss["facade"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Interior",
      value: siteCountss
        ? Math.round((siteCountss["interior"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Vastu",
      value: siteCountss
        ? Math.round((siteCountss["vastu"] / sites?.length) * 100)
        : "",
    },
    {
      label: "Landscape",
      value: siteCountss
        ? Math.round((siteCountss["landscape"] / sites?.length) * 100)
        : "",
    },
  ];
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
          <div className="pLR67">
            <p className="mr-3 fw-700 ">Dashboard</p>
            {/* <p className="text-center ">
              Under Development but you can visit Insight & Messages
            </p> */}
            <div className="flex justify-between items-start mt-28">
              <div className="analyticsBox relative flex justify-center">
                <p className="mr-3 fw-700 absolute top-0">Visit Log</p>
                <table className="messagesTable analyticsTable">
                  <tr>
                    <th className="messageTableHeading w-1/5">Sr. No.</th>
                    <th className="messageTableHeading w-1/3">Page Visited</th>
                    <th className="messageTableHeading w-1/3">Date & Time </th>
                  </tr>
                  {sites
                    ?.filter((site, i) => i % 2 === 0 && i < 200)
                    .map((site, i) => {
                      return (
                        <tr key={i}>
                          <td className="messageTableContent">{i + 1}</td>
                          <td className="messageTableContent capitalize">
                            {site.site}
                          </td>
                          <td className="messageTableContent">
                            {site.createdAt.substring(8, 10)}-
                            {site.createdAt.substring(5, 7)}-
                            {site.createdAt.substring(0, 4)}
                            {"   "}
                            {site.createdAt.substring(11, 16)}
                          </td>
                        </tr>
                      );
                    })}
                </table>
              </div>
              <div className="analyticsBox p-4 pl-8 relative pb-5 flex items-center chartContainer justify-center">
                <p className="mr-3 fw-700 absolute top-0">Site Engagement</p>
                <DonutChart
                  className="text-2xl"
                  data={data}
                  colors={[
                    "#111111",
                    "#e5e4e2",
                    "#FFFFFF",
                    "#009b77",
                    "#111111",
                    "#e5e4e2",
                    "#FFFFFF",
                    "#009b77",
                    "#111111",
                    "#e5e4e2",
                    "#FFFFFF",
                    "#009b77",
                    "#111111",
                    "#e5e4e2",
                  ]}
                  innerRadius={0.6}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Dashboard;
