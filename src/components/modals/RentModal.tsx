import axios from "axios";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import useAllModal from "@/hooks/useAllModal";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import MapProperties from "../PropertiesMap/MapProperties";
import CategoryInput from "../inputs.tsx/CategoryInput";
import ImageUpload from "../inputs.tsx/ImageUpload";
import Panorama from "../inputs.tsx/Panorama";
import Counter from "../inputs.tsx/Counter";
import { categories } from "../CategoryFilter/Categories";
import Input from "../inputs.tsx/Input";
import Heading from "../Navbar/Heading";
import Modal from "./Modal";
import Utils from "@/utils/Utils";

enum STEPS {
  CATEGORY = 0,
  INFO = 1,
  AREA = 2,
  LOCATION = 3,
  IMAGERS = 4,
  PANORAMA = 5,
  DESCRIPTION = 6,
}

const RentModal = (): JSX.Element => {
  const rentModal = useAllModal();
  const router = useRouter();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 0,
      roomCount: 0,
      bathroomCount: 0,
      photos: [""],
      description: "",
      area: 0,
      userID: "",
      panoramaPhoto: "",
      coordinates: {
        lat: 0,
        lng: 0,
      },
      locationName: "",
    },
  });

  const category = watch("category");
  const guestCount = watch("guestCount");
  const bathroomCount = watch("bathroomCount");
  const roomCount = watch("roomCount");
  const photos = watch("photos");
  const panoramaPhoto = watch("PanoramaPhoto");

  const setCustomValue = (id: string, value: any): void => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = (): void => setStep((value) => value - 1);

  const [decoded, setDecoded] = useState<object | string | any>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    if (localStorageValue.length > 1) {
      setToken(localStorageValue);
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setStep((value) => value + 1);
    console.log(data);
    if (step === 2) {
      setCustomValue("userID", decoded?.user?._id);
    }

    if (step >= 6) {
      axios
        .post(`${Utils.API_URL}/properties`, data, {
          headers: { "x-access-token": token },
        })
        .then(() => {
          router.refresh();
          reset();
          setStep(STEPS.CATEGORY);
          rentModal.onClose();
          toast.success("🏠Your accommodation has been successfully created", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch(() => {
          toast.error("Something went wrong.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Таны байр аль дүүрэгт байрлалтай вэ?"
        subtitle="Дүүрэг сонгоно уу."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category): void => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Танай газар хаана байрладаг вэ?" />
        <Input
          id="locationName"
          label="Location Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <MapProperties setValue={setCustomValue} />
      </div>
    );
  }
  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Байрныхаа талаар хуваалцах"
          subtitle="Байрны мэдээлэл, тохь тух"
        />
        <Counter
          title="Хүний тоо"
          subtitle="Таны байрыг хэдэн хүн түрээслэх боломжтой вэ?"
          value={guestCount}
          onChange={(value): void => setCustomValue("guestCount", value)}
        />
        <hr />
        <Counter
          title="Өрөө"
          subtitle="Таны байр хэдэн өрөөтэй вэ?"
          value={roomCount}
          onChange={(value): void => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Угаалгын өрөө"
          subtitle="Таны байр хэдэн угаалгын өрөөтэй вэ?"
          value={bathroomCount}
          onChange={(value): void => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGERS) {
    bodyContent = (
      <div>
        <Heading
          title="Та байрныхаа үндсэн зургийг оруулна уу."
          subtitle="Та 5-аас 10н зураг оруулна уу."
        />
        <ImageUpload
          value={photos}
          onChange={(value): void => setCustomValue("photos", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div>
        <Heading title="Та байраа хэрхэн тодорхойлох вэ?" subtitle="" />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.AREA) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Талбайн хэмжээ"
          subtitle="Та байрныхаа талбайн хэмжээг оруулна уу."
        />
        <Input
          id="area"
          label="Area"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PANORAMA) {
    bodyContent = (
      <div>
        <Heading
          title="Та байрныхаа 360 зураг болон 180аар авсан зургийг оруулна уу."
          subtitle="Энэ нь хэрэглэгчидэд үнэхээр сайхан харагдах болно."
        />
        <Panorama
          value={panoramaPhoto}
          onChange={(value): void => setCustomValue("PanoramaPhoto", value)}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Bairliii your home!"
      body={bodyContent}
    />
  );
};

export default RentModal;
