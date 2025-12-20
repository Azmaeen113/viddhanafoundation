import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-16", className)}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-secondary/50" />
        <div className="w-2 h-2 rotate-45 bg-secondary" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-secondary/50" />
      </div>
    </div>
  );
}
