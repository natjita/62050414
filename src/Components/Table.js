import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.Deaths - b.Deaths;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.Deaths - a.Deaths;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.Recoveries - b.Recoveries;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.Recoveries - a.Recoveries;
    });

    setSortProduct(res);
  };

  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          🔎search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">new_case</th>
            <th scope="col">Confirmed</th>
            <th scope="col" style={{ width: "200px" }}>
             💔{" "}
              <span role="button" className="" onClick={onSortClick}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                ⬇️
              </span>
            </th>
            <th scope="col">
            💝Recoveries
              <span role="button" className="" onClick={onSortClick3}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                ⬇️
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table-info">
                <td>{index + 1}</td>
               
                <td>{items.province}</td>
                <td>{items.total_case}</td>
                <td>{items.total_death}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;