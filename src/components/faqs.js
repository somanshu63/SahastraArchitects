import { useEffect, useState } from "react";
import userIcon from "../images/user-icon.png";
import adminIcon from "../images/home/AbhinavGupta.jpeg";
import { IoClose } from "react-icons/io5";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Faqs(props) {
  const [faqs, setFaqs] = useState();
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerInput, setAnswerInput] = useState("");
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAskFormOpen, setIsAskFormOpen] = useState(false);

  useEffect(() => {
    return () => {
      fetch("https://sahastrabackend.onrender.com/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site: "insight",
        }),
      })
        .then(() => {})
        .catch((error) => {});
    };
  }, []);

  useEffect(() => {
    fetch("https://sahastrabackend.onrender.com/faq")
      .then((data) => data.json())
      .then((data) => setFaqs(data.reverse()))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (props.location.pathname === "/admin-faqs") {
      setIsAdminLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    if (props.admin) {
      setIsAdminLoggedIn(true);
    }
  }, []);
  const SendQuery = () => {
    if (query) {
      fetch("https://sahastrabackend.onrender.com/faq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      })
        .then((res) => {
          fetch("https://sahastrabackend.onrender.com/faq")
            .then((data) => data.json())
            .then((data) => setFaqs(data.reverse()))
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
      setQuery("");
    }
  };
  function answerQuery(faq, i) {
    fetch(`https://sahastrabackend.onrender.com/faq/${faq?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: faq.query,
        id: faq._id,
        answer: answerInput,
      }),
    })
      .then((res) => {
        fetch("https://sahastrabackend.onrender.com/faq")
          .then((data) => data.json())
          .then((data) => setFaqs(data.reverse()))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
    setAnswerInput("");
  }
  return (
    <div>
      {!props?.admin ? (
        <div className="flex items-center pLR67 justify-between">
          {" "}
          <p className="mr-3 fw-700 ">
            Ask the Architect: Your Design Questions Answered
          </p>
          <button
            onClick={() => {
              setIsAskFormOpen(true);
            }}
            className="ask"
          >
            Ask The Architect
          </button>
        </div>
      ) : (
        ""
      )}
      <ul className="mt-28 pLR67">
        {faqs ? (
          faqs.map((faq, i) => {
            return (
              <div className="faqContainer">
                <li key={i} className="query flex items-center">
                  <img src={userIcon} className="userIcon" alt="user "></img>
                  {faq?.query}
                </li>
                <li className="answer  flex items-center">
                  <img
                    src={adminIcon}
                    className="userIcon adminIcon"
                    alt="admin"
                  ></img>
                  {faq?.answer ? (
                    faq.answer
                  ) : isAdminLoggedIn ? (
                    <>
                      {answer && currentAnswerIndex === i ? (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            answerQuery(faq, i);
                            setAnswer(false);
                          }}
                          className="flex items-center w-full"
                        >
                          <input
                            type="text"
                            name="answerInput"
                            className="inputAnswer"
                            value={answerInput}
                            onChange={(e) => {
                              setAnswerInput(e.target.value);
                            }}
                            placeholder="write answer"
                          ></input>
                          <button type="submit" className="ask fs-12">
                            Submit
                          </button>
                          <button
                            onClick={() => {
                              setAnswer(false);
                              setCurrentAnswerIndex();
                            }}
                            className="ask fs-12"
                          >
                            Cancel
                          </button>
                        </form>
                      ) : (
                        <button
                          onClick={() => {
                            setAnswer(true);
                            setCurrentAnswerIndex(i);
                          }}
                          className="ask fs-12"
                        >
                          Answer
                        </button>
                      )}
                    </>
                  ) : (
                    "-"
                  )}
                </li>
              </div>
            );
          })
        ) : (
          <div class="load"></div>
        )}
      </ul>
      {isAskFormOpen ? (
        <div className="askForm p-8">
          <div className="flex justify-between">
            <div>
              <p className="mr-3 fw-700 ">
                Ask the Architect your Design Question
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  SendQuery();
                  setIsAskFormOpen(false);
                }}
              >
                <input
                  type="text"
                  name="query"
                  className="input"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  placeholder="ask your question"
                ></input>
                <br></br>
                <button type="submit" className="ask askBtn">
                  Ask The Architect
                </button>
              </form>
            </div>

            <IoClose
              onClick={() => {
                setIsAskFormOpen(false);
              }}
              className=" pointer"
              style={{ fontSize: "2rem", color: "black" }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default withRouter(Faqs);
