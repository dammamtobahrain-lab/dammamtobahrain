import { Star } from 'lucide-react';

export default function CityReviews({ reviews, cityName }) {
    if (!reviews || reviews.length === 0) return null;

    return (
        <section style={{ margin: '3rem 0' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Client Feedback
                </span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    What Passengers Say About {cityName} Transfers
                </h2>
            </div>

            <div className="reviews-grid">
                {reviews.map((review, i) => (
                    <div key={i} className="review-card">
                        <div className="review-stars">
                            {[...Array(review.rating || 5)].map((_, s) => (
                                <Star key={s} size={14} fill="var(--color-accent)" color="var(--color-accent)" style={{ display: 'inline' }} />
                            ))}
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="review-author">
                            <div className="review-avatar">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <p className="review-name">{review.name}</p>
                                <p className="review-date">{review.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
