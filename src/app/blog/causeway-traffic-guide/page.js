import Link from 'next/link';

export const metadata = {
    title: "King Fahd Causeway Traffic Guide | Avoid the Jam",
    description: "When is the best time to travel to Bahrain? Traffic patterns, peak hours, and apps to check live bridge status.",
};

export default function TrafficGuidePage() {
    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="section-title">Avoid the Wait: Causeway Traffic Guide</h1>

                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p>
                        The King Fahd Causeway is the lifeline involving Saudi Arabia and Bahrain. But on a Thursday afternoon, it can become a parking lot.
                        Here is how savvy travelers (and our taxi drivers) plan their trips.
                    </p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>The "Red Zone" Times</h2>
                    <p>Avoid these windows if you value your sanity:</p>
                    <ul style={{ border: '1px solid #f00', padding: '2rem', background: '#xfff', listStyle: 'none' }}>
                        <li><strong>Thursday:</strong> 2:00 PM - 10:00 PM (Weekend Exit Rush)</li>
                        <li><strong>Saturday:</strong> 4:00 PM - 12:00 AM (Return Rush)</li>
                        <li><strong>School Holidays:</strong> All day peak.</li>
                    </ul>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>The "Golden Hour"</h2>
                    <p>
                        For the smoothest run, aim for <strong>Tuesday or Wednesday mid-morning (10 AM)</strong>.
                        If you must travel on weekend, leave <strong>before 8:00 AM on Thursday</strong>.
                    </p>

                    <h2 style={{ fontFamily: 'Arial, sans-serif', marginTop: '2rem' }}>Checking Live Status</h2>
                    <p>
                        The official "King Fahd Causeway Authority" app provides live camera feeds. Always check it 1 hour before departure.
                        Or, simply book a <Link href="/" style={{ textDecoration: 'underline', color: 'blue' }}>Private Taxi</Link>. While we can't fly over traffic, our drivers know the lane logic and optimal approaches better than anyone.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link href="/booking" className="btn btn-primary" style={{ padding: '15px 40px' }}>
                        BOOK A RIDE NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}
