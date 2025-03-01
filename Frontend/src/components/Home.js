//components/Home.js

import React from "react";

function Home() {
  const userData = {
    username: "User 123",
  };

  const username = userData ? userData.username : "Unknown";

  return (
    <div className="home">
      <h2>Welcome to the Real-Time Auction Platform</h2>
      <br></br> 
      <p>
        An auction is usually a process of buying and selling goods or services
        by offering them up for bids, taking bids, and then selling the item to
        the highest bidder or buying the item from the lowest bidder. Some
        exceptions to this definition exist and are described in the section
        about different types.
      </p>
      <hr></hr>
      <p>© 2025 Auction App. All rights reserved.</p>
      <p>Welcome to the best place to buy and sell items through auctions</p>
    </div>
  );
}

export default Home;
