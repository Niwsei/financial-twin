
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Register
        </h1>
        <RegisterForm />
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
