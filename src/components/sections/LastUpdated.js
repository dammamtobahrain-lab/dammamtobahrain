export default function LastUpdated({ date }) {
    const displayDate = date || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="last-updated">
            <span>Last Updated: {displayDate}</span>
        </div>
    );
}
