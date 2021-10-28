import Column from '@components/column';
import VerticalRule from '@components/vertical-rule';
interface DataBitProp {
  caption: string;
  smallCaption: string;
  border?: boolean;
  colSize?: number;
}
export default function DataBit({border = false, colSize = 3, caption = ``, smallCaption = ``}: DataBitProp) {
  return <>
    <Column size={colSize} className={`text-center py-2 px-0`}>
      <div className="caption">{caption}</div>
      <div className="caption-small color-gray">{smallCaption}</div>
    </Column>
    {border && <VerticalRule /> || ``}
  </>


}
