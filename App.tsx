import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StarsCanvas from './components/canvas/StarsCanvas';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App: React.FC = () => {
    const [location, setLocation] = useState({
        pathname: window.location.pathname,
        hash: window.location.hash
    });

    const handleLocationChange = useCallback(() => {
        setLocation({
            pathname: window.location.pathname,
            hash: window.location.hash
        });
    }, []);

    // Effekt, der bei jeder Location-Änderung das Scroll-Verhalten steuert
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            // Kurze Verzögerung, um sicherzustellen, dass die Sektion gerendert wurde
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
             // Ohne Anker zur Oberseite der Seite scrollen
             window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }, [location]);


    const navigate = useCallback((href: string) => {
        const currentHref = window.location.pathname + window.location.search + window.location.hash;
        
        // Zerlegt den href in Pfad und Hash für eine korrekte Zustandsaktualisierung
        const url = new URL(href, window.location.origin);
        const destination = url.pathname + url.search + url.hash;

        if (destination !== currentHref) {
            window.history.pushState({}, '', destination);
        }
        handleLocationChange();
    }, [handleLocationChange]);

    useEffect(() => {
        const handleGlobalClick = (event: MouseEvent) => {
            if (event.defaultPrevented) return;

            const target = event.target as Element;
            const anchor = target.closest('a');
            
            if (anchor && anchor.href && anchor.target !== '_blank') {
                const destination = new URL(anchor.href);
                if (destination.origin === window.location.origin) {
                    event.preventDefault();
                    const targetHref = destination.pathname + destination.search + destination.hash;
                    navigate(targetHref);
                }
            }
        };

        window.addEventListener('popstate', handleLocationChange);
        document.addEventListener('click', handleGlobalClick);
        
        handleLocationChange(); 

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            document.removeEventListener('click', handleGlobalClick);
        };
    }, [handleLocationChange, navigate]);

    const renderPage = () => {
        if (location.pathname.startsWith('/shop')) {
            return <ShopPage />;
        }
        return <HomePage />;
    };

    return (
        <div className="relative z-0 bg-[#050816]">
            <Header navigate={navigate} pathname={location.pathname} />
            <StarsCanvas />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;