import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Protection légère: bloquer le clic droit et le drag sur les images
// (dissuasion uniquement, n’empêche pas les captures d’écran)
document.addEventListener('contextmenu', (e) => {
  const el = e.target;
  if (el && (el.tagName === 'IMG' || el.closest('.grid') || el.closest('.about-gallery'))) {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', (e) => {
  const el = e.target;
  if (el && el.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Filigrane à l'impression et sur tentative de sauvegarde
window.addEventListener('beforeprint', () => {
  document.body.classList.add('watermark-active');
});
window.addEventListener('afterprint', () => {
  document.body.classList.remove('watermark-active');
});

document.addEventListener('keydown', (e) => {
  const key = e.key?.toLowerCase();
  const ctrlOrMeta = e.ctrlKey || e.metaKey;
  const isSave = ctrlOrMeta && key === 's';
  const isPrint = ctrlOrMeta && key === 'p';
  if (isSave || isPrint) {
    document.body.classList.add('watermark-active');
    // Retirer après un court délai si pas d'impression
    setTimeout(() => document.body.classList.remove('watermark-active'), 5000);
  }
});
