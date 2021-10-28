import {PropsWithChildren} from 'react';

interface Props {size?: string, className?: string}
type ColumnProps =  PropsWithChildren<Props>;

export default function Column({children, size, className = ``}: ColumnProps) {
  return <div className={`col${ size ? `-${size}` : ``} ${className}`}>{children}</div>
}
