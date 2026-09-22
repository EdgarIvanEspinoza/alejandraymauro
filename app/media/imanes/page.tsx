import LocalPhotoGallery from "../../components/LocalPhotoGallery";
import { localMedia } from "@/lib/generated-media";

export default function MagnetsGalleryPage() {
  const files = localMedia.imanes;

  return (
    <LocalPhotoGallery
      title="Fotos de los imanes"
      folder="imanes"
      files={files}
    />
  );
}
