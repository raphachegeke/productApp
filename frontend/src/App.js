import React from "react";
import AuthApp from "./AuthApp";
import ProductApp from "./ProductApp"; // you forgot to import this!

function App() {
  return (
    <div>
      <AuthApp />
      <ProductApp />
    </div>
  );
}

export default App; // missing space before App
