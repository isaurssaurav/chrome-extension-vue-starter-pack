import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import fs from 'fs';

const myPlugin = () => ({
  name: 'configure-preview-server',
  configureServer(server) {
    console.log(server,"??????**************************")
    // return a post hook that is called after other middlewares are
    // installed
    server.ws.on('connection', () => {
    console.log(server,"??????**************************")

      server.ws.send('my:greetings', { msg: 'hello' })
    })
  },
});

export default defineConfig({
  plugins: [
    vue(),
    myPlugin()
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/pages/popup/index.html'),
        content: resolve(__dirname, 'src/pages/content/index.ts'),
        background: resolve(__dirname, 'src/pages/background/index.ts'),
      },
      // plugins:[myExample()],
      output:{
        dir:"dist",
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: "assets/js/[name].js"
      }
    },
  },
  
})




// function myExample () {
//   return {
//     name: 'my-example', // this name will show up in logs and errors
//     buildEnd ( id ) {
//       fs.copyFile(resolve(__dirname, 'mani.json'), resolve(__dirname, 'dist/manifest.json'), (err) => {
//         if (err) throw err;
//         console.log('source.txt was copied to destination.txt');
//       });
//       console.log("heloo*********************")
//       // fs.renameSync(resolve(__dirname, 'mani.json'), resolve(__dirname, 'dist/manifest.json'))
//       return null; // other ids should be handled as usually
//     },
//     closeWatcher(){
//       console.log("colse watchter")
//       return;
//     }
//   };
// }
