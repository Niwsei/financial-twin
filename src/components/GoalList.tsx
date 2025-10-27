
"use client";



import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { Pencil, Trash } from "lucide-react";
import { Progress } from "./ui/progress";

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  dueDate: string;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function GoalList() {
  const { toast } = useToast();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoals = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setGoals([
        { id: "1", name: "New Car", targetAmount: 30000, currentAmount: 10000, dueDate: "2025-12-31" },
        { id: "2", name: "Down Payment", targetAmount: 50000, currentAmount: 25000, dueDate: "2026-06-30" },
      ]);
      setLoading(false);
    };
    fetchGoals();
  }, []);

  const handleDelete = async (goalId: string) => {
    setLoading(true);
    // Simulate API call to delete goal
    await new Promise((resolve) => setTimeout(resolve, 500));
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
    toast({
      title: "Goal Deleted",
      description: `Goal ${goalId} has been deleted.`, 
    });
    setLoading(false);
  };

  if (loading) {
    return <div>Loading goals...</div>;
  }

  if (goals.length === 0) {
    return <p className="text-center text-gray-500">No goals found. Start by adding a new goal!</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {goals.map((goal) => {
        const progress = (goal.currentAmount / goal.targetAmount) * 100;
        return (
          <Card key={goal.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-lg">{goal.name}</CardTitle>
              <CardDescription>{`Progress: ${progress.toFixed(2)}%`}</CardDescription>
            </div>
            <div className="flex gap-2">
                <Link href={`/goals/${goal.id}/edit`}>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(goal.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">Target: ${goal.targetAmount.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Current: ${goal.currentAmount.toLocaleString()}</p>
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground">Due: {formatDate(goal.dueDate)}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
