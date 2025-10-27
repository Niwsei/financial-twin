
"use client";

import { useState } from "react";
import ClientList from "@/components/ClientList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Clients</h1>
            <p className="text-sm text-muted-foreground">Manage your client relationships and their financial profiles.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Input
              placeholder="Search clients..."
              className="w-full sm:max-w-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link href="/clients/new" className="w-full sm:w-auto">
              <Button className="w-full">Add New Client</Button>
            </Link>
          </div>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>All Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <ClientList searchTerm={searchTerm} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
