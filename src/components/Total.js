function Total({ total, bill, tip }) {
  let content;

  if (!bill) return null;
  else if (total && !tip) {
    content = `You pay $${bill} ($${bill} + $${tip})`;
  } else {
    content = `You pay $${bill} ($${total} + $${tip})`;
  }

  console.log(typeof content);

  return (
    <div>
      <h2>
        <b>{content}</b>
      </h2>
    </div>
  );
}

export default Total;
