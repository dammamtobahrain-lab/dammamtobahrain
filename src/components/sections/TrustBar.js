import { Shield, Star, Clock, CheckCircle } from 'lucide-react';

export default function TrustBar({ clientsServed, cityName }) {
    return (
        <section className="trust-bar">
            <div className="container">
                <div className="trust-bar-inner">
                    <div className="trust-item">
                        <CheckCircle size={18} />
                        <span><strong>{clientsServed || '500+'}</strong> clients served{cityName ? ` in ${cityName}` : ''}</span>
                    </div>
                    <div className="trust-item">
                        <Star size={18} />
                        <span><strong>4.9/5</strong> average rating</span>
                    </div>
                    <div className="trust-item">
                        <Shield size={18} />
                        <span><strong>100%</strong> satisfaction guarantee</span>
                    </div>
                    <div className="trust-item">
                        <Clock size={18} />
                        <span><strong>24/7</strong> availability</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
