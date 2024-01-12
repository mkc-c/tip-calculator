function Total({ total, bill, tip }) {
  if (!bill) return null;

  return (
    <div>
      <h2>
        You pay ${bill} (${total} + ${tip})
      </h2>
    </div>
  );
}

export default Total;
