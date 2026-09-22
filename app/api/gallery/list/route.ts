import { NextResponse } from "next/server";
import { getPublicUrl, listObjects } from "@/lib/server/s3";

export async function GET() {
  try {
    const objects = await listObjects(300);

    const files = objects
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

    return NextResponse.json({ files });
  } catch (error) {
    console.error("Error listando fotos:", error);
    return NextResponse.json(
      { error: "No fue posible cargar la galeria" },
      { status: 500 },
    );
  }
}
