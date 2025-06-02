import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US - ",
  description: "Contact US - ",
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