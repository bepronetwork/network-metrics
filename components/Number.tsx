import useRenderNumber from '@x-hooks/use-render-number';

interface NumberProps {
  value: number;
  nScale?: boolean;
  currency?: string;
  full?: boolean;
  decimals?: number;
}

export default function Number({value, nScale, currency, decimals = 2}: NumberProps) {
  return useRenderNumber({nScale, value, currency, decimals});
}
