import useNumbers from '@x-hooks/use-numbers';

export default function useRenderNumber({nScale, value, currency, decimals}) {
  const {toNScale, numberToString} = useNumbers();

  return <>
    <span className="color-white">{!nScale ? numberToString(value, decimals) : toNScale(value)}</span>
    <span className="color-primary">{currency && ` ` + currency || ``}</span>
  </>
}
