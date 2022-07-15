import {PropsWithChildren} from 'react';

interface Props {size?: number, className?: string; rounded?: boolean}
type ColumnProps =  PropsWithChildren<Props>;

export default function Column({children, size, className = ``, rounded = true}: ColumnProps) {
  return <div className={`col${ size ? `-${size}` : ``} ${className} ${rounded ? `rounded` : ``}`}>{children}</div>
}
