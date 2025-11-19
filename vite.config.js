import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // You only need the server block if you are changing defaults
  // For standard localhost development, you can usually omit the 'server' block entirely:
  /*
  server: {
    // If you need it:
    host: '0.0.0.0', // To allow network access
  },
  */
  
  // To prevent 404s when refreshing on a route in a built (preview) app
  preview: {
    port: 5173, // Optional: ensure the preview server runs on the same port
    // Correct way to handle SPA history fallback in Vite's preview:
    historyApiFallback: true, 
  }
});