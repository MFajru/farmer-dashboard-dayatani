import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileSidebar = ({
  children,
  sidebarContent: SidebarContent,
  mobileDashboardHeader: MobileDashboardHeader,
}: {
  children: React.ReactNode;
  sidebarContent: () => JSX.Element;
  mobileDashboardHeader?: () => JSX.Element;
}) => {
  return (
    <>
      <Sheet>
        <div className="mt-5 flex md:hidden w-full justify-between">
          <div className="flex flex-1">
            {MobileDashboardHeader && <MobileDashboardHeader />}
          </div>
          <SheetTrigger>
            <MenuIcon size={24} />
          </SheetTrigger>
        </div>
        <SheetContent side="left">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      {children}
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

const DesktopSidebar = ({
  children,
  sidebarContent: SidebarContent,
}: {
  children: React.ReactNode;
  sidebarContent: () => JSX.Element;
}) => {
  return (
    // style used from here -> https://github.com/shadcn-ui/ui/blob/1cf5fad881b1da8f96923b7ad81d22d0aa3574b9/apps/www/app/docs/layout.tsx#L12
    <div className="mx-auto w-full min-h-screen flex flex-col lg:flex-row items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed z-30 -ml-2 hidden h-full w-full shrink-0 border-r border-[#C2CFD6] md:sticky md:block">
        <div className="h-full py-6 pl-8 pr-6 lg:py-8">
          <SidebarContent />
        </div>
      </aside>
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

export const Sidebar = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  sidebarContent: () => JSX.Element;
  mobileDashboardHeader?: () => JSX.Element;
}) => {
  return (
    <DesktopSidebar {...props}>
      <MobileSidebar {...props}>{children}</MobileSidebar>
    </DesktopSidebar>
  );
};
