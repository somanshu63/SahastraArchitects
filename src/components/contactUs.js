import { useEffect, useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      fetch("https://sahastrabackend.onrender.com/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site: "contact us",
        }),
      })
        .then(() => {})
        .catch((error) => {});
    };
  }, []);

  const sendMessage = () => {
    fetch("https://sahastrabackend.onrender.com/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        alert("Message sent successfully");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || !message) {
      setError("All fields are required");
    } else if (name || email || phone || message) {
      setError("");
      sendMessage();
    }
  };

  return (
    <div className="pLR67 ">
      <p className="mr-3 fw-700 ">Contact Us</p>
      <div className="mt-28">
        <form
          className="contactForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contactInput"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contactInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
          <input
            type="phone"
            name="phone"
            placeholder="Your Phone Number"
            className="contactInput"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          ></input>
          <textarea
            name="message"
            rows={5}
            value={message}
            placeholder="Write your message here..."
            className="contactInput "
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          {error ? (
            <p className="text-red-600 text-center fs-12">{error}</p>
          ) : (
            ""
          )}
          <div className="flex justify-center">
            <button type="submit" className="ask contactSubmitBtn">
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
