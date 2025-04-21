'use client';

import { useEffect, useState } from 'react';
import styles from './TableOfContents.module.css';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContentsClient() {
    const [activeId, setActiveId] = useState<string>('');

    // Extract headings from the data attribute
    const getHeadings = (): Heading[] => {
        const tocList = document.querySelector(`.${styles.tocList}`);
        if (!tocList) return [];

        const headingsData = tocList.getAttribute('data-headings');
        if (!headingsData) return [];

        try {
            return JSON.parse(headingsData);
        } catch (e) {
            console.error('Failed to parse headings data', e);
            return [];
        }
    };

    // Observe headings visibility to highlight active TOC item
    useEffect(() => {
        const headings = getHeadings();
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -80% 0px',
                threshold: 0,
            }
        );

        // Observe all heading elements
        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Add event listeners to TOC buttons
    useEffect(() => {
        const handleTocItemClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (!target.matches(`.${styles.tocLink}`)) return;

            const id = target.getAttribute('data-target-id');
            if (!id) return;

            const element = document.getElementById(id);
            if (element) {
                // Get the element's position
                const elementPosition = element.getBoundingClientRect().top;
                // Get the current scroll position
                const offsetPosition = elementPosition + window.pageYOffset - 40;

                // Scroll to the adjusted position
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                setActiveId(id);
                e.preventDefault();
            }
        };

        // Add event listener to the TOC list
        const tocList = document.querySelector(`.${styles.tocList}`);
        if (tocList) {
            tocList.addEventListener('click', handleTocItemClick);
        }

        return () => {
            if (tocList) {
                tocList.removeEventListener('click', handleTocItemClick);
            }
        };
    }, []);

    // Update active class on TOC items
    useEffect(() => {
        if (!activeId) return;

        // Remove active class from all items
        document.querySelectorAll(`.${styles.tocItem}`).forEach((item) => {
            item.classList.remove(styles.active);
        });

        // Add active class to current item
        const activeItem = document.querySelector(`[data-heading-id="${activeId}"]`);
        if (activeItem) {
            activeItem.classList.add(styles.active);
        }
    }, [activeId]);

    return null; // This component only adds interactivity, no rendering
} 