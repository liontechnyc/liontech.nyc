import sharp from 'sharp';
import glob from 'glob';
import fs from 'fs-extra';
import path from 'path';

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);
const maxWidth = 1800;
const quality = 70;

const ignore = fs
  .readFileSync(path.join(__dirname, '.optimizeignore'), 'utf8')
  .split('\r\n')
  .splice(0, 1);

/**
 * Determines if image should skip optimization
 * @param match - file path
 */
function shouldIgnore(match: string) {
  for (let pattern in ignore) {
    return match.includes(pattern)
    }
  }

console.log('Optimization Configuration: ');
console.log({ maxWidth, quality, ignore });

Promise.all(
  matches.map(async (match) => {
    if (shouldIgnore(match)) {
      console.warn(`Skipped '${match}'`);
      return null;
    }
     else {
        const stream = sharp(match);

        const optimizedName = match.replace(
          /(\..+)$/,
          (match, ext) => `-optimized${ext}`
        );

        await stream.resize(maxWidth).jpeg({ quality }).toFile(optimizedName);

        console.log(`Optimized '${match}'`);
        return fs.rename(optimizedName, match);
      }
    }
  )
);
