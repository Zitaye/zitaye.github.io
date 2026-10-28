import { createRoot } from 'react-dom/client';
import DraggableCardDemo from '@/components/draggable-card-demo-2';
import './home.css';
const container = document.getElementById('home-cards');
if (container) createRoot(container).render(<DraggableCardDemo />);
