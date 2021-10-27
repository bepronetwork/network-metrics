import React, {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  background?: string;
  transparent?: boolean;
}

export default function Button({
                                 children,
                                 color = 'white',
                                 background = `primary`,
                                 transparent,
                                 className = ``,
                                 ...rest
                               }: ButtonProps) {

  function getClass(): string {
    let append = className;

    if (transparent)
      background += 'bg-transparent'

    return `button color-${color} bg-${background} ${append}`
  }

  return <>
    <button className={getClass()} {...rest}>{children}</button>
  </>
}
