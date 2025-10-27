
"use client";



import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { Pencil, Trash, CheckCircle } from "lucide-react";

interface Invoice {
  id: string;
  clientName: string;
  amount: number;
  status: "pending" | "paid" | "overdue";
  dueDate: string;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function InvoiceList() {
  const { toast } = useToast();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setInvoices([
        { id: "inv001", clientName: "Alice Smith", amount: 1500, status: "pending", dueDate: "2024-11-15" },
        { id: "inv002", clientName: "Bob Johnson", amount: 2500, status: "paid", dueDate: "2024-10-20" },
        { id: "inv003", clientName: "Charlie Brown", amount: 750, status: "overdue", dueDate: "2024-09-01" },
      ]);
      setLoading(false);
    };
    fetchInvoices();
  }, []);

  const handleDelete = async (invoiceId: string) => {
    setLoading(true);
    // Simulate API call to delete invoice
    await new Promise((resolve) => setTimeout(resolve, 500));
    setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.id !== invoiceId));
    toast({
      title: "Invoice Deleted",
      description: `Invoice ${invoiceId} has been deleted.`, 
    });
    setLoading(false);
  };

  const handleMarkAsPaid = async (invoiceId: string) => {
    setLoading(true);
    // Simulate API call to mark invoice as paid
    await new Promise((resolve) => setTimeout(resolve, 500));
    setInvoices((prevInvoices) =>
      prevInvoices.map((invoice) =>
        invoice.id === invoiceId ? { ...invoice, status: "paid" } : invoice
      )
    );
    toast({
      title: "Invoice Paid",
      description: `Invoice ${invoiceId} has been marked as paid.`, 
    });
    setLoading(false);
  };

  if (loading) {
    return <div>Loading invoices...</div>;
  }

  if (invoices.length === 0) {
    return <p className="text-center text-gray-500">No invoices found. Create a new invoice!</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {invoices.map((invoice) => (
        <Card key={invoice.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-lg">{invoice.clientName}</CardTitle>
              <CardDescription>Amount: ${invoice.amount.toLocaleString()}</CardDescription>
              <CardDescription>Due: {formatDate(invoice.dueDate)}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${invoice.status === "paid"
                    ? "bg-green-50 text-green-700 ring-green-600/20"
                    : invoice.status === "pending"
                      ? "bg-yellow-50 text-yellow-800 ring-yellow-600/20"
                      : "bg-red-50 text-red-700 ring-red-600/20"
                  }`}
              >
                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
              </span>
              {invoice.status !== "paid" && (
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleMarkAsPaid(invoice.id)}>
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
              <Link href={`/invoices/${invoice.id}/edit`}>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Pencil className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(invoice.id)}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Additional invoice details can go here if needed */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
