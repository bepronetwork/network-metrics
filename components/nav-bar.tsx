import React from 'react';
import styles from '@styles/components/nav-bar.module.scss';
import BeproLogo from '@icons/bepro-logo';
import IconLinkExternal from '@icons/IconLinkExternal';
import LinkButton from '@components/link-button';
import WalletInformation from '@components/wallet-information';

export default function NavBar() {


  return <div className={styles.navbar}>
    <div className={styles.logo}><BeproLogo white={true}/></div>
    <div className="d-flex justify-content-center align-items-center ml-4">
      <LinkButton label="Metrics" href="/metrics"
                  buttonProps={{color: `white-op-30 color-white-hover`, background: `body`}}/>

      <LinkButton label="Metrics" href="/metrics"
                  buttonProps={{color: `white-op-30 color-white-hover`, background: `body`}}/>

      <LinkButton label="App" href="https://development.bepro.network" blank={true}
                  buttonProps={{
                    color: `white-op-30 color-white-hover`,
                    background: `body`,
                    icon: <IconLinkExternal/>,
                    iconBefore: false
                  }}/>
    </div>
    <div className="ml-auto">
      <WalletInformation />
    </div>
  </div>
}
