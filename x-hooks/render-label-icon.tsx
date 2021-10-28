import React, {ReactNode} from 'react';

export default function renderLabelIcon(label = ``, icon: ReactNode = null, iconBefore = false) {
  return <>{iconBefore && icon || ``}<span>{label}</span>{!iconBefore && icon || ``}</>
}
