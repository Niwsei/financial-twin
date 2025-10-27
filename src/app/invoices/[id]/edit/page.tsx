
"use client";

import InvoiceForm from "@/components/InvoiceForm";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditInvoicePage() {
  const params = useParams();
  const invoiceId = params.id as string;

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Invoice {invoiceId}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Update the details for this invoice.</p>
          <InvoiceForm invoiceId={invoiceId} />
        </CardContent>
      </Card>
    </div>
  );
}
