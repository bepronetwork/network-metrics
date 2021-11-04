import Circle from '@components/Circle';
import IconUSDC from '@icons/IconUSDC';
import Row from '@components/row';
import Column from '@components/column';
import DataBit from '@components/data-bit';
import VerticalRule from '@components/vertical-rule';

export interface MetricItem {
  caption: string;
  smallCaption: string;
}

interface MetricProps {
  title: string;
  metrics: MetricItem[];
}

export function makeMetricItem(caption = ``, smallCaption = ``): MetricItem {
  return ({caption, smallCaption});
}

export default function Metric({title = ``, metrics = []}: MetricProps) {

  function renderMetric({caption, smallCaption}: MetricItem, i: number) {
    return <DataBit key={i} border={i < metrics.length - 1} caption={caption} smallCaption={smallCaption} />
  }

  return <Column className="bg-dark-gray">
    <h4 className="d-flex justify-content-between color-white mb-3">
      <span>{title}</span>
      <Circle className="color-white bg-primary" width={24} height={24}><IconUSDC /></Circle>
    </h4>
    <Row>
      {metrics.map(renderMetric)}
    </Row>
  </Column>
}
