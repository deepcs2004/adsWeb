import React, { Component } from 'react';

class AdSenseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adDisplayed: false, // Track if an ad is currently displayed
        };
    }

    handleSeeAdClick = () => {
        // Load the AdSense code and display the ad
        // Replace 'your-adsense-script-url' with your actual AdSense script URL
        const script = document.createElement('script');
        script.src = 'your-adsense-script-url';
        script.async = true;
        document.head.appendChild(script);

        this.setState({ adDisplayed: true });
    }

    handleSeeNextAdClick = () => {
        // Load the next AdSense ad (replace 'your-adsense-script-url' again)
        const script = document.createElement('script');
        script.src = 'your-adsense-script-url';
        script.async = true;
        document.head.appendChild(script);
    }

    render() {
        return (
            <div className="ad-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '50%', paddingBottom: '28.125%', background: 'gray', position: 'relative' }}>
                    {this.state.adDisplayed ? (
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            {/* AdSense ads will be displayed here */}
                            <div id="adsense-div" style={{ width: '100%', height: '100%' }}></div>
                        </div>
                    ) : (
                        <button
                            onClick={this.handleSeeAdClick}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: 'gold',
                                color: 'black',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px', // Reduced border radius
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                            }}
                            className="coin-button screen-cracking"
                        >
                            See Ad
                        </button>
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <button onClick={this.handleSeeNextAdClick}>See Next Ad</button>
                </div>
            </div>
        );
    }
}

export default AdSenseComponent;
