'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === '/') return null;

    const pathSegments = pathname.split('/').filter(segment => segment);

    return (
        <nav aria-label="Breadcrumb" style={{ padding: '1rem 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            <div className="container">
                <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '0.5rem' }}>
                    <li>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', hover: { color: 'var(--color-primary)' } }}>
                            <Home size={16} />
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;
                        const title = segment.replace(/-/g, ' ').toUpperCase();

                        return (
                            <li key={segment} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ChevronRight size={14} color="#ccc" />
                                {isLast ? (
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }} aria-current="page">
                                        {title}
                                    </span>
                                ) : (
                                    <Link href={href} style={{ textDecoration: 'none', transition: 'color 0.2s' }}>
                                        {title}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
