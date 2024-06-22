import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Register } from "./register";
import { Login } from "./login";

export const AuthComponent = () => {
  return (
    <section className="w-full flex justify-center items-center h-full">
      <Tabs defaultValue="register" className="w-full md:w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <Register />
        </TabsContent>
        <TabsContent value="login">
          <Login />
        </TabsContent>
      </Tabs>
    </section>
  );
};
