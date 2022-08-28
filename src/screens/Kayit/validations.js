import * as yup from "yup";

export default yup.object({
  username: yup
    .string()
    .required("Kullanıcı adı alanı zorunludur.")
    .min(3, "Kullanıcı adı en az 3 karakter olmalıdır."),
  password: yup
    .string()
    .required("Şifre alanı zorunludur.")
    .min(3, "Parola en az 3 karakter olmalıdır."),
});
