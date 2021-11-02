to run:
yarn && yarn start

1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
   In this case, I didn't build a real backend. I just utilized APIs to constantly grab the latest prices
   for specific coins. I needed to convert the prices because the BISQ API only went from ETH to BTC so I
   took the most recent sale of bitcoin and did some math to convert it to USD.

2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
   This is a pretty basic implementation, not is truly over designed.

3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
   For scalabilty, by using APIs it is actually fairly efficient. However, it doesn't scale well when I
   would need to add other APIs or other coins. I would need to start mapping over the data which would probably
   need a state management system to keep track of which site would have the best price to buy or sell the crypto.

4. What are some other enhancements you would have made, if you had more time to do this implementation
   I would probably add a tooltip feature to display the price when you hover over the bar chart. I would also flesh out a
   real backend. I would add multiple APIs to hit. Along with some transitions. I wanted to line up my bar charts a
   certain way as well using inline or block but it wasn't quite workig out.
