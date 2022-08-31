import React, { useEffect, useState } from "react";
import { seo } from "../helpers/utilities";
import { Alert, Button } from "react-bootstrap";

function Contact() {
  useEffect(() => {
    seo({
      title: "Contact | Consultant, App Developer & Startup Founder",
    });
  });

  const [busy, setBusy] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setBusy(true);

    const data = {
      name: name,
      email: email,
      message: message,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`/api/contact`, requestOptions)
      .then((res) =>
        res.status === 200
          ? setShowSuccess(true)
          : setShowFailure("Your message was not sent, please try again later.")
      )
      .catch((e) => console.log(e.message))
      .finally(() => setBusy(false));
  };

  const resetForm = () => {
    setShowSuccess(false);
    setShowFailure("");
    setMessage("");
    setName("");
    setEmail("");
  };

  return (
    <div className="App">
      {showSuccess ? (
        <Alert variant="success">
          <Alert.Heading>Thank you</Alert.Heading>
          <p>Your message has been sent!</p>
          <hr />
          <div className="d-flex justify-content-center">
            <Button onClick={() => resetForm()} variant="outline-success">
              Great!
            </Button>
          </div>
        </Alert>
      ) : showFailure === "" ? (
        <></>
      ) : (
        <Alert variant="danger" onClose={() => setShowFailure("")} dismissible>
          <Alert.Heading>Something went wrong</Alert.Heading>
          <p>{showFailure}</p>
        </Alert>
      )}
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <h1>Please get in touch</h1>
        <p>
          Thank you for taking a look at my pet project, I hope you found it
          useful. <br />
        </p>
        <p>
          I like hearing from interesting people, so please feel free to reach
          out.
          <br />
        </p>
        <p>
          I'm happy to discuss any questions you may have about some of my
          experiences. <br />I could also consult for you on an up and coming
          project you may have. <br />
          I love building MVPs for new ideas if you're looking for some help in
          that department. <br />
          Or perhaps you'd just like to say hi - that's cool too! <br />
        </p>
        <br />
        <p>I'll do my best to get back to you as soon as I can.</p>
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={() => {
          window.open(
            "mailto:howiesommerfeld@gmail.com?subject=Hi from your website!"
          );
        }}
      >
        Mail Me!
      </button>
    </div>
  );
}

export default Contact;
