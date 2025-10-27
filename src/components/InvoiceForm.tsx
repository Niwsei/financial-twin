
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { User, DollarSign, Calendar } from "lucide-react"; // Import icons

const invoiceFormInputSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  amount: z.string().min(1, "Amount is required"),
  status: z.enum(["pending", "paid", "overdue"]),
  dueDate: z.string().min(1, "Due date is required"),
});

const invoiceSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  amount: z.number().min(0.01, "Amount must be greater than 0"),
  status: z.enum(["pending", "paid", "overdue"]),
  dueDate: z.string().min(1, "Due date is required"),
});

type InvoiceFormInput = z.infer<typeof invoiceFormInputSchema>;
type InvoiceFormValues = z.infer<typeof invoiceSchema>;

interface InvoiceFormProps {
  invoiceId?: string;
}

export default function InvoiceForm({ invoiceId }: InvoiceFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InvoiceFormInput>({
    resolver: zodResolver(invoiceFormInputSchema),
  });

  useEffect(() => {
    if (invoiceId) {
      const fetchInvoice = async () => {
        setLoading(true);
        // Simulate API call to fetch invoice data
        await new Promise((resolve) => setTimeout(resolve, 500));
        reset({
          clientName: "Fetched Client",
          amount: "1200",
          status: "pending",
          dueDate: "2024-11-30",
        });
        setLoading(false);
      };
      fetchInvoice();
    }
  }, [invoiceId, reset]);

  const onSubmit = async (data: InvoiceFormInput) => {
    const parsedData = invoiceSchema.parse({
      ...data,
      amount: Number(data.amount),
    });
    setLoading(true);
    // Simulate API call to create or update invoice
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Invoice data:", parsedData);
    toast({
      title: invoiceId ? "Invoice Updated" : "Invoice Created",
      description: `Invoice for ${parsedData.clientName} has been ${invoiceId ? "updated" : "created"}.`,
    });
    setLoading(false);
    router.push("/invoices");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="clientName">Client Name <span className="text-red-500">*</span></Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="clientName" type="text" {...register("clientName")} disabled={loading} className="pl-9" />
          </div>
          {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount <span className="text-red-500">*</span></Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="amount" type="number" step="0.01" {...register("amount")} disabled={loading} className="pl-9" />
          </div>
          {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status <span className="text-red-500">*</span></Label>
          <Select onValueChange={(value) => setValue("status", value as "pending" | "paid" | "overdue")} defaultValue={invoiceId ? "pending" : undefined}>
            <SelectTrigger className="pl-9">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date <span className="text-red-500">*</span></Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="dueDate" type="date" {...register("dueDate")} disabled={loading} className="pl-9" />
          </div>
          {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={loading} className="mt-6 w-full sm:w-auto">
        {loading ? "Saving..." : invoiceId ? "Update Invoice" : "Create Invoice"}
      </Button>
    </form>
  );
}
