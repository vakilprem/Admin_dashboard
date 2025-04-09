// vite.config.js
export default {
  root: './src',  // Point Vite to your source directory if it's not the root
  build: {
    outDir: '../dist', // Specify the build output directory
    rollupOptions: {
      input: './src/index.html' // Ensure Vite knows where to look for the entry HTML file
    }
  }
}
