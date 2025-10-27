"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const GamificationSystem = ({ level, xp }: { level: number; xp: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Level</CardTitle>
        <CardDescription>
          Complete tasks to level up and earn rewards.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Level {level}</div>
          <div className="text-sm text-muted-foreground">
            {xp} / 100 XP
          </div>
        </div>
        <Progress value={xp} />
      </CardContent>
    </Card>
  );
};

export default GamificationSystem;
