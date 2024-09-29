import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email validation (checks if the value contains "@" and ".")
    if (!value.includes("@") || !value.includes(".")) {
      setErrorMessage("Invalid email address");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        {/* Display validation message */}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default EmailForm;
