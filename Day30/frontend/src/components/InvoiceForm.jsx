import { useContext, useState } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

function InvoiceForm() {
  const { addInvoice } = useContext(InvoiceContext);

  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customer.trim() || !amount) return;

    addInvoice({
      customer,
      amount,
    });

    setCustomer("");
    setAmount("");
  };

  return (
    <form className="invoice-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Invoice</button>
    </form>
  );
}

export default InvoiceForm;