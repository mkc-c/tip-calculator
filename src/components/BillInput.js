import { useState } from "react";

function BillInput({ children }) {
  const [bill, setBill] = useState(0);

  const handleChange = (event) => {
    const inputValue = Number(event.target.value);
    if (isNaN(inputValue)) return;
    setBill(inputValue);
  };

  return (
    <div>
      <label htmlFor="bill">{children}</label>
      <input id="bill" type="text" value={bill} onChange={handleChange} />
    </div>
  );
}

export default BillInput;
