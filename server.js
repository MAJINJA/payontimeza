const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 10000;

// Home page
app.get('/', (req, res) => {
  res.send('PayOnTimeZA is Live ✅ - Bill Reminder Service Running<br><br>API: /api/reminder<br>Usage: POST {"phone":"27...", "bill":"DSTV", "amount":"R799", "due":"2026-09-20"}');
});

// Test reminder API - this will be WhatsApp later
app.post('/api/reminder', (req, res) => {
  const { phone, bill, amount, due } = req.body;
  
  if (!phone || !bill) {
    return res.json({ error: 'Need phone and bill', example: { phone: '27821234567', bill: 'DSTV', amount: 'R799', due: '2026-09-25' } });
  }

  console.log(`🔔 REMINDER: ${bill} (${amount}) due ${due} -> WhatsApp to ${phone}`);
  
  // For now we log it. Next step we connect real WhatsApp
  res.json({ 
    success: true, 
    message: `Reminder set for ${bill}`,
    will_send_to: phone,
    text: `Hi! Your ${bill} ${amount ? '('+amount+')' : ''} is due on ${due || 'soon'}. Pay on time via PayOnTimeZA ✅`
  });
});

app.listen(PORT, () => {
  console.log(`PayOnTimeZA running on ${PORT}`);
});