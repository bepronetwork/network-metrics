import Column from '@components/column';
import VerticalRule from '@components/vertical-rule';
import {ReactNode} from 'react';

interface DataBitProp {
  caption: string;
  smallCaption: string;
  border?: boolean;
  colSize?: number;
  captionIcon?: ReactNode;
  smallCaptionIcon?: ReactNode;
  noPadding?: boolean;
  center?: boolean;
}
export default function DataBit({border = false, colSize = 3, caption = ``, smallCaption = ``, smallCaptionIcon = null, captionIcon = null, noPadding = true, center = true}: DataBitProp) {
  return <>
    <Column size={colSize} rounded={false} className={` ${noPadding ? `px-0` : `px-2`}`}>
      <div className={`d-flex justify-content-${center ? `center` : `start`}`}>
        <span className={`caption ${captionIcon ? `mr-1` : ``}`}>{caption}</span>
        {captionIcon}
      </div>
      <div className={`d-flex justify-content-${center ? `center` : `start`}`}>
        <span className={`caption-small color-gray ${smallCaptionIcon ? `mr-1` : ``}`}>{smallCaption}</span>
        {smallCaptionIcon}
      </div>
    </Column>
    {border && <VerticalRule /> || ``}
  </>


}
