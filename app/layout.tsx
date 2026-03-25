import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HotelXpace | Luxury Hotel Booking",
    template: "%s | HotelXpace",
  },
  description: "Discover and book luxury hotels across Nigeria and beyond. Find your perfect stay with HotelXpace.",
  keywords: ["Hotel Booking", "Luxury Hotels", "Nigeria Hotels", "HotelXpace", "Travel", "Accommodation"],
  authors: [{ name: "Akerele Raymond" }],
  openGraph: {
    title: "HotelXpace | Luxury Hotel Booking",
    description: "Discover and book luxury hotels across Nigeria and beyond.",
    url: "https://hotelxpace.vercel.app", // update when ready
    siteName: "HotelXpace",
    images: [
      {
        url: "/images/hotelxpace-preview.png",
        width: 1200,
        height: 630,
        alt: "HotelXpace Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSerifText.variable}>
        {children}
        <Toaster
          position="top-right"
          richColors
          duration={4000}
          toastOptions={{
            className: "toast-with-progress",
          }}
        />
      </body>
    </html>
  );
}