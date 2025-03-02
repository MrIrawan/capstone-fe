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

interface CardDataProps {
  data: ArticleProps
}

function CardArticle({ data } : CardDataProps) {
    return (
      <Card className="flex flex-col justify-between">
        <CardHeader className="w-full">
            <img src={data.image} alt="photo-1" className="w-[300px] h-full object-cover"/>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <CardTitle className="w-fit text-xl text-blue-500">{data.title}</CardTitle>
            <CardDescription className="w-fit text-base">{data.description}</CardDescription>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-500 transition-all duration-300 ease-out hover:bg-blue-600">Read More</Button>
        </CardFooter>
      </Card>
    )
}

export default CardArticle;