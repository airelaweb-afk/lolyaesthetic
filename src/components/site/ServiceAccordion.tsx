import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Service, ServiceCategory } from "@/data/services";
import { BookNowButton } from "./primitives";

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-sm border border-primary/40 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary">
      {label}
    </span>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="border-b border-border py-6 last:border-0">
      <div className="grid gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <h4 className="text-xl leading-snug">{service.name}</h4>
          {service.badge ? (
            <span className="mt-2 block">
              <Badge label={service.badge} />
            </span>
          ) : null}
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          {service.note ? (
            <p className="mt-3 max-w-2xl border-l-2 border-primary-soft pl-3 text-xs leading-relaxed text-muted-foreground">
              {service.note}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-4">
          <p className="font-sans text-base font-semibold tabular-nums text-primary">
            {service.price}
          </p>
          <BookNowButton className="px-5 py-2.5" variant="outline" />
        </div>
      </div>
    </article>
  );
}

export function ServiceCategoryPanel({ category }: { category: ServiceCategory }) {
  return (
    <div>
      {category.intro ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{category.intro}</p>
      ) : null}
      {category.note ? (
        <div className="mt-5 rounded-sm border border-primary-soft/70 bg-secondary p-4 text-sm leading-relaxed text-foreground/80">
          {category.note}
        </div>
      ) : null}
      <div className="mt-4">
        {category.services.map((s) => (
          <ServiceCard key={s.name} service={s} />
        ))}
      </div>
      {category.packages ? (
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="text-2xl">{category.packages.title}</h3>
          <span className="dotted-divider mt-3" aria-hidden="true" />
          <div className="mt-4">
            {category.packages.services.map((s) => (
              <ServiceCard key={s.name} service={s} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ServiceAccordion({
  categories,
  defaultValue,
}: {
  categories: ServiceCategory[];
  defaultValue?: string | undefined;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      {...(defaultValue ? { defaultValue } : {})}
      className="w-full border-t border-border"
    >
      {categories.map((c) => (
        <AccordionItem key={c.slug} value={c.slug} className="border-b border-border">
          <AccordionTrigger className="py-6 text-left hover:no-underline">
            <span className="flex min-w-0 flex-col gap-1.5 pr-4">
              <span className="font-[family-name:var(--font-serif-display)] text-2xl leading-tight sm:text-3xl">
                {c.title}
              </span>
              <span className="text-sm font-normal leading-relaxed text-muted-foreground">
                {c.summary}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-10">
            <ServiceCategoryPanel category={c} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
