function InvoiceForm() {
  return (
    <div className="card">
      <h2>Invoice Form</h2>

      <input
        type="text"
        placeholder="Invoice Number"
      />

      <input
        type="text"
        placeholder="Customer Name"
      />

      <input
        type="number"
        placeholder="Amount"
      />

      <button>Add Invoice</button>
    </div>
  );
}

export default InvoiceForm;