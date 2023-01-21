import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-theme-bg">
        <div className="text-theme-body  grid rounded-md grid-cols-1 md:grid-cols-[350px_1fr] md:h-screen ">
          <Sidebar />
          <div className="w-full h-full p-4">
            <div className="h-full mx-auto md:w-3/5">
              <Breadcrumb />
              <fieldset className="p-4 border border-gray-800 rounded-md min-h-[500px] ">
                {children}
              </fieldset>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
