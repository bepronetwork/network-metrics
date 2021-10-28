import {PropsWithChildren} from 'react';

interface CircleProps {
  width: number;
  height: number;
  className?: string;
}

type Props = PropsWithChildren<CircleProps>

export default function Circle({width = 14, height = 14, children, className = ``}: Props) {
  function px(amount = 0) { return `${amount}px`}
  return <div style={{width: px(width), height: px(height), borderRadius: '100%'}} className={`d-flex justify-content-center align-items-center ${className}`}>{children}</div>
}
