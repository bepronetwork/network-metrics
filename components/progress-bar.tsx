import styles from '@styles/components/progress-bar.module.scss';
import {useEffect, useState} from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
}

export default function ProgressBar({value = 0, max = 0, label = ``}: ProgressBarProps) {
  const [percentage, setPercentage] = useState(0);

  function updatePercentage(_value = 0, _max = 0) {
    setPercentage((_value / _max) * 100);
  }

  useEffect(() => updatePercentage(value, max), [value, max])

  return <>
    <div className="d-flex justify-content-between align-items-center caption-small mb-2">
      <span className="color-white">{value} <span className="color-primary">{label}</span></span>
      <span className="color-gray">{max}</span>
    </div>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{width: `${percentage}%`}} data-width={percentage} />
    </div>
    <div className="color-primary caption-small w-100 text-center mt-2">{percentage}%</div>
  </>
}
