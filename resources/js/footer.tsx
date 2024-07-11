// resources/js/app.tsx
// import React from 'react';
import { createRoot } from 'react-dom/client';
import FooterSection from './Components/Footer';

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('footer-component');
    if (el) {
        const root = createRoot(el);
        root.render(<FooterSection />);
    }
});
