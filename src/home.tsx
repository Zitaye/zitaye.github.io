import { createRoot } from 'react-dom/client';
import DraggableCardDemo from '@/components/draggable-card-demo-2';
import PortfolioNavigation from '@/components/PortfolioNavigation';
import './home.css';
const container = document.getElementById('home-cards');
if (container) createRoot(container).render(<DraggableCardDemo />);
const navigation = document.getElementById('navigation-root');
if (navigation) createRoot(navigation).render(<PortfolioNavigation />);
