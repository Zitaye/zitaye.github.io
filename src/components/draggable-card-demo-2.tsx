import { useState } from 'react';
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card';

export default function DraggableCardDemo() {
  const [version, setVersion] = useState(0);
  const items = [
    { title: 'A little companion', image: 'img/zz-1.png', className: 'absolute rotate-[-14deg]', background: 'bg-[#e0e1ef]' },
    { title: 'Design for the everyday', image: 'img/posters-1.png', className: 'absolute rotate-[11deg]', background: 'bg-white' },
    { title: 'Through my lens', image: 'img/photography-1.png', className: 'absolute rotate-[-8deg]', background: 'bg-white' },
    { title: 'Ideas into interfaces', image: 'img/web-1.png', className: 'absolute rotate-[17deg]', background: 'bg-white' },
    { title: 'Playful by nature', image: 'img/cat-1.png', className: 'absolute rotate-[-19deg]', background: 'bg-[#e8e2f2]' },
    { title: 'Art & community', image: 'img/act-1.png', className: 'absolute rotate-[7deg]', background: 'bg-[#dfebf3]' },
    { title: 'Small things, big feelings', image: 'img/zz-1.png', className: 'absolute rotate-[-3deg]', background: 'bg-[#e0e1ef]' },
  ];
  return <>
    <DraggableCardContainer key={version} className="relative flex min-h-0 h-[450px] md:h-[660px] w-full items-center justify-center overflow-clip">
      <div className="home-intro">
        <h1 id="hero-title">Zita <em>Ye.</em></h1>
      </div>
      {items.map((item, index) => <DraggableCardBody key={item.title} className={`artwork-card artwork-card-${index} ${item.className} min-h-60 w-44 p-3 md:min-h-96 md:w-80 md:p-6`}>
        <img src={item.image} alt={item.title} draggable={false} className={`pointer-events-none relative z-10 h-40 w-full object-contain md:h-80 md:w-80 ${item.background}`} />
        <h3 className="mt-4 text-center text-sm font-bold text-neutral-700 md:text-2xl dark:text-neutral-300">{item.title}</h3>
      </DraggableCardBody>)}
    </DraggableCardContainer>
    <div className="card-instructions"><p>Drag the cards. Discover my little world.<span>Keyboard: focus a card and use the arrow keys.</span></p><button type="button" onClick={() => setVersion(v => v + 1)}>Reset cards ↺</button></div>
  </>;
}
