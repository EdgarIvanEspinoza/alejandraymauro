import LocalPhotoGallery from "../../components/LocalPhotoGallery";
import { localMedia } from "@/lib/generated-media";

export default function DisposableCameraGalleryPage() {
  const cameraOneFiles = localMedia.cam1;
  const cameraTwoFiles = localMedia.cam2;

  return (
    <LocalPhotoGallery
      title="Fotos de cámaras desechables"
      folder="camara-desechable"
      files={[...cameraOneFiles, ...cameraTwoFiles]}
      collections={[
        {
          title: "Camara 1",
          folder: "camara-desechable/CAM1",
          files: cameraOneFiles,
        },
        {
          title: "Camara 2",
          folder: "camara-desechable/CAM2",
          files: cameraTwoFiles,
        },
      ]}
    />
  );
}
