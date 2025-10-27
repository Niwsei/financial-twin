
import InvoiceList from "@/components/InvoiceList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvoicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Invoices</h1>
            <p className="text-sm text-muted-foreground">Manage your client invoices and track their payment status.</p>
          </div>
          <Link href="/invoices/new" className="w-full md:w-auto">
            <Button className="w-full">Create New Invoice</Button>
          </Link>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>All Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
