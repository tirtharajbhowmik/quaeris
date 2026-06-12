"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/config/brand.config";

interface AccordionProps {
  items: FaqItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const defaultValue = items.find((i) => i.defaultOpen)?.id ?? items[0]?.id;

  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      defaultValue={defaultValue}
      className="accordion"
    >
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.id}
          value={item.id}
          className="accordion-item"
        >
          <RadixAccordion.Header asChild>
            <div>
              <RadixAccordion.Trigger className="accordion-trigger">
                <span className="accordion-question">{item.question}</span>
                <span className="accordion-icon" aria-hidden="true">
                  <ChevronDown aria-hidden="true" style={{ width: 16, height: 16 }} />
                </span>
              </RadixAccordion.Trigger>
            </div>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content" id={item.id}>
            <div style={{ paddingBottom: "var(--space-5)", color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.7 }}>
              {item.answer}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
