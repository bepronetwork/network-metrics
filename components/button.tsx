import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import renderLabelIcon from '@x-hooks/render-label-icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  background?: string;
  transparent?: boolean;
  label?: string;
  icon?: ReactNode;
  iconBefore?: boolean;
}

export default function Button({ children,
                                 label = ``,
                                 icon = null,
                                 iconBefore = true,
                                 color = 'white',
                                 background = `primary`,
                                 transparent,
                                 className = ``,
                                 ...rest
                               }: ButtonProps) {

  function getClass(): string {
    let append = className;

    if (transparent)
      background += ' bg-transparent'

    return `button color-${color} bg-${background} ${append}`
  }

  return <>
    <button className={getClass()} {...rest}>
      {label ? renderLabelIcon(label, icon, iconBefore) : children}
    </button>
  </>
}
