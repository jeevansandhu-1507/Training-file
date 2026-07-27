import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import LoadingSkeleton from "../context/LoadingSkeleton";

function InvoiceTable() {
  const { invoices, loading, error } = useContext(InvoiceContext);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h2>Invoice List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.customer}</td>
              <td>₹{invoice.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTable;