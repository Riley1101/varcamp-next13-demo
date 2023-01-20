import { AdminHeader } from "@/components/AdminHeader";
import type { PageProps } from "@/types";

const AdminLayout = ({ children }: PageProps) => {
  return (
    <>
      <AdminHeader></AdminHeader>
      <div className="mt-4">{children}</div>
    </>
  );
};
export default AdminLayout;
