"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { Lock } from "lucide-react"; // Import Lock icon

const passwordSchema = z
  .object({
    oldPassword: z.string().min(6, "Old password must be at least 6 characters"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords do not match",
    path: [
      "confirmPassword"
    ],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function ChangePasswordForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = async (data: PasswordFormValues) => {
    setLoading(true);
    // Simulate API call to change password
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Password changed:", data);
    toast({
      title: "Password Changed",
      description: "Your password has been successfully changed.",
    });
    reset();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <p className="text-sm text-muted-foreground mb-4">Update your password.</p>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="oldPassword">Old Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="oldPassword" type="password" {...register("oldPassword")} disabled={loading} className="pl-9 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
          </div>
          {errors.oldPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.oldPassword.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="newPassword" type="password" {...register("newPassword")} disabled={loading} className="pl-9 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              disabled={loading}
              className="pl-9 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>
      <Button type="submit" disabled={loading} className="mt-6 w-full sm:w-auto bg-primary hover:bg-primary/90 transition-colors duration-200">
        {loading ? "Changing..." : "Change Password"}
      </Button>
    </form>
  );
}
