import styles from '@styles/components/page-header.module.scss';
import {Head} from 'next/document';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function PageHeader() {
  const router = useRouter();
  const title = (s) => `bepro.network | ${s}`;

  const Titles = {
    '/': `protocol metrics`,
    '/metrics': `protocol metrics`,
    '/account': `my account`,
  }

  function updateTitle() {
    document.title = title(Titles[router.pathname])
  }

  useEffect(updateTitle, [router.pathname])

  return <div className={styles.pageHeader}>
    <div className="w-100 text-center pt-4">
      <div className="caption color-gray">{Titles[router.pathname]}</div>
      <h2 className="mt-3">bepro.network</h2>
    </div>
  </div>
}
