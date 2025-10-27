
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { User, Mail, Phone } from "lucide-react"; // Import icons

const clientSchema = z.object({
  name: z.string().min(1, "Client name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

type ClientFormValues = z.infer<typeof clientSchema>;

interface ClientFormProps {
  clientId?: string;
}

export default function ClientForm({ clientId }: ClientFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
  });

  useEffect(() => {
    if (clientId) {
      const fetchClient = async () => {
        setLoading(true);
        // Simulate API call to fetch client data
        await new Promise((resolve) => setTimeout(resolve, 500));
        reset({
          name: "Fetched Client Name",
          email: "fetched@example.com",
          phone: "555-123-4567",
        });
        setLoading(false);
      };
      fetchClient();
    }
  }, [clientId, reset]);

  const onSubmit = async (data: ClientFormValues) => {
    setLoading(true);
    // Simulate API call to create or update client
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Client data:", data);
    toast({
      title: clientId ? "Client Updated" : "Client Created",
      description: `Client ${data.name} has been ${clientId ? "updated" : "created"}.`,
    });
    setLoading(false);
    router.push("/clients");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="name">Client Name <span className="text-red-500">*</span></Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="name" type="text" {...register("name")} disabled={loading} className="pl-9" />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="email" type="email" {...register("email")} disabled={loading} className="pl-9" />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="phone" type="text" {...register("phone")} disabled={loading} className="pl-9" />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={loading} className="mt-6 w-full sm:w-auto">
        {loading ? "Saving..." : clientId ? "Update Client" : "Create Client"}
      </Button>
    </form>
  );
}
