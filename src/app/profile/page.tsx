
"use client";

import UserProfile from "@/components/UserProfile";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl shadow-2xl p-8 mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 transform transition-all duration-300 hover:scale-[1.01]">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
            <AvatarFallback className="text-6xl font-bold">JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl drop-shadow-md">John Doe</h1>
            <p className="text-xl opacity-90 drop-shadow-sm">john.doe@example.com</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <UserProfile />
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Change Password</CardTitle>
            </CardHeader>
            <CardContent>
              <ChangePasswordForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
