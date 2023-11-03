import React, { Component } from 'react';
import './AdSenseComponentstyle.css'


class AdSenseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adDisplayed: false, // Track if an ad is currently displayed
            
        };
    }

    

    handleSeeAdClick = () => {

        // Load the AdSense code and display the ad after a delay
        const script = document.createElement('script');

        script.src = 'your-adsense-script-url'; // Replace with the actual AdSense script URL
        script.async = true;
        
    
        // Simulate ad loading delay (adjust as needed)
        script.onload = () => {
            setTimeout(() => {
                this.setState({ adDisplayed: true });
                
            }, 2000); // Simulate a 2-second ad load delay
        };

        document.head.appendChild(script);
    }


    handleSeeNextAdClick = () => {

        

        // Load the next AdSense ad (replace 'your-adsense-script-url' again)

        const script = document.createElement('script');
        script.src = 'your-adsense-script-url';
        script.async = true;
        document.head.appendChild(script);
    }

    handleSeeAdClick = () => {

        this.setState({ adDisplayed: true });
    }


    render() {
        return (
            <div className="ad-container " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div id="upper-div"
                    className="w-1/2 aspect-16/9  bg-gray relative m-5"
                    style={{
                        minWidth: '70%', maxWidth: '90%', paddingBottom: '36.25%', background: 'gray', position: 'relative',
                        boxShadow:'0 0 10px 5px rgba(128, 0, 128, 0.6)'


                        
                    }}>

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
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background 0.3s',
                            }}
                            className="coin-button"
                        >
                            See Ad
                        </button>
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <button className="bg-blue-500 hover:bg-blue-700 m-4 text-white font-bold py-2 px-4 rounded" onClick={this.handleSeeNextAdClick}>See Next Ad</button>
                </div>
            </div>
        );
    }
}

export default AdSenseComponent;
