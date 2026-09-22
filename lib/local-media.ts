import { readdir } from "node:fs/promises";
import path from "node:path";

const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

export async function getLocalMediaFiles(folder: string) {
  const directory = path.join(process.cwd(), "public", "media", folder);

  try {
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
  } catch {
    return [];
  }
}
