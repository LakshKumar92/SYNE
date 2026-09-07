import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;
app.use(express.json());

// Initialize Gemini SDK
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

// API Route for AI Classification
app.post("/api/classify", async (req, res) => {
  if (!ai) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
  }

  const { productDescription, productUrl } = req.body;
  
  if (!productDescription && !productUrl) {
    return res.status(400).json({ error: "Please provide a product description or URL." });
  }

  try {
    const prompt = `
      You are an expert fashion AI. I will provide a description or a URL of a clothing item.
      Please classify this item into the following categories:
      - Gender: (Menswear, Womenswear, or Unisex)
      - Body Type: (Slim, Athletic, Broad)
      - Style: (Casual, Streetwear, Formal, Avant-Garde)

      Respond ONLY with a valid JSON object matching this exact schema:
      {
        "gender": ["choice1", "choice2"],
        "bodyType": ["choice1"],
        "style": ["choice1"]
      }

      Input item: ${productDescription || productUrl}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "{}";
    res.json(JSON.parse(text));
  } catch (error) {
    console.error("AI Classification Error:", error);
    res.status(500).json({ error: "Failed to classify the item." });
  }
});

// Vite middleware for development or static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
