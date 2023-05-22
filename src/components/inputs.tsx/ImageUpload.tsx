"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  let cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: any) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const photos: string[] = []
  const handleUpload = useCallback(
    (result: any): void => {
      photos.push(result.info.secure_url)
    },
    [onChange]
  );

  function uploadPhotos(): void {
    onChange(photos);
  }

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      onClose={uploadPhotos}
      uploadPreset="bg1z9lt5"
      options={{ maxFiles: 10, multiple: true }}
    >
      {({ open }): JSX.Element => (
        <div
          onClick={(): void => open()}
          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="Upload"
                fill
                style={{ objectFit: "cover" }}
                src={value[0]}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
