import {PropsWithChildren} from 'react';

interface Props {size?: string}
type ColumnProps =  PropsWithChildren<Props>;

export default function Column({children, size}: ColumnProps) {
  return <div className={`col${ size ? `-${size}` : ``}`}>{children}</div>
}
