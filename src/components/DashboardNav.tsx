import { Button } from "../components/ui/button";
import { TrendingUp, Bell, User } from "lucide-react";
import Link from "next/link";

const DashboardNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>FinTwin</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            {/*
              Use Next.js `Link` instead of plain anchor tags for navigation.  This
              enables client-side routing and avoids scrolling to non-existent
              anchors.  The Trading and Analytics pages are defined under
              `/trading` and `/analytics`, respectively.
            */}
            <Link href="/trading" className="text-sm font-medium hover:text-primary transition-colors">
              Trading
            </Link>
            <Link href="/analytics" className="text-sm font-medium hover:text-primary transition-colors">
              Analytics
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
