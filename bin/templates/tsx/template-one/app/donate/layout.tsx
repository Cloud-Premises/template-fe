import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate - ",
  description: "Donate - ",
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