'use client';

import Contact from '../components/Grid/Contact';
import Description from '../components/Grid/Description';
import LinkedIn from '../components/Grid/Linkedin';
import Spotify from '../components/Grid/Spotify';
import { useEffect, useState, useLayoutEffect } from 'react';
import { Layout, ReactGridLayoutProps, Responsive, WidthProvider } from 'react-grid-layout';
import { cn } from '@/app/lib/utils';

function usePageTransition(delay = 0) {
    const [isMounted, setIsMounted] = useState(false);
    useLayoutEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, delay);
    }, [delay]);
    return isMounted;
}

interface GridItem {
    i: string;
    component: () => JSX.Element;
}

 const gridItems: GridItem[] = [
    { i: 'description', component: Description },
    { i: 'linkedin', component: LinkedIn },
    { i: 'spotify', component: Spotify },
    { i: 'contact', component: Contact },
];

const ResponsiveGridLayout = WidthProvider(Responsive);

const lgLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 1 },
    { i: 'spotify', x: 2, y: 0, w: 1, h: 1 },
    { i: 'linkedin', x: 3, y: 0, w: 1, h: 1 },
    { i: 'contact', x: 0, y: 1, w: 4, h: 1 },
];

const mdLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'linkedin', x: 2, y: 0, w: 1, h: 1 },
    { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
    { i: 'contact', x: 2, y: 1, w: 2, h: 2 },
];

const smLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'linkedin', x: 0, y: 2, w: 1, h: 1 },
    { i: 'spotify', x: 1, y: 2, w: 1, h: 1 },
    { i: 'contact', x: 0, y: 3, w: 2, h: 1 },
];

interface GridLayoutProps extends ReactGridLayoutProps {
    lgLayout: Layout[];
    mdLayout: Layout[];
    smLayout: Layout[];
}

function GridLayout({ lgLayout, mdLayout, smLayout, className, children }: GridLayoutProps) {
    const [breakpoint, setBreakpoint] = useState('lg');
    const isMounted = usePageTransition();
    const breakpoints = { lg: 1199, md: 799, sm: 599, xs: 399, xxs: 0 };
    const cols = { lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 };
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 280) setBreakpoint('lg');
            else if (width > 180) setBreakpoint('md');
            else if (width > 164) setBreakpoint('sm');
            else if (width > 136) setBreakpoint('xs');
            else setBreakpoint('xxs');
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoints]);
    const responsiveProps = {
        layouts: { lg: lgLayout, md: mdLayout, sm: smLayout },
        cols,
        useCSSTransforms: false,  
        onBreakpointChange: (newBreakpoint: string) => {
            setBreakpoint(newBreakpoint);
        },
    };
    return (
        <section className={cn('pt-[100px] max-w-[1000px] mx-auto', className)}>
            <ResponsiveGridLayout style={{ opacity: isMounted ? 1 : 0, transform: isMounted ? 'translateY(0)' : 'translateY(48px)', transition: 'opacity 500ms, transform 500ms' }} margin={[16, 16]} {...responsiveProps}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}

export default function About() {
    return (
        <main className='py-8 w-full'>
            <GridLayout lgLayout={lgLayout} mdLayout={mdLayout} smLayout={smLayout}>
                {gridItems.map((item) => (
                    <div key={item.i}>{<item.component />}</div>
                ))}
            </GridLayout>
        </main>
    );
}
