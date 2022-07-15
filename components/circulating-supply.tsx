import Column from '@components/column';
import ProgressBar from '@components/progress-bar';
import useGecko from '@x-hooks/use-gecko';
import {useEffect, useState} from 'react';

export default function CirculatingSupply() {
  const [circulatingSupply, setCirculatingSupply] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const {getCoinInfo} = useGecko();

  useEffect(() => {
    getCoinInfo()
      .then(({circulating_supply, total_supply}) => {
        setCirculatingSupply(circulating_supply);
        setTotalSupply(total_supply);
      })
  }, [])

  return <Column className="bg-shadow">
    <h4 className="mb-3 pb-1">Circulating Supply</h4>
    <ProgressBar value={circulatingSupply} max={totalSupply} label="$BEPRO"/>
  </Column>
}
