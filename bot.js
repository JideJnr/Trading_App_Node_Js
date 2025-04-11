require('dotenv').config();
const Binance = require('binance-api-node').default;

// Connect to Binance API
const client = Binance({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_API_SECRET,
});

// Test connection
async function getAccountInfo() {
  try {
    const account = await client.accountInfo();
    console.log(account);
  } catch (error) {
    console.error('Error fetching account info:', error);
  }
}

getAccountInfo();
