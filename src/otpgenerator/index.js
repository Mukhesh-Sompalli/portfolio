import React, { useState } from "react";

const OTPGenerator = () => {
  // State to store the generated OTP
  const [otp, setOtp] = useState("");

  // Function to generate a random OTP of a specific length
  const generateOTP = () => {
   let  length = 6
    let newOtp = "";
    for (let i = 0; i < length; i++) {
      newOtp += Math.floor(Math.random() * 10); // Random digit between 0-9
    }
    setOtp(newOtp);
  };

  // Function to copy OTP to the clipboard
  const copyToClipboard = () => {
    if (otp) {
      navigator.clipboard.writeText(otp);
      alert("OTP copied to clipboard!");
    } else {
      alert("Generate an OTP first!");
    }
  };

  // Generate OTP when the app loads for the first time
  React.useEffect(() => {
    generateOTP();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>OTP Generator</h1>
      <div style={styles.otpContainer}>
        <p style={styles.otp}>{otp || "Generate an OTP"}</p>
        <button onClick={copyToClipboard} style={styles.copyButton}>
          Copy OTP
        </button>
      </div>
      <button onClick={() => generateOTP()} style={styles.generateButton}>
        Generate New OTP
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  otpContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  otp: {
    fontSize: "1.5rem",
    marginRight: "10px",
    color: "#555",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  copyButton: {
    padding: "10px 15px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
  generateButton: {
    padding: "12px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};

export default OTPGenerator;
