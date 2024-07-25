import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Messages() {
  const [messages, setMessages] = useState();
  const [openedMessage, setOpenedMessage] = useState();
  useEffect(() => {
    fetch("https://sahastrabackend.onrender.com/contact-us")
      .then((data) => data.json())
      .then((data) => setMessages(data.reverse()))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="pLR67 ">
      <p className="mr-3 fw-700 ">Messages</p>
      {messages ? (
        <table className="mt-28 messagesTable">
          <tr>
            <th className="messageTableHeading w-1/5">Name</th>
            <th className="messageTableHeading w-1/4">Email</th>
            <th className="messageTableHeading w-1/6">Phone No.</th>
            <th className="messageTableHeading w-2/4">Message</th>
          </tr>
          {messages?.map((message, i) => {
            return (
              <tr key={i}>
                <td className="messageTableContent">{message.name}</td>
                <td className="messageTableContent">{message.email}</td>
                <td className="messageTableContent">{message.phone}</td>
                <td className="messageTableContent">
                  {message.message.substring(0, 44)}
                  {message.message.length > 44 ? "..." : ""}
                </td>
                <td
                  className="pointer mTCSquare"
                  onClick={() => {
                    setOpenedMessage(message);
                  }}
                >
                  <FaArrowUpRightFromSquare style={{ fontSize: "12px" }} />
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <div className="mt-28">
          <div className="load"></div>
        </div>
      )}
      {openedMessage ? (
        <div className="askForm p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="mr-3 fw-700 pb-8">Message From:</p>
              <ul>
                <li className="messageDetails pb-4  flex items-center">
                  <span className="font-semibold ml-4 mr-2.5">Name:</span>
                  {openedMessage?.name}
                </li>
                <li className="messageDetails pb-4  flex items-center">
                  <span className="font-semibold ml-4 mr-3.5">Email:</span>
                  {openedMessage?.email}
                </li>
                <li className="messageDetails pb-16  flex items-center">
                  <span className="font-semibold ml-4 mr-2">Phone:</span>
                  {openedMessage?.phone}
                </li>
                <p className="mr-3 fw-700 pb-8">Message:</p>
                <li className="messageDetails ml-4 ">
                  {openedMessage?.message}
                </li>
              </ul>
            </div>
            <div>
              <IoClose
                onClick={() => {
                  setOpenedMessage();
                }}
                className=" pointer"
                style={{ fontSize: "2rem", color: "black" }}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Messages;
