import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border border-cyan-500/10 hover:border-cyan-500/40 transition-all duration-500 h-full group cyber-glass relative"
      }
    >
      <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="size-1 bg-cyan-500 rounded-full animate-pulse" />
      </div>
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        <div className="relative overflow-hidden aspect-video">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full overflow-hidden object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-400">
            SECURE_LINK
          </div>
        </div>
      </Link>
      <CardHeader className="px-4 py-3">
        <div className="space-y-1">
          <CardTitle className="text-base font-display font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
            {title}
          </CardTitle>
          <time className="font-mono text-[10px] text-cyan-500/60 uppercase tracking-widest">
            [{dates}]
          </time>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 py-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1.5 py-0 bg-cyan-500/5 text-cyan-500/70 border-cyan-500/10 text-[9px] font-mono"
                variant="outline"
                key={tag}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge 
                  key={idx} 
                  className="flex gap-2 px-3 py-1 text-[10px] bg-cyan-500 text-black hover:bg-cyan-400 font-bold transition-all font-display uppercase italic"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
