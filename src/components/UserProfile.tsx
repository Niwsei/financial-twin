
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { Mail, User } from "lucide-react"; // Import icons

const profileSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(1, "Full name is required"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function UserProfile() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset({
        email: "user@example.com",
        fullName: "John Doe",
      });
      setLoading(false);
    };
    fetchUserProfile();
  }, [reset]);

  const onSubmit = async (data: ProfileFormValues) => {
    setLoading(true);
    // Simulate API call to update profile
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Profile updated:", data);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <p className="text-sm text-muted-foreground mb-4">Update your account's profile information and email address.</p>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="email" type="email" {...register("email")} disabled={loading} className="pl-9 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="fullName" type="text" {...register("fullName")} disabled={loading} className="pl-9 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
          </div>
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={loading} className="mt-6 w-full sm:w-auto bg-primary hover:bg-primary/90 transition-colors duration-200">
        {loading ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  );
}
