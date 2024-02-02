import { type ReactNode, type FunctionComponentElement } from 'react';

export interface Route {
  label: string;
  icon?: ReactNode;
  element: FunctionComponentElement<{}> | null;
  path: string;
}
