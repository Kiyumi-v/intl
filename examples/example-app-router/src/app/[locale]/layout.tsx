import {ReactNode} from 'react';

export const dynamic = 'force-dynamic';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({children}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started

  return children;
}
