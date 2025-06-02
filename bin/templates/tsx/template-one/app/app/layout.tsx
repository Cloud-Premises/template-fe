import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function BoardOfDirectors({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}