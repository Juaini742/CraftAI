import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { FcGoogle } from "react-icons/fc";
import { RegisterForm, schema } from "@/interfaces";

export const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
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
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          repellat?
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {errors.root && (
          <span className="text-[11px] text-red-600">
            {errors.root.message}
          </span>
        )}
        <div className="space-y-1">
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            {...register("username")}
            required
            placeholder="usernameXX..."
            className="outline-none"
          />
          {errors.username && (
            <span className="text-[11px] text-red-600">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            {...register("email")}
            required
            placeholder="xx@gmail.com"
            className="outline-none"
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
            className="outline-none"
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
          className={`flex-1 ${
            isSubmitting && "bg-gray-400 cursor-not-allowed"
          } `}
        >
          {isSubmitting ? "Loading..." : "Register"}
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
