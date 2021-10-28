import {PropsWithChildren} from 'react';

interface Props { background?: string; }
type ContainerProps = PropsWithChildren<Props>;

export default function Container({children, background = `shadow`}: ContainerProps) {
  return <div className={`container bg-${background}`}>{children}</div>
}
