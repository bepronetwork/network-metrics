interface WalletAddressProps {
  address: string;
  left?: number;
  right?: number;
  separator?: string;
}

export default function WalletAddress({address, left = 6, right = 4, separator = `...`}: WalletAddressProps) {
  return <span className="caption-small">{[address.substr(0, left), separator, address.substr(-right)].join(``)}</span>
}
