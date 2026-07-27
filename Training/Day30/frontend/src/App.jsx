import { InvoiceProvider } from "./context/InvoiceContext";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceTable from "./components/InvoiceTable";

function App() {
  return (
    <InvoiceProvider>
      <div className="container">
        <h1>Invoice Dashboard</h1>

        <InvoiceForm />

        <hr />

        <InvoiceTable />
      </div>
    </InvoiceProvider>
  );
}

export default App;