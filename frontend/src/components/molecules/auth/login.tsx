import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoginForm, schemaLogin } from "@/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data: LoginForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Something went wrong",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Change your login here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {errors.root && (
          <span className="text-[11px] text-red-600">
            {errors.root.message}
          </span>
        )}
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            {...register("email")}
            required
            placeholder="xx@gmail.com"
          />
          {errors.email && (
            <span className="text-[11px] text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            required
            placeholder="xxxxxxx"
          />
          {errors.password && (
            <span className="text-[11px] text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
        <Button className="flex-1 flex items-center gap-2">
          <span className="text-xl">
            <FcGoogle />
          </span>
          Google
        </Button>
      </CardFooter>
    </Card>
  );
};
