const express = require('express');
const app = express();
app.use(express.json());
app.use(require('cors')());

const PORT = 5000;

app.get('/price/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const price = await client.prices({ symbol: symbol.toUpperCase() });
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/trade', async (req, res) => {
  try {
    const { symbol, side, quantity, price } = req.body;
    const order = await client.order({
      symbol,
      side,
      type: 'LIMIT',
      timeInForce: 'GTC',
      quantity,
      price,
    });
    res.json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
