import InvoiceForm from "../components/InvoiceForm";
import InvoiceTable from "../components/InvoiceTable";
import ApprovalActions from "../components/ApprovalActions";

function InvoicePage() {
  const invoices = [
    {
      id: 1,
      number: "INV001",
      customer: "Jeevan",
      amount: 1200,
    },
    {
      id: 2,
      number: "INV002",
      customer: "Anchal",
      amount: 2500,
    },
    {
      id: 3,
      number: "INV003",
      customer: "Priya",
      amount: 1800,
    },
  ];

  return (
    <div className="container">
      <h1>Invoice Management System</h1>

      <InvoiceForm />

      <InvoiceTable invoices={invoices} />

      <ApprovalActions />
    </div>
  );
}

export default InvoicePage;