import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const toProduct = () => navigate("/product");
  return (
    <>
      <div className="container">
        <p>Ini adalah halaman Home</p>
        <Button onClick={toProduct}>
            Product
        </Button>
      </div>
    </>
  );
}

export default Home;
