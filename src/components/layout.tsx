import Topbar from "@/components/layout/topbar/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
       <Topbar />
       <div className="flex justify-center flex-1 p-4">
        <div className="w-full md:w-[80%] p-4">{children}</div>
      </div>
    </div>
  );
}
