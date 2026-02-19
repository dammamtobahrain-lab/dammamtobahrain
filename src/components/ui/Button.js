'use client';
import Link from 'next/link';

export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button',
    ...props
}) {
    const baseClass = 'btn';
    const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
    const classes = `${baseClass} ${variantClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
