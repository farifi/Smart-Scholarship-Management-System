import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout role="APPLICANT">
      {children}
    </DashboardLayout>
  );
}