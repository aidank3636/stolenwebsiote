import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Aidan Kleinhenz",
  },
  links: [
    {
      text: "LinkedIn",
      url: "www.linkedin.com/in/aidan-kleinhenz-b62210234",
    },
    {
      text: "X",
      url: "https://x.com/",
    },
  ],
}
