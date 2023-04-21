---
title: "Next.js Tips: Building a Link Function That Opens Links in a New Tab"
subtitle: "How to properly utilize links in NextJs"
date: "2023-04-12"
---

<!--
https://www.eddymens.com/blog/how-to-make-a-markdown-link-open-in-another-tab -->

While working on the development of the Help-Me-Choose app, I noticed that all the hyperlinks I had incorporated resulted in instant redirection to related YouTube videos or guide links. Although this may not be an issue if the endpoint suits the user's requirements perfectly, in most cases, users may want to explore other builds, check out additional options, or save the video/guide link for later reference. Additionally, it is not a good user experience to expect users to manually copy a page or repeatedly hit the back button.

My intention was to replicate the functionality I had observed on well-designed websites and web applications, where clicking on a hyperlink would open a new tab within the same browser. This allows users to explore the linked content while keeping the Help-Me-Choose application open. After conducting some research, I discovered that the solution for achieving this behavior with traditional anchor tags is quite straightforward:

```bash
<a href="yourlink" target="_blank"/>
```

target="\_blank" when added to an anchor tags forces the desired effect. However, adding this same attribute to a NextJS Link component nothing will occur.

I discovered a quick solution. Attributing legacy behavior attribute to the NextJs link component. And then placing the anchor tag within the NextJS Link component with the target="\_blank" attribute.

```bash
import Link from "next/link";
...
<Link href={video.link} legacyBehavior>
    <a
    target="_blank"
    rel="noopener noreferrer"
    className=""
    >
        <p>
        {video.title}
        </p>
    </a>
</Link>
```

While this method may be effective, it is unnecessarily lengthy for the intended result. It can also become tedious when numerous anchor tags and new tab redirects are required. Moreover, the new tab redirection results in a complete page load, which surpasses the capabilities of NextJS components. The use of the Link component in this scenario does not offer any performance benefits to the end-user since it will trigger a full site reload on a new browser tab.

## Alternatives

For projects that require scalability, an alternative method is to create an Anchor Component. A basic example to get started is provided below:

```bash
// Anchor.styles.ts
import styled from 'styled-components'

export const Anchor = styled.a`
  color: inherit;
  height: fit-content;
  text-decoration: none;
  width: fit-content;

  :visited,
  :hover,
  :active {
    color: inherit;
  }

  > * {
    color: inherit;
  }
```

```bash
// Anchor.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

type AnchorProps = {
  href: string
  children: ReactNode
  passHref?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export function Anchor({ href, passHref, target, children }: AnchorProps) {
  return (
    <Link href={href} passHref={passHref}>
      <S.Anchor href={href} target={target}>
        {children}
      </S.Anchor>
    </Link>
  )
}
```

There is often no single "right" way to approach programming, as what works best can vary depending on the project, context, and personal preferences. While there may be more efficient and optimized methods available, it is ultimately important to find a solution that works well for you in order to achieve success.
