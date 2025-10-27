
import InvoiceForm from "@/components/InvoiceForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewInvoicePage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create New Invoice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Fill in the details to create a new invoice.</p>
          <InvoiceForm />
        </CardContent>
      </Card>
    </div>
  );
}
