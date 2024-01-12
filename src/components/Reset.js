function Reset({ bill, user, friend, onReset }) {
  if (bill || user || friend)
    return (
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
    );
}

export default Reset;
