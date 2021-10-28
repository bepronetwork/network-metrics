import Link from 'next/link';
import Button, {ButtonProps} from '@components/button';

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
                                     blank = false}: LinkButtonProps) {

  function renderButton(label = ``, rest: ButtonProps) {
    return <Button {...rest}>{label}</Button>
  }

  function renderAnchor(label = ``, {color, background, icon}: ButtonProps) {
    return <a target="_blank" className={`button color-${color} bg-${background}`}><span>{label}</span> {icon}</a>
  }

  return <Link href={href} passHref={passHref}>{!blank && renderButton(label, buttonProps) || renderAnchor(label, buttonProps)}</Link>
}
