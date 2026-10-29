import { useState } from 'react';
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card';

export default function DraggableCardDemo() {
  const [version, setVersion] = useState(0);
  const items = [
    { title: 'A little companion', image: 'img/zz-1.png', className: 'absolute rotate-[-14deg]', background: 'bg-[#e0e1ef]' },
    { title: 'Design for the everyday', image: 'img/posters-1.png', className: 'absolute rotate-[11deg]', background: 'bg-white' },
    { title: 'Through my lens', image: 'img/photography-1.png', className: 'absolute rotate-[-8deg]', background: 'bg-white' },
    { title: 'Ideas into interfaces', image: 'img/web-1.png', className: 'absolute rotate-[17deg]', background: 'bg-white' },
    { title: 'Art & community', image: 'img/act-1.png', className: 'absolute rotate-[7deg]', background: 'bg-[#dfebf3]' },
    { title: 'Small things, big feelings', image: 'img/zz-1.png', className: 'absolute rotate-[-3deg]', background: 'bg-[#e0e1ef]' },
  ];
  return <>
    <div className="scrapbook-sticker sticker-note" aria-hidden="true">little things,<br />lovingly collected.</div>
    <div className="scrapbook-sticker sticker-seal" aria-hidden="true"><span>made of</span><strong>little<br />moments</strong><span>♡ ZY ♡</span></div>
    <svg className="scrapbook-sprig" viewBox="0 0 90 180" fill="none" aria-hidden="true"><path d="M45 170C24 120 67 73 46 12" stroke="#6f8060" strokeWidth="2"/><path d="M39 133C6 131 7 101 35 105M43 114C79 110 87 84 52 88M49 81C13 76 15 51 49 58M48 50C75 43 79 20 49 28" fill="#a5b194" stroke="#748767" strokeWidth="1"/></svg>
    <DraggableCardContainer key={version} className="journal-board relative flex min-h-0 h-[450px] md:h-[660px] w-full items-center justify-center overflow-clip">
      <div className="home-intro">
        <h1 id="hero-title" aria-label="Zita Ye"><span aria-hidden="true"><span className="name-cutout">Z</span><span className="name-cutout">i</span><span className="name-cutout">t</span><span className="name-cutout">a</span><span className="name-cutout">Y</span><span className="name-cutout">e</span></span></h1>
      </div>
      {items.map((item, index) => <DraggableCardBody key={item.title} className={`artwork-card artwork-card-${index} ${item.className} min-h-60 w-44 p-3 md:min-h-96 md:w-80 md:p-6`}>
        <img src={item.image} alt={item.title} draggable={false} className={`pointer-events-none relative z-10 h-40 w-full object-contain md:h-80 md:w-80 ${item.background}`} />
        <span className="journal-card-index" aria-hidden="true">no. {String(index + 1).padStart(2, '0')}</span>
        <h3 className="mt-4 text-center text-sm font-bold text-neutral-700 md:text-2xl dark:text-neutral-300">{item.title}</h3>
      </DraggableCardBody>)}
    </DraggableCardContainer>
    <div className="card-instructions"><p>Drag the cards. Discover my little world.<span>Keyboard: focus a card and use the arrow keys.</span></p><button type="button" onClick={() => setVersion(v => v + 1)}>Reset cards ↺</button></div>
  </>;
}
