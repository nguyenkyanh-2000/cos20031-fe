import { Outlet } from "react-router-dom";
import { TooltipProvider } from "../ui/tooltip";
import DesktopNav from "./DesktopNav";

function AppLayout(): React.ReactElement {
  return (
    <TooltipProvider>
      <main className="flex flex-col min-h-scree bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"></header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            <Outlet />
          </main>
        </div>
      </main>
    </TooltipProvider>
  );
}

export default AppLayout;
