import Image from 'next/image';
import pageHeader from '@assets/polkaheader-min.png';

const Titles = {
  '/metrics': `protocol metrics`,
  '/account': `my account`
}

export default function PageHeader() {
  return <div className="text-center position-relative">
    <div className="position-absolute w-100" style={{top: '80px', zIndex: 10}}>
      <div className="caption color-gray">the title</div>
      <h2 className="mt-3">bepro.network</h2>
    </div>
    <Image src={pageHeader} />
  </div>
}
