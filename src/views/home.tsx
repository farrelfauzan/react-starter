import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <h1>React App</h1>
      <p>React app with TypeScript</p>
      <div className="mt-4 flex space-x-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex items-start">
                <h2>Card Title</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-start">
              <p>
                This is a card component. It is a container for other
                components.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Github size={24} />
              <Instagram size={24} />
              <Facebook size={24} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
