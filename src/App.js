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
  return (
    <div className="App">
      <BillInput>How much was the bill?</BillInput>
      <PercentageInput options={serviceOptions}>
        How did you like the service?
      </PercentageInput>
      <PercentageInput options={serviceOptions}>
        How did your friend like the service?
      </PercentageInput>
    </div>
  );
}

export default App;
