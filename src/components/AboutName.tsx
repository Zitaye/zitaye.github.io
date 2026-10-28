import { useEffect, useState } from 'react';
import FoldText from './FoldText';
export default function AboutName() {
  const [visible, setVisible] = useState(() => document.body.dataset.page === 'about');
  useEffect(() => {
    const update = (event: Event) => setVisible((event as CustomEvent<string>).detail === 'about');
    window.addEventListener('portfolio:routechange', update);
    return () => window.removeEventListener('portfolio:routechange', update);
  }, []);
  return visible ? <FoldText text="Zita Ye" splitBy="char" hinge="top" foldStyle="paper" trigger="mount" hoverRefold duration={0.65} stagger={0.065} fontSize={100} style={{ '--fold-text-font-size': 'clamp(72px, 6.8vw, 118px)' }} fontWeight={400} creaseShading={0.45} refoldAngle={35} /> : null;
}
