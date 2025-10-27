
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
import { Goal as GoalIcon, DollarSign, Calendar } from "lucide-react"; // Import icons

const goalFormInputSchema = z.object({
  name: z.string().min(1, "Goal name is required"),
  targetAmount: z.string().min(1, "Target amount is required"),
  currentAmount: z.string().min(0, "Current amount cannot be negative"),
  dueDate: z.string().min(1, "Due date is required"),
});

const goalSchema = z.object({
  name: z.string().min(1, "Goal name is required"),
  targetAmount: z.number().min(0.01, "Target amount must be greater than 0"),
  currentAmount: z.number().min(0, "Current amount cannot be negative"),
  dueDate: z.string().min(1, "Due date is required"),
});

type GoalFormInput = z.infer<typeof goalFormInputSchema>;
type GoalFormValues = z.infer<typeof goalSchema>;

interface GoalFormProps {
  goalId?: string;
}

export default function GoalForm({ goalId }: GoalFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GoalFormInput>({
    resolver: zodResolver(goalFormInputSchema),
  });

  useEffect(() => {
    if (goalId) {
      const fetchGoal = async () => {
        setLoading(true);
        // Simulate API call to fetch goal data
        await new Promise((resolve) => setTimeout(resolve, 500));
        reset({
          name: "Fetched Goal Name",
          targetAmount: "10000",
          currentAmount: "2000",
          dueDate: "2024-12-31",
        });
        setLoading(false);
      };
      fetchGoal();
    }
  }, [goalId, reset]);

  const onSubmit = async (data: GoalFormInput) => {
    const parsedData = goalSchema.parse({
      ...data,
      targetAmount: Number(data.targetAmount),
      currentAmount: Number(data.currentAmount),
    });
    setLoading(true);
    // Simulate API call to create or update goal
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Goal data:", parsedData);
    toast({
      title: goalId ? "Goal Updated" : "Goal Created",
      description: `Goal ${parsedData.name} has been ${goalId ? "updated" : "created"}.`,
    });
    setLoading(false);
    router.push("/goals");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="name">Goal Name <span className="text-red-500">*</span></Label>
          <div className="relative">
            <GoalIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="name" type="text" {...register("name")} disabled={loading} className="pl-9" />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetAmount">Target Amount <span className="text-red-500">*</span></Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="targetAmount" type="number" step="0.01" {...register("targetAmount")} disabled={loading} className="pl-9" />
          </div>
          {errors.targetAmount && <p className="text-red-500 text-sm mt-1">{errors.targetAmount.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentAmount">Current Amount <span className="text-red-500">*</span></Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="currentAmount" type="number" step="0.01" {...register("currentAmount")} disabled={loading} className="pl-9" />
          </div>
          {errors.currentAmount && <p className="text-red-500 text-sm mt-1">{errors.currentAmount.message}</p>}
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
        {loading ? "Saving..." : goalId ? "Update Goal" : "Create Goal"}
      </Button>
    </form>
  );
}
