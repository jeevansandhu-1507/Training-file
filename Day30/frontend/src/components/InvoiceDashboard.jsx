import InvoiceForm from "./InvoiceForm";
import InvoiceTable from "./InvoiceTable";
import ApprovalActions from "./ApprovalActions";

function InvoiceDashboard() {
  return (
    <div>
      <InvoiceForm />
      <InvoiceTable />
      <ApprovalActions />
    </div>
  );
}

export default InvoiceDashboard;