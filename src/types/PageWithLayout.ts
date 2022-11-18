import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
