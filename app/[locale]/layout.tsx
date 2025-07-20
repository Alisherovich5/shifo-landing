import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from 'react-toastify';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}>) {

  const locale = (await params).locale
  const messages = await getMessages()

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ToastContainer />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
