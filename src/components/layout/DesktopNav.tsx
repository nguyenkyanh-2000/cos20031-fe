import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";

function DesktopNav(): React.ReactElement {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        ></Link>

        <NavItem href="/" label="Dashboard">
          <Home className="h-5 w-5" />
        </NavItem>

        <NavItem href="/orders" label="Orders">
          <ShoppingCart className="h-5 w-5" />
        </NavItem>

        <NavItem href="/products" label="Products">
          <Package className="h-5 w-5" />
        </NavItem>

        <NavItem href="/customers" label="Customers">
          <Users2 className="h-5 w-5" />
        </NavItem>

        <NavItem href="/analytics" label="Analytics">
          <LineChart className="h-5 w-5" />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={"/"}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}

export default DesktopNav;
