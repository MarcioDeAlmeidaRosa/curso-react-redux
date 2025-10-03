import React from "react";
import Products from "../../data/products";
import "./ProductsTable.css";

export default (props) => {
  const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return (
    <div>
      <table className="price-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="num">Price</th>
          </tr>
        </thead>
        <tbody>
          {Products.length == 0 ? (
            <tr key={0}>
              <td colSpan={3} className="empty">
                No products
              </td>
            </tr>
          ) : (
            Products.map((product, index) => (
              <tr key={product.id} className={index % 2 === 0 ? "even" : "odd"}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td className="num">{money.format(product.price)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
