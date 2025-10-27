"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PortfolioScore = ({ score }: { score: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Score</CardTitle>
        <CardDescription>
          Your portfolio's health at a glance.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold text-primary">{score}</div>
          <div className="text-sm text-muted-foreground">
            out of 100
          </div>
        </div>
        <Progress value={score} />
        <p className="text-sm text-muted-foreground">
          Your portfolio is well-diversified and has a good risk-to-reward ratio.
        </p>
      </CardContent>
    </Card>
  );
};

export default PortfolioScore;
