import React from "react";
import GetAllProducts from "./components/GetAllProducts";
import GetProductById from "./components/GetProductById";
import RemoveProductById from "./components/RemoveProductById";
import CreateProduct from "./components/CreateProduct";
import UpDateProduct from "./components/UpDateProduct";

export default function App() {
  return (
    <div>
      <GetAllProducts></GetAllProducts>
      <GetProductById></GetProductById>
      <RemoveProductById></RemoveProductById>
      <CreateProduct></CreateProduct>
      <UpDateProduct></UpDateProduct>
    </div>
  );
}
