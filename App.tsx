import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StarsCanvas from './components/canvas/StarsCanvas';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

type LocationState = {
    pathname: string;
    hash: string;
};

const getCurrentLocation = (): LocationState => {
    if (typeof window === 'undefined') {
        return { pathname: '/', hash: '' };
    }

    return {
        pathname: window.location.pathname,
        hash: window.location.hash
    };
};

const App: React.FC = () => {
    const [location, setLocation] = useState<LocationState>(() => getCurrentLocation());

    const handleLocationChange = useCallback(() => {
        setLocation(getCurrentLocation());
    }, []);

    // Effekt, der bei jeder Location-Änderung das Scroll-Verhalten steuert
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (location.hash) {
            const id = location.hash.substring(1);
            const timeoutId = window.setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            return () => window.clearTimeout(timeoutId);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
        return undefined;
    }, [location]);

    const navigate = useCallback(
        (href: string) => {
            if (typeof window === 'undefined') {
                return;
            }

            const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

            // Zerlegt den href in Pfad und Hash für eine korrekte Zustandsaktualisierung
            const url = new URL(href, window.location.origin);
            const destination = `${url.pathname}${url.search}${url.hash}`;

            if (destination !== currentHref) {
                window.history.pushState({}, '', destination);
            }
            handleLocationChange();
        },
        [handleLocationChange]
    );

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleGlobalClick = (event: MouseEvent) => {
            if (event.defaultPrevented) {
                return;
            }

            const target = event.target as Element | null;
            const anchor = target?.closest('a');

            if (anchor && anchor.href && anchor.target !== '_blank') {
                const destination = new URL(anchor.href);
                if (destination.origin === window.location.origin) {
                    event.preventDefault();
                    const targetHref = `${destination.pathname}${destination.search}${destination.hash}`;
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
            <main>{renderPage()}</main>
            <Footer />
        </div>
    );
};

export default App;
