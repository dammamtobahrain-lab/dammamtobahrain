export const metadata = {
    title: "Service Not Found | Dammam to Bahrain Taxi",
    description: "The requested taxi service route could not be found.",
};

export default function NotFound() {
    return (
        <div className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
                <h2 style={{ marginBottom: '2rem' }}>PAGE NOT FOUND</h2>
                <p>The route or page you are looking for does not exist.</p>
                <a href="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>RETURN HOME</a>
            </div>
        </div>
    );
}
