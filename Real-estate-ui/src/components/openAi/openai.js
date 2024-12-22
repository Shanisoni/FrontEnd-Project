// const express = require("express");
// const { OpenAI } = require("openai");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// const openai = new OpenAI({
//     apiKey: "YOUR_OPENAI_API_KEY", // Replace with your OpenAI API Key
// });

// app.use(cors());
// app.use(express.json());

// app.post("/chat", async (req, res) => {
//     const userQuery = req.body.query;

//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-4", // Or gpt-3.5
//             messages: [{ role: "user", content: userQuery }],
//         });
//         res.json({ reply: response.choices[0].message.content });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ reply: "Sorry, I encountered an error while processing your request." });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
