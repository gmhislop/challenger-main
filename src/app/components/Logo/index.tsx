import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="w-32 fill-primary">
      <Image src="/logo.svg" alt="TicketSwap" width={200} height={32} />
    </div>
  );
}
