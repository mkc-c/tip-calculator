function BillInput({ children }) {
  return (
    <div>
      <label htmlFor="bill">{children}</label>
      <input id="bill" type="text" />
    </div>
  );
}

export default BillInput;
