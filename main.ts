// make-the-ai-judge-feel-brave-20261121-0302: one relaxing text, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(outputDir, 'entry.txt');

const text = `The kettle clicks silent. A thin grey thread of steam climbs, thins, and vanishes. Inside, the water settles, cooling degree by quiet degree. Evening light lingers against the kitchen wall.`;

writeFileSync(filePath, text, 'utf8');
