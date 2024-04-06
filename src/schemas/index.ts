import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email Required",
  }),
  password: z.string().min(1, {
    message: "Password Required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email Required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 charactes required",
  }),
  name: z.string().min(1, {
    message: "Name is Required",
  }),
});
