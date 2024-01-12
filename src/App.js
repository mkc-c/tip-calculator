import { useState } from "react";

import BillInput from "./components/BillInput";
import PercentageInput from "./components/PercentageInput";
import Total from "./components/Total";
import Reset from "./components/Reset";

const serviceOptions = [
  {
    label: "Dissatisfied (0%)",
    value: 0,
  },
  {
    label: "It was okay (5%)",
    value: 0.05,
  },
  {
    label: "It was good (10%)",
    value: 0.1,
  },
  {
    label: "Absolutely amazing! (20%)",
    value: 0.2,
  },
];

function App() {
  const [bill, setBill] = useState(0);
  const [percentages, setPercentages] = useState({
    user: 0,
    friend: 0,
  });

  const averagePercentage =
    percentages.user && percentages.friend
      ? (percentages.user + percentages.friend) / 2
      : percentages.friend + percentages.user;
  const tip = bill * parseFloat(averagePercentage).toFixed(2);
  const total = bill + tip;

  const handleBillChange = (bill) => {
    setBill(bill);
  };

  const handlePercentageChange = (value, person) => {
    setPercentages({ ...percentages, [person]: value });
  };

  const handleReset = () => {
    setBill(0);
    setPercentages({ user: 0, friend: 0 });
  };

  return (
    <div className="App">
      <BillInput bill={bill} onBillChange={handleBillChange}>
        How much was the bill?
      </BillInput>
      <PercentageInput
        options={serviceOptions}
        percentage={{ user: percentages.user }}
        onPercentageChange={handlePercentageChange}
      >
        How did you like the service?
      </PercentageInput>
      <PercentageInput
        options={serviceOptions}
        percentage={{ friend: percentages.friend }}
        onPercentageChange={handlePercentageChange}
      >
        How did your friend like the service?
      </PercentageInput>
      <Total bill={bill} total={total} tip={tip} />
      <Reset
        onReset={handleReset}
        bill={bill}
        user={percentages.user}
        friend={percentages.friend}
      />
    </div>
  );
}

export default App;
