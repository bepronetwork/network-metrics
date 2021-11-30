import Button from '@components/button';
import Image from 'next/image';

import metamaskLogo from '@assets/metamask-logo.png';
import {ReactNode, useEffect, useState,} from 'react';
import useBEPRO from '@x-hooks/use-bepro';

export default function ConnectButton({children}: {children: ReactNode}) {
  const [show, setShow] = useState(false);
  const {currentAddress, login} = useBEPRO();

  useEffect(() => { setShow(!!currentAddress) }, [currentAddress])

  if (!currentAddress)
    return <Button color="primary"
                   background="white bg-white-hover"
                   label="connect"
                   iconBefore={false}
                   icon={<Image alt="metamask-logo" src={metamaskLogo} />}
                   onClick={login} />
  return <>{children}</>
}
