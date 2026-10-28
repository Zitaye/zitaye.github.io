import { useEffect, useState } from 'react';
import OptionWheel from './OptionWheel';
const labels = ['Home', 'About', 'Gallery', 'Contact'];
const routes = ['home', 'about', 'gallery', 'contact'];
function currentIndex() {
  const route = location.hash.slice(1);
  return Math.max(0, routes.indexOf(route === 'contacts' ? 'contact' : route));
}
export default function PortfolioNavigation() {
  const [selected, setSelected] = useState(currentIndex);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(() => matchMedia('(max-width: 760px)').matches);
  useEffect(() => {
    const sync = () => setSelected(currentIndex());
    const mq = matchMedia('(max-width: 760px)');
    const resize = () => setMobile(mq.matches);
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('portfolio:routechange', sync);
    window.addEventListener('keydown', escape);
    mq.addEventListener('change', resize);
    return () => { window.removeEventListener('portfolio:routechange', sync); window.removeEventListener('keydown', escape); mq.removeEventListener('change', resize); };
  }, []);
  return <div className={`portfolio-navigation${open ? ' is-open' : ''}`}>
    <button className="navigation-toggle" type="button" aria-expanded={open} aria-controls="page-wheel" onClick={() => setOpen(v => !v)}>Explore <span>{labels[selected]}</span><span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <div className="wheel-panel" id="page-wheel" inert={mobile && !open}>
      <p className="navigation-caption">ZITA YE / PORTFOLIO</p>
      <OptionWheel items={labels} value={selected} defaultSelected={selected} fontSize={mobile ? 1.9 : 2.8} spacing={1.5} inset={mobile ? 55 : 80} textColor="#776b5b" activeColor="#3e493d" tilt={9} curve={0.9} blur={0.45} fade={0.15} minOpacity={0.45} smoothing={200} onChange={(index: number) => {
        setSelected(index);
        if (currentIndex() !== index) window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: routes[index] }));
      }} />
      <p className="navigation-hint">Scroll, drag or select<br /><span>↑ ↓ to explore</span></p>
      <button className="navigation-done" type="button" onClick={() => setOpen(false)}>View {labels[selected]} ↗</button>
    </div>
  </div>;
}
