
import ClientForm from "@/components/ClientForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewClientPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Client</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Enter the details for your new client.</p>
          <ClientForm />
        </CardContent>
      </Card>
    </div>
  );
}
