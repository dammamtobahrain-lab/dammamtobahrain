import LocationsGrid from '@/components/LocationsGrid';

export const metadata = {
    title: "Services & Rates | Dammam to Bahrain Taxi",
    description: "Official 2026 tariff for taxi services from all Eastern Province locations to Bahrain.",
};

export default function Services() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h1 className="section-title">OFFICIAL RATE CARD (2026)</h1>

                    <p style={{ textAlign: 'center', marginBottom: '3rem', fontStyle: 'italic' }}>
                        Fixed rates for direct transfers. All prices include Toll Fees.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #000', marginBottom: '3rem', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ background: '#000', color: '#fff', textAlign: 'left' }}>
                                    <th style={{ padding: '15px', border: '1px solid #000' }}>DESTINATION / ORIGIN</th>
                                    <th style={{ padding: '15px', border: '1px solid #000' }}>CHARGE (SAR)</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontFamily: '"Courier New", Courier, monospace' }}>

                                {/* Core Routes */}
                                <tr style={{ background: '#e0e0e0', fontWeight: 'bold' }}>
                                    <td style={{ padding: '10px', border: '1px solid #000' }}>LOCAL CITY TRIP (within 50 KM)</td>
                                    <td style={{ padding: '10px', border: '1px solid #000' }}>85</td>
                                </tr>
                                <tr style={{ background: '#e0e0e0', fontWeight: 'bold' }}>
                                    <td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO DAMMAM AIRPORT</td>
                                    <td style={{ padding: '10px', border: '1px solid #000' }}>180</td>
                                </tr>
                                <tr style={{ background: '#e0e0e0', fontWeight: 'bold' }}>
                                    <td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO BAHRAIN</td>
                                    <td style={{ padding: '10px', border: '1px solid #000' }}>450</td>
                                </tr>

                                {/* Extended List */}
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO DAMMAM SEA PORT</td><td style={{ padding: '10px', border: '1px solid #000' }}>120</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO QATIF</td><td style={{ padding: '10px', border: '1px solid #000' }}>150</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO RAS TANURA</td><td style={{ padding: '10px', border: '1px solid #000' }}>200</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO ABQAIQ</td><td style={{ padding: '10px', border: '1px solid #000' }}>200</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO JUBAIL</td><td style={{ padding: '10px', border: '1px solid #000' }}>300</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO FADHLI</td><td style={{ padding: '10px', border: '1px solid #000' }}>300</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO SHEDGUM</td><td style={{ padding: '10px', border: '1px solid #000' }}>300</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO AIRPORT (HASSA/HOFUF)</td><td style={{ padding: '10px', border: '1px solid #000' }}>350</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO ABO ALI ISLAND</td><td style={{ padding: '10px', border: '1px solid #000' }}>350</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO AINDAR</td><td style={{ padding: '10px', border: '1px solid #000' }}>350</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO BARRI</td><td style={{ padding: '10px', border: '1px solid #000' }}>350</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO ABU HADRIYA</td><td style={{ padding: '10px', border: '1px solid #000' }}>380</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO KARSANIYA</td><td style={{ padding: '10px', border: '1px solid #000' }}>380</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO UTHMANIYAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>400</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO UDHALIYAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>400</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO MANIFAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>450</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO SAFANIYA</td><td style={{ padding: '10px', border: '1px solid #000' }}>500</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO TANAJIB</td><td style={{ padding: '10px', border: '1px solid #000' }}>500</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO NARIYA</td><td style={{ padding: '10px', border: '1px solid #000' }}>550</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO HAWIYAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>550</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO SALWA</td><td style={{ padding: '10px', border: '1px solid #000' }}>550</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO KHAFJI</td><td style={{ padding: '10px', border: '1px solid #000' }}>600</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO HARMALIYAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>600</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO KHURAIS</td><td style={{ padding: '10px', border: '1px solid #000' }}>650</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO HARADH</td><td style={{ padding: '10px', border: '1px solid #000' }}>700</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO TINAT</td><td style={{ padding: '10px', border: '1px solid #000' }}>750</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO GAZAL</td><td style={{ padding: '10px', border: '1px solid #000' }}>800</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO MADRIK</td><td style={{ padding: '10px', border: '1px solid #000' }}>800</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO RIYADH</td><td style={{ padding: '10px', border: '1px solid #000' }}>900</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO HAFER ALBATEN</td><td style={{ padding: '10px', border: '1px solid #000' }}>900</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO AL KHARJ</td><td style={{ padding: '10px', border: '1px solid #000' }}>900</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO HAWTAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>1,000</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO NAJAN</td><td style={{ padding: '10px', border: '1px solid #000' }}>950</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO NAYM</td><td style={{ padding: '10px', border: '1px solid #000' }}>1,200</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO SHAYBAH 1</td><td style={{ padding: '10px', border: '1px solid #000' }}>1,500</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO SHAYBAH 2</td><td style={{ padding: '10px', border: '1px solid #000' }}>2,400</td></tr>

                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO JEDDAH</td><td style={{ padding: '10px', border: '1px solid #000' }}>2,500</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO TURAIF / SKAKA / JALAMED</td><td style={{ padding: '10px', border: '1px solid #000' }}>2,600</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO NAJRAN</td><td style={{ padding: '10px', border: '1px solid #000' }}>2,800</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO YANBU</td><td style={{ padding: '10px', border: '1px solid #000' }}>3,000</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO JIZAN</td><td style={{ padding: '10px', border: '1px solid #000' }}>3,000</td></tr>
                                <tr><td style={{ padding: '10px', border: '1px solid #000' }}>TRIP TO DUBA</td><td style={{ padding: '10px', border: '1px solid #000' }}>3,500</td></tr>

                            </tbody>
                        </table>
                    </div>

                    <h3 style={{ fontFamily: 'Arial, sans-serif' }}>ADDITIONAL CHARGES</h3>
                    <ul style={{ listStyle: 'square', paddingLeft: '20px', lineHeight: '2' }}>
                        <li><strong>Additional Driver (If Required):</strong> 300 SAR / Day</li>
                        <li><strong>Waiting Charges:</strong> 35 SAR / Hour</li>
                    </ul>

                </div>
            </div>
            <LocationsGrid />
        </>
    );
}
