import { EachElement } from "@/components/templates/EachElement";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardHeader = () => {
  return (
    <section>
      <div className="container flex flex-col gap-4 mt-5 pb-10">
        <Card className="shadow shadow-blue-900">
          <div className="w-full h-full ">
            <CardHeader>
              <CardTitle className="font-jamjure">Chat Box</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <span className="px-5 py-2 border border-white bg-white/5 backdrop-blur-sm rounded">
                About me
              </span>
              <span className="px-5 py-2 border border-white bg-white/5 backdrop-blur-sm rounded">
                Indonesia
              </span>
              <span className="px-5 py-2 border border-white bg-white/5 backdrop-blur-sm rounded">
                History Of the ...
              </span>
            </CardContent>
          </div>
        </Card>
        <EachElement
          of={[...Array(5)]}
          render={(_, index) => (
            <Card key={index} className="shadow shadow-blue-900">
              <CardHeader>
                <CardTitle className="font-jamjure">Chat PDF</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <span className="px-5 py-2 border border-white rounded">
                  About me
                </span>
                <span className="px-5 py-2 border border-white rounded">
                  Indonesia
                </span>
                <span className="px-5 py-2 border border-white rounded">
                  History Of the ...
                </span>
              </CardContent>
            </Card>
          )}
        />
      </div>
    </section>
  );
};
