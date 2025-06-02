import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About US - ",
  description: "About US - ",
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