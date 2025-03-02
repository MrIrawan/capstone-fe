import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { ArticleProps } from "@/types";

function CardArticle({ image, title, description } : ArticleProps) {
    return (
        <Card>
            <CardHeader className="w-full h-full">
                <img src={image} alt="photo-1" className="w-full h-full object-cover"/>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <CardTitle className="w-fit text-xl text-blue-500">{title}</CardTitle>
                <CardDescription className="w-fit text-base">{description}</CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-500 transition-all duration-300 ease-out hover:bg-blue-600">Read More</Button>
            </CardFooter>
          </Card>
    )
}

export default CardArticle;