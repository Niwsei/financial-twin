
"use client";

import ClientForm from "@/components/ClientForm";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditClientPage() {
  const params = useParams();
  const clientId = params.id as string;

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Client {clientId}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Update the details for this client.</p>
          <ClientForm clientId={clientId} />
        </CardContent>
      </Card>
    </div>
  );
}
