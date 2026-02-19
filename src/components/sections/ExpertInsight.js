export default function ExpertInsight({ text, author, cityName }) {
    if (!text) return null;

    return (
        <div className="expert-box">
            <p className="expert-label">Expert Insight — Our {cityName} Experience</p>
            <p className="expert-text">{text}</p>
            <p className="expert-author">— {author || 'Operations Team, Dammam to Bahrain Taxi'}</p>
        </div>
    );
}
