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
  const postRedirection = `/projects/${items.id}`;

  return (
    <CarouselItem className="h-60">
      <Card className="bg-slate-300 h-60">
        <CardHeader>
          <CardTitle>{items.title}</CardTitle>
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
        <CardFooter>
          <a
            href={postRedirection}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
