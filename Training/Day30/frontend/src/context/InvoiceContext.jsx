import { createContext, useEffect, useState } from "react";

export const InvoiceContext = createContext(null);

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:5000/api/invoices");

        if (!response.ok) {
          throw new Error("Failed to fetch invoices");
        }

        const data = await response.json();
        setInvoices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const addInvoice = (invoice) => {
    setInvoices((prevInvoices) => [
      ...prevInvoices,
      {
        id: prevInvoices.length ? prevInvoices[prevInvoices.length - 1].id + 1 : 1,
        customer: invoice.customer,
        amount: Number(invoice.amount),
      },
    ]);
  };

  return (
    <InvoiceContext.Provider value={{ invoices, loading, error, addInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
}
