import LocalPhotoGallery from "../../components/LocalPhotoGallery";
import { getLocalMediaFiles } from "@/lib/local-media";

export default async function MagnetsGalleryPage() {
  const files = await getLocalMediaFiles("imanes");

  return (
    <LocalPhotoGallery
      title="Fotos de los imanes"
      folder="imanes"
      files={files}
    />
  );
}
