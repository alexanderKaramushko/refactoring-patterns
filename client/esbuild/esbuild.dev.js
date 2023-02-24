const dotenv = require('dotenv');
const esbuild = require('esbuild');
const liveServer = require('live-server');

const env = require('envalid');

dotenv.config();

env.cleanEnv(process.env, {
  HOST: env.str(),
  PORT: env.port(),

  ROOT: env.str(),
  SPA_INDEX: env.str(),
  ENTRY: env.str(),
  OUT_FILE: env.str(),
});

const host = process.env.HOST;
const port = process.env.PORT;
const root = process.env.ROOT;
const entry = process.env.ENTRY;
const spaIndex = process.env.SPA_INDEX;
const outFile = process.env.OUT_FILE;
const waitForChangesMs = process.env.WAIT_FOR_CHANGES || 1000;

const params = {
  host,
  port,
  root,
  open: false,
  file: spaIndex,
  wait: waitForChangesMs,
};

liveServer.start(params);

const options = {
  entryPoints: [entry],
  outfile: outFile,
  bundle: true,
  watch: {
    onRebuild(error) {
      if (error) {
        console.error('esbuild: build failed:', error.getMessage());
      } else {
        console.log('esbuild: build succeeded');
      }
    },
  },
  format: 'iife',
  minify: false,
  sourcemap: 'linked',
  loader: {
    '.png': 'file',
    '.jpeg': 'file',
    '.jpg': 'file',
    '.js': 'jsx',
  },
};

esbuild.build(options).catch((err) => {
  console.error(err);
});
