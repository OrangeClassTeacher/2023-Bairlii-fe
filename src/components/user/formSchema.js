import * as Yup from "yup";

export const myUserObj = Yup.object().shape({
    firstName: Yup.string().required("Нэр оруулна уу"),
    lastName: Yup.string().required("Овог оруулна уу"),
    email: Yup.string()
        .required("Имэйл хаягаа оруулна уу")
        .email("Имэйл буруу байна"),
    address: Yup.object().shape({
        district: Yup.string().required("Дүүрэг сонгоно уу"),
        subdistrict: Yup.string().required("Хороо сонгоно уу"),
        street: Yup.string().required("Гудамжын нэрээ оруулна уу"),
        block: Yup.string().required("Байрны дугаараа оруулна уу"),
        fence: Yup.number().required("Хашааны дугаараа оруулна уу"),
    }),
    password: Yup.string()
        .min(6, "Нууц үгээ оруулна уу")
        .max(10, "Хамгийн уртдаа 10 тэмдэгт байна")
        .required("Нууц үгээ оруулна уу"),

    profilePicture: Yup.string().required("Зурагаа оруулна уу"),
    phoneNumber: Yup.string()
        .min(8, "Утасны дугаар 8 оронтой байх ёстой")
        .max(8, "Утасны дугаар 8 оронтой байх ёстой")
        .required("Утасны дугаараа оруулна уу"),
});
