import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext/AuthContext';
import { account, PROJECT_ID, COLLECTION_ID, databases, DATABASE_ID } from '../../AppWriteConfig';



function AccountPage() {
  const [userData, setUserData] = useState(null);
  const { user, coinvalue, updateCoinValue } = useAuth();


  useEffect(() => {
    const documentID = user.$id
    const promise = databases.getDocument(DATABASE_ID, COLLECTION_ID, documentID);
    promise.then(function (response) {
      const currentCoins = response.coin_amt;
      updateCoinValue(currentCoins);

    }, function (error) {
      console.log(error);
    });

  }, []);

  const handleWithdraw = () => {
    if (coinvalue < 500) {
      alert("First You Have To Earn Atleast 5000 To Redeem")
    }

  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">Account Information</h1>
        <p className="text-2xl font-mono text-gray-800 mb-6">
          <strong>Username:</strong> {user ? user.name : 'Loading...'}
        </p>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
            {user ? coinvalue : '...'}
          </div>
          <p className="text-xl text-gray-800 ml-6">
            <strong>Number of Coins: {coinvalue}</strong>
          </p>
        </div>
        <button
          onClick={handleWithdraw}
          className="bg-green-500 text-white font-semibold rounded-md px-6 py-3 hover:bg-green-600 mt-6 text-2xl"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
