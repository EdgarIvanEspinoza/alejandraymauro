import LocalPhotoGallery from "../../components/LocalPhotoGallery";
import { getLocalMediaFiles } from "@/lib/local-media";

export default async function DisposableCameraGalleryPage() {
  const cameraOneFiles = await getLocalMediaFiles("camara-desechable/CAM1");
  const cameraTwoFiles = await getLocalMediaFiles("camara-desechable/CAM2");

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
