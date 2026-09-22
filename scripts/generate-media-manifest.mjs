import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function getFiles(folder) {
  const directory = path.join(root, "public", "media", folder);
  const entries = await readdir(directory, { withFileTypes: true });

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        supportedExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((first, second) =>
      first.localeCompare(second, undefined, { numeric: true }),
    );
}

const imanes = await getFiles("imanes");
const cam1 = await getFiles("camara-desechable/CAM1");
const cam2 = await getFiles("camara-desechable/CAM2");

const output = `// Generated during the build. Do not edit manually.\n\nexport const localMedia = ${JSON.stringify(
  { imanes, cam1, cam2 },
  null,
  2,
)} as const;\n`;

await writeFile(
  path.join(root, "lib/generated-media.ts"),
  output,
  "utf8",
);
