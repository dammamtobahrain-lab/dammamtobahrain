export default function UrgencyBanner({ message, slots, cityName }) {
    if (!message && !slots) return null;

    return (
        <div className="urgency-banner">
            <span className="urgency-dot"></span>
            <span>
                {message || (
                    <>
                        <strong>High demand</strong> for {cityName || 'this route'} — Only <strong>{slots || '3 slots'}</strong> remaining this weekend. Book now to secure your ride.
                    </>
                )}
            </span>
        </div>
    );
}
