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
    <svg className="journal-doodle doodle-cake" viewBox="0 0 110 105" aria-hidden="true"><ellipse cx="55" cy="81" rx="43" ry="12" fill="#b9cfda"/><path d="M30 75 37 40h38l8 35c-13 10-39 10-53 0" fill="#e8d28e"/><path d="M37 44c-2-19 36-23 38-1-10 7-27 8-38 1" fill="#fff8ec" stroke="#b7a18b" strokeWidth="1.2"/><circle cx="58" cy="30" r="6" fill="#b9767b"/><path d="M59 25c0-7 6-10 8-10" fill="none" stroke="#8e8774" strokeWidth="2"/><path d="M41 53v15M52 55v17M65 54v17M75 53v14" stroke="#d4bc77" strokeWidth="1.5"/></svg>
    <svg className="journal-doodle doodle-flower" viewBox="0 0 85 120" fill="none" aria-hidden="true"><path d="M43 106V46M43 82c-25-1-23-18-23-18s23 0 23 18M43 94c22 0 24-17 24-17s-22-2-24 17" stroke="#a8b49b" strokeWidth="2"/><g fill="#efe8d1" stroke="#c5b894" strokeWidth="1"><ellipse cx="43" cy="26" rx="9" ry="16"/><ellipse cx="43" cy="51" rx="9" ry="16"/><ellipse cx="29" cy="39" rx="16" ry="9"/><ellipse cx="57" cy="39" rx="16" ry="9"/></g><circle cx="43" cy="39" r="8" fill="#d9bd7c"/></svg>
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
