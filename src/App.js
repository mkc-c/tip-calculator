import { useState } from "react";

import BillInput from "./components/BillInput";
import PercentageInput from "./components/PercentageInput";

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

  const averagePercentage = Math.abs(
    (percentages.user + percentages.friend) / 2
  );

  const handleBillChange = (bill) => {
    setBill(bill);
  };

  const handlePercentageChange = (value, person) => {
    setPercentages({ ...percentages, [person]: value });
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
    </div>
  );
}

export default App;
