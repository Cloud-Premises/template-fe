import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - ",
  description: "Events - ",
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