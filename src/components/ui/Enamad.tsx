// components/EnamadBadge.tsx
import React from 'react';

const EnamadBadge: React.FC = () => {
    const enamadCode=`<img src="/img/pic/enamad.png" width="100" height="110"
onclick="window.open(&quot;https://trustseal.enamad.ir/?id=607162&Code=0WpceBjNz8EgX0Da8JvTtLRy3w41de3j;, &quot;Popup&quot;,&quot;toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30&quot;)"
alt="enamad">`
 
  return (
    <div style={{cursor:'pointer'}} dangerouslySetInnerHTML={{ __html: enamadCode }} />
  );
};

export default EnamadBadge;
