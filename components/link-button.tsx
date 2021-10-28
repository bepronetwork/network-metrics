import Link from 'next/link';
import {ButtonProps} from '@components/button';
import renderLabelIcon from '@x-hooks/render-label-icon';

interface LinkButtonProps {
  label: string;
  href: string;
  passHref?: boolean;
  buttonProps?: ButtonProps;
  blank?: boolean;
}

export default function LinkButton({
                                     label = ``,
                                     href = `/`,
                                     passHref = true,
                                     buttonProps = {},
                                     blank = false
                                   }: LinkButtonProps) {

  return <Link href={href} passHref={passHref}>
    <a target={blank ? `_blank` : `_self`}
       className={`button color-${buttonProps?.color} bg-${buttonProps?.background}`}>
      {renderLabelIcon(label, buttonProps?.icon, buttonProps?.iconBefore)}
    </a>
  </Link>
}
