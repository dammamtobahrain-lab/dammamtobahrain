export default function ComparisonTable({ title, headers, rows, highlightRow, cityName }) {
    if (!rows || rows.length === 0) return null;

    return (
        <section style={{ margin: '3rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Route Comparison
                </span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    {title || `How ${cityName} Compares to Nearby Routes`}
                </h2>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            {headers.map((h, i) => (
                                <th key={i}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className={highlightRow === i ? 'highlight-row' : ''}>
                                {row.map((cell, j) => (
                                    <td key={j}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
