import React, { useState, useEffect, useRef } from 'react';
import './AdSenseComponentstyle.css';
import { account, PROJECT_ID, COLLECTION_ID, databases, DATABASE_ID } from '../../AppWriteConfig';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../AuthContext/AuthContext';




function AdSenseComponent() {
    // const [coinvalue, setCoinValue] = useState(null);
    const [divs, setDivs] = useState([]);
    const [time, setTime] = useState(null);

    const { user, updateCoinValue } = useAuth()

    const handleSeeAdClick = async (e) => {
        e.preventDefault()


        // adsense script
        // const adcode = (<div>
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="1234567890"
                data-ad-format="auto"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script> */}
        {/* </div>); */ }

        // const adContainer = document.getElementById("adsensediv");
        // adContainer.innerHTML = adcode;










        // timing plus div insert code here
        if (user) {
            let currentTime = 5;
            const timer = setInterval(() => {
                setTime(currentTime);
                currentTime -= 1;
            }, 1000)
            setDivs([...divs, <div key={divs.length} className="bg-blue-200 h-full w-full  m-8">New Div</div>]);

            // console.log(user.$id)



            // database
            const documentID = user.$id
            const promise = databases.getDocument(DATABASE_ID, COLLECTION_ID, documentID);

            promise.then(function (response) {
                // console.log(response); // Success

                const currentCoins = response.coin_amt;
                const localCoinUpdate = currentCoins + 20;
                const updatedData = {
                    coin_amt: currentCoins + 20
                };
                updateCoinValue(localCoinUpdate);

                return databases.updateDocument(DATABASE_ID, COLLECTION_ID, documentID, updatedData);





            }, function (error) {
                console.log(error); // Failure
            });






            setTimeout(() => {
                setDivs([]);
                clearInterval(timer)
            }, 6000);
        } else (
            alert("first login")
        )



        //coin databse from here








    }




    return (
        <div className="ad-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div
                id="upper-div"
                className="w-1/2 aspect-16/9 rounded-xl backdrop-blur-sm bg-white/50 relative m-5"
                style={{
                    minWidth: '70%',
                    maxWidth: '90%',
                    maxheight: '50.56%',
                    paddingBottom: '39.33%',
                    position: 'relative',
                    boxShadow: '0 0 10px 5px rgba(128, 0, 128, 0.6)',
                }}
            >


                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    {/* AdSense ads will be displayed here */}
                    <div id="adsensediv" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {divs}
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <button
                    className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded shadow-md m-4"
                    onClick={handleSeeAdClick}
                >
                    {time > 0 ? `See Ad ${time}` : 'See Ad'}
                </button>

            </div>
        </div>
    );
}

export default AdSenseComponent;
