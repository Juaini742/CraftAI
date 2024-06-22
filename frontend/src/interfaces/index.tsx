import { z } from "zod";

export type RegisterForm = z.infer<typeof schema>;

export const schema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginForm = z.infer<typeof schemaLogin>;

export const schemaLogin = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is Required" }),
});
