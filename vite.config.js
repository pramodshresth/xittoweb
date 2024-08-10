import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/',
   resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  plugins: [react({
    jsxRuntime: 'classic' 
  })],
  // base:'/xittoweb',
  // base:'/xittoweb/',
  server: {
    host: true, // Expose the server to the local network
    port: 5173, // You can change this port if needed
  },

})
