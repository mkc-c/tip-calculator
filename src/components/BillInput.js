function BillInput({ children, bill, onBillChange }) {
  const handleChange = (event) => {
    const inputValue = Number(event.target.value);
    if (isNaN(inputValue)) return;
    onBillChange(Number(inputValue));
  };

  return (
    <div>
      <label htmlFor="bill">{children}</label>
      <input id="bill" type="text" value={bill} onChange={handleChange} />
    </div>
  );
}

export default BillInput;
