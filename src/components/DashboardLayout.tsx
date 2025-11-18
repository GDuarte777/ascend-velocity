import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Trophy,
  BarChart3,
  Calendar,
  Settings,
  Target,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/dashboard/affiliates", label: "Afiliadas", icon: Users },
    { to: "/dashboard/gamification", label: "Gamificação", icon: Trophy },
    { to: "/dashboard/ranking", label: "Ranking", icon: BarChart3 },
    { to: "/dashboard/calendar", label: "Calendário", icon: Calendar },
    { to: "/dashboard/missions", label: "Missões", icon: Target },
    { to: "/dashboard/achievements", label: "Conquistas", icon: Award },
    { to: "/dashboard/settings", label: "Configurações", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-24">
        {children}
      </main>

      {/* Dock Navigation */}
      <div className="fixed bottom-4 left-0 right-0 z-50">
        <Dock className="items-end pb-3">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <DockItem
                className={cn(
                  "aspect-square rounded-full transition-colors",
                  isActive(item.to)
                    ? "bg-gradient-to-br from-neon-blue to-neon-violet"
                    : "bg-gray-200 dark:bg-neutral-800"
                )}
              >
                <DockLabel>{item.label}</DockLabel>
                <DockIcon>
                  <item.icon
                    className={cn(
                      "h-full w-full",
                      isActive(item.to)
                        ? "text-white"
                        : "text-neutral-600 dark:text-neutral-300"
                    )}
                  />
                </DockIcon>
              </DockItem>
            </Link>
          ))}
        </Dock>
      </div>
    </div>
  );
};
