import {
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

const DEFAULT_REGION = "us-east-1";

const region = process.env.S3_REGION || DEFAULT_REGION;
const bucketName = process.env.S3_BUCKET || process.env.S3_BUCKET_NAME;
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const hasCredentials = Boolean(accessKeyId && secretAccessKey);

const s3Client = new S3Client({
  region,
  credentials: hasCredentials
    ? {
        accessKeyId: accessKeyId!,
        secretAccessKey: secretAccessKey!,
      }
    : undefined,
});

export function getS3Config() {
  return {
    region,
    bucketName,
  };
}

export function assertS3Configured() {
  if (!bucketName) {
    throw new Error("S3_BUCKET no configurado");
  }
}

export function getPublicUrl(key: string) {
  const baseUrl = process.env.S3_PUBLIC_BASE_URL;
  if (baseUrl) {
    return `${baseUrl.replace(/\/$/, "")}/${encodeURIComponent(key).replace(/%2F/g, "/")}`;
  }

  return `https://${bucketName}.s3.${region}.amazonaws.com/${encodeURIComponent(key).replace(/%2F/g, "/")}`;
}

export async function listObjects(maxKeys = 200) {
  assertS3Configured();

  const response = await s3Client.send(
    new ListObjectsV2Command({
      Bucket: bucketName,
      MaxKeys: maxKeys,
    })
  );

  return response.Contents || [];
}
