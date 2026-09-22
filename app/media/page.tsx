import MediaGallery from "../components/MediaGallery";
import { getPublicUrl, listObjects } from "@/lib/server/s3";

async function getInitialFiles() {
  try {
    const objects = await listObjects(300);

    return objects
      .filter((obj) => obj.Key && !obj.Key.endsWith("/"))
      .map((obj) => ({
        key: obj.Key!,
        url: getPublicUrl(obj.Key!),
        lastModified: obj.LastModified?.toISOString() || null,
        size: obj.Size || 0,
      }))
      .sort((a, b) => {
        if (!a.lastModified && !b.lastModified) {
          return 0;
        }
        if (!a.lastModified) {
          return 1;
        }
        if (!b.lastModified) {
          return -1;
        }
        return a.lastModified < b.lastModified ? 1 : -1;
      });
  } catch {
    return [];
  }
}

export default async function MediaPage() {
  const initialFiles = await getInitialFiles();

  return <MediaGallery initialFiles={initialFiles} />;
}
