function Total({ bill, tip }) {
  if (!bill) return null;

  return (
    <div>
      <h2>
        You pay ${bill + tip} (${bill} + ${tip})
      </h2>
    </div>
  );
}

export default Total;
