import React, { useState } from "react";

const ContactComp = (props) => {
  const [mailerState, setMailerState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  // const validate = (mailerState) => {
  //   const result = schema.validate(
  //     {
  //       fullName: mailerState.fullName,
  //       email: mailerState.email,
  //       number: mailerState.phone,
  //       message: mailerState.message,
  //     },
  //     { abortEarly: false }
  //   );

  //   if (!result.error) {
  //     setFullNameError("");
  //     setPhoneError("");
  //     setMessageError("");
  //     setEmailError("");
  //     setErrorMessage(false);
  //     return true;
  //   }

  //   for (let i in result.error.details) {
  //     if (result.error.details[i].context.label === "Name") {
  //       setFullNameError(result.error.details[i].message);
  //       setErrorMessage(true);
  //       break;
  //     } else setFullNameError("");
  //     setErrorMessage(false);
  //   }

  //   for (let i in result.error.details) {
  //     if (result.error.details[i].context.label === "Email") {
  //       setEmailError(result.error.details[i].message);
  //       setErrorMessage(true);
  //       break;
  //     } else setEmailError("");
  //     setErrorMessage(false);
  //   }

  //   for (let i in result.error.details) {
  //     if (result.error.details[i].context.label === "Number") {
  //       setPhoneError(result.error.details[i].message);
  //       setErrorMessage(true);
  //       break;
  //     } else setPhoneError("");
  //     setErrorMessage(false);
  //   }

  //   for (let i in result.error.details) {
  //     if (result.error) {
  //       if (result.error.details[i].context.label === "Message") {
  //         setMessageError(result.error.details[i].message);
  //         setErrorMessage(true);
  //         break;
  //       }
  //     } else setMessageError("");
  //     setErrorMessage(false);
  //   }

  //   if (!result.error) {
  //     setFullNameError("");
  //     setPhoneError("");
  //     setMessageError("");
  //     setEmailError("");
  //     setErrorMessage(false);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <React.Fragment>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          name="fullName"
          className="box"
          value={mailerState.fullName}
          onChange={handleStateChange}
        />
        {fullNameError ? <p className="errorMessage">{fullNameError}</p> : null}

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="box"
          value={mailerState.email}
          onChange={handleStateChange}
        />
        {emailError ? <p className="errorMessage">{emailError}</p> : null}

        <input
          type="number"
          placeholder="Phone"
          name="phone"
          className="box"
          value={mailerState.phone}
          onChange={handleStateChange}
        />
        {phoneError ? <p className="errorMessage">{phoneError}</p> : null}

        <textarea
          name="message"
          placeholder="Message"
          className="box"
          id=""
          cols="10"
          rows="5"
          value={mailerState.message}
          onChange={handleStateChange}
        />
        {messageError ? <p className="errorMessage">{messageError}</p> : null}

        <div
          style={{ transformOrigin: "0 0", width: "100%" }}
          className="captcha"
        >
          {/* <ReCAPTCHA
                    sitekey="6LePrU4kAAAAAJtpRmNFy9i-u7PNdMnjp-PIeAsP"
                    onChange={onChange}
                  /> */}
        </div>

        <input
          // type="submit"
          onClick={() => {
            props.setPopup(!props.popup);
          }}
          value="Send Message"
          className="btn"
        />
      </form>
    </React.Fragment>
  );
};

export default ContactComp;
