import { Project } from '@/api';
import { formatDate } from '@/common/utils/date';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';

export default function ProjectCaroussel({ items }: { items: Project }) {
  return (
    <CarouselItem className="h-100 w-100">
      <Card className="bg-slate-300">
        <CardHeader>
          <CardTitle>{items.title}</CardTitle>
          <CardDescription>{items.description}</CardDescription>
          <CardDescription>
            collected: {items.donation_collected}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{formatDate('' + items.creation_datetime)}</p>
        </CardContent>
        <CardFooter>
          <p>{items.user.username}</p>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
