import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // --- API ROUTES ---
  
  /**
   * API endpoint to handle contact form submissions.
   * In a real application, this would send an email or store the data in a database.
   */
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, service, message } = req.body;
    
    // Log the submission (simulating backend processing)
    console.log('New Contact Form Submission:', { name, email, phone, service, message });

    // Simulate a slight delay for realism
    setTimeout(() => {
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you shortly!' 
      });
    }, 1000);
  });

  /**
   * API endpoint to get service details (optional, could be used for dynamic loading)
   */
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // --- VITE MIDDLEWARE ---

  if (process.env.NODE_ENV !== 'production') {
    // Development mode: Use Vite's dev server as middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve static files from the dist directory
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // Handle SPA routing: serve index.html for all non-API requests
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Rancho Cucamonga Plumbing Service running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
