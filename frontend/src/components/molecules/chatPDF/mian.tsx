import { EachElement } from "@/components/templates/EachElement";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ChatPDFMain = () => {
  return (
    <section className="h-full bg-[#02050C] relative overflow-y-auto">
      <div className="fixed top-14 left-0 right-0 mx-auto max-w-80 px-2 md:px-5 md:py-2 text-center rounded-b-3xl shadow-md shadow-purple-900 bg-purple-900 z-10">
        <h4 className="text-sm md:text-base">You are in Chatbox Chat 1</h4>
      </div>
      <Card className="px-5 pt-3">
        <div className="flex flex-col gap-5 px-5 ">
          <EachElement
            of={[...Array(8)]}
            render={(_, index) => (
              <div
                key={index}
                className={` flex flex-col gap-2  ${
                  index % 2 === 0 ? "self-end w-[80%]" : ""
                }`}
              >
                <div
                  className={`s w-12 h-12 rounded-full bg-blue-800 shadow-round ${
                    index % 2 === 0 ? "self-end" : ""
                  }`}
                >
                  <img src="../images/avatarR.png" alt="Avatar" />
                </div>
                <div
                  className={`p-2  rounded-xl shadow-round  ${
                    index % 2 === 0
                      ? "bg-zinc-800 shadow-zinc-800"
                      : "shadow-none"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus eum excepturi suscipit molestias alias neque incidunt
                  dolore blanditiis omnis quaerat magnam, nisi illum corporis
                  obcaecati distinctio provident debitis, deleniti labore
                  reiciendis magni est nesciunt repellat, dolorum earum? Minima
                  dolorum optio alias, blanditiis explicabo labore quidem
                  suscipit. Ex ipsa eum neque aliquam dolorum omnis deserunt
                  aspernatur cumque dolor eos reiciendis vero alias, quisquam
                  quae mollitia cupiditate? Sed, rerum fuga! Nulla quam dolorum,
                  doloribus esse et eos veniam molestias ipsum voluptate amet
                  porro eum magni maiores. Obcaecati blanditiis illo ipsam
                  aliquid facilis amet quibusdam repudiandae sunt ea, inventore,
                  perferendis sit, repellat dignissimos?
                </div>
              </div>
            )}
          />
        </div>
      </Card>
      <form className="w-full h-16 py-1 flex items-center gap-2 bg-zinc-800 shadow-round shadow-zinc-800 sticky bottom-0 z-10 left-0">
        <div className="flex-1 h-full pl-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="h-full w-full bg-transparent border-2 outline-none"
          />
        </div>
        <Button className="h-[50px] mr-3">Send</Button>
      </form>
    </section>
  );
};
