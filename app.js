const { useState, useEffect } = React;

function App() {
    const worker = {
        name: "Ravi Kumar",
        role: "Delivery Partner (Zepto/Blinkit)",
        avgDailyIncome: 800,
        avgHourlyIncome: 100
    };

    const triggers = [
        { id: 'rain', label: 'Heavy Rain', hours: 4, icon: '🌧️' },
        { id: 'heat', label: 'Extreme Heat', hours: 3, icon: '🌡️' },
        { id: 'aqi', label: 'Severe AQI', hours: 2, icon: '🌫️' },
        { id: 'downtime', label: 'Platform Downtime', hours: 5, icon: '⚠️' }
    ];

    const [activeTrigger, setActiveTrigger] = useState(null);
    const [payout, setPayout] = useState(0);

    const handleTriggerClick = (trigger) => {
        setActiveTrigger(trigger);
        setPayout(trigger.hours * worker.avgHourlyIncome);
    };

    return (
        <div className="container">
            <header>
                <h1>EarningsFingerprint Insurance</h1>
                <p>Personalized income protection for gig workers</p>
            </header>

            <div className="card">
                <h2>Worker Profile</h2>
                <div className="profile-grid">
                    <div className="profile-item">
                        <span className="profile-label">Name</span>
                        <span className="profile-value">{worker.name}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Role</span>
                        <span className="profile-value">{worker.role}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Avg Daily Income</span>
                        <span className="profile-value">₹{worker.avgDailyIncome}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Avg Hourly Income</span>
                        <span className="profile-value" style={{color: 'var(--primary)'}}>₹{worker.avgHourlyIncome}</span>
                    </div>
                </div>
            </div>

            <div className="card indicator">
                <div className="indicator-icon">🛡️</div>
                <div className="indicator-text">
                    <h3>EarningsFingerprint Active</h3>
                    <p>Zero-claim automatic payout system based on your personalized earning patterns.</p>
                </div>
            </div>

            <div className="card">
                <h2>Trigger Simulation</h2>
                <p style={{marginBottom: '1.25rem', color: 'var(--text-muted)'}}>Simulate a disruption to see automatic compensation.</p>
                
                {activeTrigger && (
                    <div className="disruption-alert">
                        <span>🚨</span>
                        <span>Disruption Detected: <strong>{activeTrigger.label}</strong> ({activeTrigger.hours} hours lost)</span>
                    </div>
                )}

                <div className="trigger-grid">
                    {triggers.map(trigger => (
                        <button 
                            key={trigger.id}
                            className={`trigger-btn ${activeTrigger?.id === trigger.id ? 'active' : ''}`}
                            onClick={() => handleTriggerClick(trigger)}
                        >
                            <span className="icon">{trigger.icon}</span>
                            <span>{trigger.label}</span>
                            <span className="hours">{trigger.hours} hrs</span>
                        </button>
                    ))}
                </div>
            </div>

            {payout > 0 && (
                <div className="card payout-card">
                    <div className="payout-card-content">
                        <h2 style={{color: '#064e3b'}}>Automatic Compensation</h2>
                        <div className="payout-amount">₹{payout}</div>
                        <div className="payout-message">
                            <span>✅</span> Credited instantly to account
                        </div>
                        <p style={{marginTop: '0.75rem', fontSize: '0.95rem', color: '#047857', fontWeight: '500'}}>
                            Calculation: ₹{worker.avgHourlyIncome} / hr × {activeTrigger.hours} hours
                        </p>
                    </div>
                </div>
            )}

            <div className="card how-it-works">
                <h2>How It Works</h2>
                <p style={{marginBottom: '0.75rem'}}>
                    This system calculates your payout based on your personal <strong>EarningsFingerprint</strong>.
                </p>
                <p>
                    When a disruption occurs (like extreme weather or platform downtime), it automatically compensates you for lost working hours using your average hourly income, ensuring you never lose out on what you normally earn. No manual claims required!
                </p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
