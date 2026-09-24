import { MainLayout, Navbar } from "@/components/layout";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <MainLayout>
      <Navbar />
      {children}
    </MainLayout>
  );
}
