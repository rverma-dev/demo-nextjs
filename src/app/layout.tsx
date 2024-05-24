import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import getServerSession from 'next-auth';
import SessionProvider from '@/app/common/SessionProvider';
import { authOptions } from '@/app/auth';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <SessionProvider session={session}>{children}</SessionProvider> */}
      </body>
    </html>
  );
}
