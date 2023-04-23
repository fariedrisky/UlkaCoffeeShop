import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const toHome = () => navigate("/");
  return (
    <>
      <div className="container">
        <p>Ini adalah halaman Profile</p>
        <Button onClick={toHome}>
            Back  To Home
        </Button>
      </div>
    </>
  );
}

export default Profile;
