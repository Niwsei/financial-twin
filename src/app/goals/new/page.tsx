
import GoalForm from "@/components/GoalForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewGoalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Fill in the details to create a new financial goal.</p>
          <GoalForm />
        </CardContent>
      </Card>
    </div>
  );
}
