'use client';
import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            if (elementsRef.current) {
                elementsRef.current.forEach((el) => {
                    if (el) observer.unobserve(el);
                });
            }
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    return addToRefs;
}
