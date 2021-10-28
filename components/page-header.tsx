import styles from '@styles/components/page-header.module.scss';

const Titles = {
  '/metrics': `protocol metrics`,
  '/account': `my account`
}

export default function PageHeader() {
  return <div className={styles.pageHeader}>
    <div className="w-100 text-center pt-4">
      <div className="caption color-gray">the title</div>
      <h2 className="mt-3">bepro.network</h2>
    </div>
  </div>
}
