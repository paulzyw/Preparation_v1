import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Custom plugin to serve and copy source_files
const sourceFilesPlugin = () => {
  return {
    name: 'source-files-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url) {
          const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
          const pathname = decodeURIComponent(url.pathname);
          if (pathname.startsWith('/source_files/')) {
            const filePath = path.join(__dirname, pathname);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'application/pdf');
              const stream = fs.createReadStream(filePath);
              stream.pipe(res);
              return;
            }
          }
        }
        next();
      });
    },
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'source_files');
      const destDir = path.resolve(__dirname, 'dist', 'source_files');
      if (fs.existsSync(srcDir)) {
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const files = fs.readdirSync(srcDir);
        for (const file of files) {
          fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        }
      }
    }
  };
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), sourceFilesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
