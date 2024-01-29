import { type ReactNode, type FunctionComponentElement } from 'react';

export interface RouteType {
  label: string;
  icon?: ReactNode;
  element: FunctionComponentElement<{}> | null;
  path: string;
}
