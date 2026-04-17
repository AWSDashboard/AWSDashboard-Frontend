import { z } from "zod";

const passwordValidationUp = z
    .string()
    .trim()
    .min(10, 'La contraseña debe tener mínimo 10 caracteres.')
    .max(30, 'La contraseña debe tener máximo 30 caracteres')
    .regex(/[a-z]/, 'Debe incluir al menos una letra minúscula')
    .regex(/[A-Z]/, 'Debe incluir al menos una letra mayúscula')
    .regex(/\d/, 'Debe incluir al menos un número')
    .regex(/[^A-Za-z0-9]/, 'Debe incluir al menos un símbolo (p.ej. @$!%*?&)')
    .regex(/^\S+$/, 'No debe contener espacios');

export const SignInSchema = z.object({
    email: z.email("El campo debe ser un Email.").trim(),
    password: z.string().min(1, "Campo obligatorio"),
});

export const SignUpSchema= z.object({
    userName: z.string().min(1,"Campo obligatorio"),
    email: z.email("El campo debe ser un Email.").trim(),
    password: passwordValidationUp,
    repeatPassword: z.string(),
    acceptedTerms: z.boolean(),
}).superRefine(({ password, repeatPassword, acceptedTerms }, ctx) => {
    if (password !== repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Las contraseñas no coinciden",
        path: ["repeatPassword"],
      });
    }

    if (acceptedTerms !== true) {
      ctx.addIssue({
        code: "custom",
        message: "Debes aceptar los términos y condiciones",
        path: ["acceptedTerms"],
      });
    }
  });

export type SignInData = z.input<typeof SignInSchema>;
export type SignUpData = z.input<typeof SignUpSchema>;