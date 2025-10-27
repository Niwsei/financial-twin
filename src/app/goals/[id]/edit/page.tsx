
"use client";

import GoalForm from "@/components/GoalForm";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EditGoalPage() {
  const params = useParams();
  const goalId = params.id as string;

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Goal {goalId}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Update the details for your financial goal.</p>
          <GoalForm goalId={goalId} />
        </CardContent>
      </Card>
    </div>
  );
}
