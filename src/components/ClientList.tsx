
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { Pencil, Trash } from "lucide-react";


interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface ClientListProps {
  searchTerm: string;
}

export default function ClientList({ searchTerm }: ClientListProps) {
  const { toast } = useToast();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setClients([
        { id: "1", name: "Alice Smith", email: "alice@example.com", phone: "111-222-3333" },
        { id: "2", name: "Bob Johnson", email: "bob@example.com" },
        { id: "3", name: "Charlie Brown", email: "charlie@example.com", phone: "444-555-6666" },
      ]);
      setLoading(false);
    };
    fetchClients();
  }, []);

  const handleDelete = async (clientId: string) => {
    setLoading(true);
    // Simulate API call to delete client
    await new Promise((resolve) => setTimeout(resolve, 500));
    setClients((prevClients) => prevClients.filter((client) => client.id !== clientId));
    toast({
      title: "Client Deleted",
      description: `Client ${clientId} has been deleted.`, 
    });
    setLoading(false);
  };

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading clients...</div>;
  }

  if (filteredClients.length === 0) {
    return <p className="text-center text-gray-500">No clients found matching your search.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredClients.map((client) => (
        <Card key={client.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-lg">{client.name}</CardTitle>
              <CardDescription>{client.email}</CardDescription>
              {client.phone && <CardDescription>{client.phone}</CardDescription>}
            </div>
            <div className="flex gap-2">
              <Link href={`/clients/${client.id}/edit`}>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Pencil className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(client.id)}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Additional client details can go here if needed */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
