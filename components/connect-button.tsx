import Button from '@components/button';
import Image from 'next/image';

import metamaskLogo from '@assets/metamask-logo.png';
import {ReactNode, useContext} from 'react';
import {ApplicationContext} from '@contexts/application';

export default function ConnectButton({children}: {children: ReactNode}) {
  const {state: {currentAddress},} = useContext(ApplicationContext);

  if (!currentAddress)
    return <Button color="primary"
                   background="white bg-white-hover"
                   label="connect"
                   iconBefore={false}
                   icon={<Image src={metamaskLogo} />} />
  return <>{children}</>
}
