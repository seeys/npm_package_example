const { build } = require('esbuild');
const dts = require('dts-bundle');
const package = require('../package.json');
const path = require('path');

build({
  entryPoints: ['lib/index.js'], // 진입 시작할 파일
  outfile: 'dist/index.min.js', // 빌드 결과 파일
  bundle: true, // 종속성 번들에 포함
  minify: true, // 코드 단축화
  platform: 'node' // 번들 환경
}).then(() => {
  dts.bundle({
    name: package.name,
    out: path.join(__dirname, "../dist/index.min.d.ts"), // ts로 변환된 파일
    main: 'lib/index.d.ts' // 타입 참조 파일
  });
}).catch((error) => {
  console.error(error);
})