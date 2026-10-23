# DESIGN.md — Açaíra Design System

## 1. Purpose

This document is the visual source of truth for the Açaíra marketplace.

Açaíra is a regional marketplace initially focused on Pará, Brazil. Its visual identity should communicate:

- Regional identity;
- Trust;
- Simplicity;
- Accessibility;
- Modern technology;
- Community;
- Ease of buying and selling.

The interface may take conceptual inspiration from marketplaces such as OLX and Mercado Livre, but must not reproduce their visual identity, layouts, components, copy, or interaction patterns.

The design should feel like a **modern Brazilian marketplace with a subtle Pará/Amazon identity**.

---

# 2. Design Principles

## 2.1 Simple

The user should understand the purpose of every screen immediately.

Avoid:

- Excessive decoration;
- Unnecessary animations;
- Complex navigation;
- Excessive cards;
- Dense information;
- Unnecessary modal dialogs.

Prefer:

- Clear hierarchy;
- Short labels;
- Familiar interactions;
- Progressive disclosure;
- Strong visual grouping.

---

## 2.2 Regional Without Being Stereotypical

The regional identity should be present primarily through:

- Color;
- Naming;
- Microcopy;
- Subtle visual references;
- Photography when appropriate.

Avoid turning the interface into a decorative representation of Pará.

The product should look like a professional technology platform first and a regional product second.

---

## 2.3 Trustworthy

Marketplace users need confidence when interacting with sellers.

The design should communicate:

- Transparency;
- Clear pricing;
- Seller identity;
- Product information;
- Safe interactions;
- Predictable behavior.

Avoid visual patterns that resemble gambling, aggressive advertising, or low-trust marketplaces.

---

## 2.4 Mobile First

The primary experience must work exceptionally well on mobile.

Design from the smallest practical viewport upward.

Desktop layouts should enhance the experience rather than define it.

---

## 2.5 Accessible

Accessibility is part of the visual system.

Every component should consider:

- Color contrast;
- Keyboard navigation;
- Focus visibility;
- Semantic structure;
- Screen readers;
- Touch targets;
- Error messages;
- Reduced motion.

Target WCAG 2.2 AA whenever practical.

---

# 3. Brand Concept

## 3.1 Name

Working product name:

**Açaíra**

The name combines a regional reference to açaí with a short, memorable marketplace-oriented identity.

The name should be presented as a technology brand rather than as a literal representation of the fruit.

---

## 3.2 Brand Personality

Açaíra should feel:

- Local;
- Friendly;
- Reliable;
- Modern;
- Practical;
- Approachable;
- Human.

Avoid:

- Corporate coldness;
- Excessive luxury;
- Childish visuals;
- Excessive Amazon clichés;
- Visual noise.

---

# 4. Visual Direction

The visual language combines:

```text
Amazon/Pará identity
        +
Modern marketplace
        +
Clean SaaS interface
```

The resulting UI should use:

- Deep greens;
- Açaí-inspired purples;
- Warm neutral surfaces;
- Dark neutral text;
- Restrained borders;
- Soft elevation;
- Rounded but not excessively rounded components.

---

# 5. Color System

The color system should be implemented through semantic design tokens.

Do not hard-code colors inside feature components.

Use CSS variables/Tailwind tokens.

## 5.1 Primary — Amazon Green

Primary green represents:

- Nature;
- Pará;
- Trust;
- Growth;
- Action.

Suggested base:

```text
Primary 500: #0F766E
```

Recommended semantic usage:

```text
primary
primary-foreground
primary-hover
primary-active
primary-muted
```

The exact production values may be adjusted during visual validation.

---

## 5.2 Secondary — Açaí Purple

Purple provides the regional identity associated with açaí.

Suggested base:

```text
Secondary 500: #6B21A8
```

Use purple selectively for:

- Secondary actions;
- Highlights;
- Category accents;
- Marketplace branding;
- Decorative emphasis.

Do not use purple for every interactive element.

---

## 5.3 Pará-Inspired Green

A deeper green can be used for strong brand moments.

Suggested:

```text
Green 700: #166534
```

Use for:

- Brand accents;
- Positive states;
- Seller status;
- Important marketplace indicators.

---

## 5.4 Backgrounds

Prefer warm neutral backgrounds rather than pure white everywhere.

Suggested conceptual hierarchy:

```text
Background
Surface
Surface Elevated
Surface Muted
Border
```

Example direction:

```text
Background: warm neutral
Surface: white
Surface Muted: soft neutral
Border: neutral gray
```

The exact values should be defined as design tokens and validated for contrast.

---

## 5.5 Semantic Colors

Use semantic tokens:

```text
success
warning
destructive
info
```

Suggested direction:

```text
Success  → green
Warning  → amber
Error    → red
Info     → blue
```

Semantic colors should not replace the brand palette.

---

# 6. Color Usage Rules

## Do

- Use green for primary actions.
- Use purple as a secondary brand accent.
- Use neutral backgrounds to create hierarchy.
- Use semantic colors only for semantic meaning.
- Maintain WCAG contrast.

## Do Not

- Use green and purple everywhere simultaneously.
- Use saturated gradients as the primary visual language.
- Use color as the only indicator of status.
- Create rainbow-like category interfaces.
- Use brand colors for destructive actions.

---

# 7. Typography

Typography should prioritize readability.

Preferred approach:

```text
Font family:
Inter / Geist / system sans-serif
```

The final font should be selected based on Next.js and project configuration.

## Type Scale

Use a restrained hierarchy:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Label
```

Recommended principles:

- Strong headings;
- Comfortable body line-height;
- Short labels;
- Avoid extremely thin font weights;
- Avoid excessive uppercase text.

---

# 8. Typography Hierarchy

### Page title

Used for:

- Dashboard;
- Product pages;
- Main sections.

### Section title

Used for:

- Product sections;
- Dashboard widgets;
- Related products.

### Body

Used for:

- Product descriptions;
- Explanations;
- Forms.

### Caption

Used for:

- Timestamps;
- Metadata;
- Secondary information.

---

# 9. Spacing

Use a consistent spacing scale.

Prefer Tailwind's spacing system.

Conceptual scale:

```text
4
8
12
16
20
24
32
40
48
64
80
96
```

Avoid arbitrary values unless they solve a documented design requirement.

---

# 10. Border Radius

Use moderate rounding.

Recommended semantic tokens:

```text
radius-sm
radius-md
radius-lg
radius-xl
```

General direction:

```text
Inputs      → md
Buttons     → md
Cards       → lg
Dialogs     → lg/xl
Avatars     → full
Badges      → full
```

Avoid making every component extremely rounded.

---

# 11. Elevation

The UI should use subtle elevation.

Prefer:

- Borders;
- Surface contrast;
- Small shadows.

Avoid heavy shadows.

Cards should generally feel integrated with the page rather than floating dramatically.

---

# 12. Layout

## 12.1 Container

Use a consistent responsive container.

Conceptual behavior:

```text
Mobile:
full width + horizontal padding

Tablet:
constrained content

Desktop:
max-width container

Large desktop:
preserve readable content width
```

Avoid extremely wide content areas for forms and reading-heavy screens.

---

# 13. Grid

Marketplace product grids should adapt by viewport.

Conceptual behavior:

```text
Mobile      → 1–2 columns
Tablet      → 2–3 columns
Desktop     → 3–5 columns
Large       → 4–6 columns depending on available width
```

The exact number should be determined by product card readability rather than arbitrary breakpoints.

---

# 14. Responsive Breakpoints

Use Tailwind's standard responsive system unless the product demonstrates a real need for custom breakpoints.

Design around:

```text
Mobile
sm
md
lg
xl
2xl
```

Do not design separate desktop and mobile applications.

Build responsive components.

---

# 15. Navigation

## Public Navigation

Desktop:

```text
Logo
Search
Categories
Favorites
Login / Account
Sell
```

Mobile:

```text
Logo
Search
Menu / Account
```

The mobile header should prioritize search and product discovery.

---

# 16. Authenticated Navigation

Authenticated users should have access to:

```text
Dashboard
Explore
My Listings
Favorites
Messages
Profile
Settings
```

Desktop can use a sidebar.

Mobile should use:

- Bottom navigation where appropriate;
- Drawer;
- Compact header navigation.

Do not force desktop sidebars into narrow mobile screens.

---

# 17. Marketplace Home

The public marketplace should prioritize product discovery.

Suggested hierarchy:

```text
Header
↓
Search
↓
Categories
↓
Featured / Recent Listings
↓
Filters
↓
Product Grid
```

The home screen should not be dominated by marketing content.

The marketplace itself is the main product.

---

# 18. Search

Search is a primary interaction.

Requirements:

- Easy to find;
- Large enough touch target;
- Clear focus state;
- Search icon;
- Clear/reset action when applicable.

On mobile, search should remain accessible without requiring excessive navigation.

---

# 19. Filters

Desktop:

- Inline or sidebar filters.

Mobile:

- Filter drawer/sheet.

Filters may include:

```text
Category
Price
Condition
Location
Sort
```

Do not overwhelm users with filters that do not improve marketplace discovery.

---

# 20. Product Card

The product card is one of the most important components.

It should prioritize:

```text
Image
Title
Price
Location
Condition
Favorite
```

Optional:

```text
Seller
Timestamp
```

Recommended hierarchy:

```text
┌───────────────────────┐
│                       │
│      Product Image    │
│                       │
├───────────────────────┤
│ Product title         │
│ R$ 1.250,00           │
│ Location · Condition  │
│                       │
└───────────────────────┘
```

Do not place the entire product description inside the card.

---

# 21. Product Details

The product page should have a clear hierarchy:

```text
Gallery
↓
Title
↓
Price
↓
Condition / Location
↓
Description
↓
Seller
↓
Contact / Chat
↓
Related products
```

The primary action should be obvious.

For authenticated users:

**Conversar com vendedor**

For unauthenticated users:

**Entrar para conversar**

---

# 22. Seller Information

Seller information should communicate trust without exposing unnecessary private data.

Show:

- Display name;
- Avatar;
- Location;
- Online/offline state;
- Basic profile information.

Email and phone should not automatically dominate the product page.

Chat should be the primary contact mechanism.

---

# 23. Online Status

Use a small status indicator.

Example:

```text
● Online
○ Offline
```

Do not rely only on color.

Use text or accessible labels.

The indicator should be subtle rather than visually dominant.

---

# 24. Chat Design

The chat should feel familiar and lightweight.

## Conversation List

Show:

- Avatar;
- Name;
- Product context;
- Last message;
- Timestamp;
- Unread count;
- Online status.

## Chat Window

Structure:

```text
Header
Product Context
Message List
Message Composer
```

---

# 25. Message Bubbles

Messages should clearly distinguish:

```text
Own message
Other user's message
```

Use subtle background differences rather than highly saturated colors.

Messages should support:

- Text;
- Images;
- Timestamp;
- Read status.

---

# 26. Chat Image Messages

Image messages should:

- Show preview;
- Preserve aspect ratio;
- Open larger when selected;
- Show loading state;
- Show upload failure state.

Avoid displaying massive images that break the conversation layout.

---

# 27. Dashboard

The dashboard should be task-oriented.

Suggested structure:

```text
Welcome / Summary
↓
Quick Actions
↓
Listing Metrics
↓
Recent Listings
↓
Recent Conversations
```

Important actions:

- Anunciar produto;
- Ver meus anúncios;
- Ver mensagens.

Avoid turning the dashboard into an analytics-heavy system during the MVP.

---

# 28. Listing Creation

The listing form should be simple and progressive.

Recommended sections:

```text
Basic information
Images
Pricing
Category
Condition
Location
Contact preferences
Preview
```

Use clear validation.

Do not create extremely long forms without grouping.

---

# 29. Image Upload UX

The upload area should clearly communicate:

- Accepted formats;
- Maximum file size;
- Number of images;
- Upload progress;
- Primary image;
- Reordering;
- Removal.

Example:

```text
[ + Adicionar fotos ]

Arraste ou selecione imagens
```

On mobile, use the device's native image selection experience where possible.

---

# 30. Forms

Forms should use:

- Explicit labels;
- Helpful descriptions;
- Inline validation;
- Error messages;
- Loading states;
- Success feedback.

Never rely solely on placeholder text as the field label.

---

# 31. Buttons

Button hierarchy:

### Primary

Main action.

Example:

```text
Anunciar produto
Conversar com vendedor
Salvar alterações
```

### Secondary

Alternative action.

### Ghost

Low-emphasis actions.

### Destructive

Actions such as:

```text
Excluir anúncio
Remover conta
```

Destructive actions must use semantic destructive styling rather than brand purple/green.

---

# 32. Cards

Cards should be used when grouping related information.

Good use cases:

- Product cards;
- Seller summary;
- Dashboard metrics;
- Conversation previews;
- Listing management.

Do not put every piece of content inside a card.

---

# 33. Empty States

Every major collection needs an intentional empty state.

Examples:

### Favorites

```text
Você ainda não salvou nenhum produto.
```

### Listings

```text
Você ainda não publicou nenhum anúncio.
```

### Messages

```text
Suas conversas aparecerão aqui.
```

Empty states should include an optional action when useful.

---

# 34. Loading States

Prefer skeletons for content-heavy interfaces.

Examples:

- Product grid skeleton;
- Product detail skeleton;
- Conversation list skeleton;
- Dashboard cards skeleton.

Avoid blocking spinners for entire pages when partial content can be displayed.

---

# 35. Error States

Errors should be:

- Clear;
- Human-readable;
- Actionable.

Example:

```text
Não foi possível carregar os anúncios.

Tente novamente.
```

Do not expose:

- SQL errors;
- Supabase internals;
- Stack traces;
- Internal IDs.

---

# 36. Toasts

Use toasts for short-lived feedback.

Good:

```text
Produto salvo.
Anúncio publicado.
Produto adicionado aos favoritos.
```

Do not use toasts as the only way to communicate critical errors.

---

# 37. Modals and Drawers

Use dialogs for:

- Confirmation;
- Focused actions;
- Small forms.

Use drawers/sheets for:

- Mobile filters;
- Mobile navigation;
- Contextual panels.

Avoid nested modal flows.

---

# 38. Icons

Use a consistent icon library compatible with the project's UI system.

Icons should:

- Have consistent stroke weight;
- Include accessible labels when needed;
- Not replace important text;
- Be used consistently.

Do not use emojis as interface icons.

---

# 39. Images

Marketplace imagery should be the visual focus.

Product images should:

- Preserve aspect ratio;
- Use appropriate object-fit behavior;
- Avoid unnecessary cropping;
- Use optimized Next.js image handling where appropriate.

Use neutral placeholders when no image exists.

---

# 40. Motion

Motion should be subtle.

Use animation for:

- Opening/closing dialogs;
- Drawer transitions;
- Loading feedback;
- Small interaction feedback.

Avoid:

- Excessive page transitions;
- Continuous animations;
- Distracting hover effects.

Respect:

```text
prefers-reduced-motion
```

---

# 41. Accessibility

Every interactive component must support:

- Keyboard navigation;
- Visible focus;
- Appropriate ARIA where necessary;
- Semantic HTML;
- Screen-reader labels;
- Sufficient contrast.

Touch targets should generally be at least approximately 44×44px.

Do not use color as the only indication of:

- Online state;
- Error;
- Success;
- Selected state.

---

# 42. Dark Mode

Dark mode may be introduced after the core light theme is stable.

If implemented, dark mode must use semantic tokens rather than replacing colors individually throughout components.

The purple/green identity should remain recognizable without becoming excessively saturated.

---

# 43. Design Tokens

The design system should be expressed through semantic tokens.

Conceptual structure:

```text
colors/
├── background
├── foreground
├── primary
├── secondary
├── muted
├── accent
├── destructive
├── border
└── ring
```

And:

```text
spacing
radius
typography
shadow
breakpoints
```

Components should consume semantic tokens rather than hard-coded visual values.

---

# 44. Component Architecture

Use shadcn/ui as the foundation for generic UI primitives.

Recommended relationship:

```text
shadcn/ui
    ↓
Shared UI primitives
    ↓
Feature components
    ↓
Pages
```

Example:

```text
Button
  ↓
ChatSendButton
  ↓
ChatComposer
  ↓
ChatPage
```

Feature components should compose primitives rather than recreate them.

---

# 45. Feature UI Organization

Feature-specific UI should live inside the feature.

Example:

```text
features/products/
├── components/
│   ├── product-card.tsx
│   ├── product-grid.tsx
│   ├── product-gallery.tsx
│   └── product-filters.tsx
```

Do not move these components to the global UI directory simply because they are visually reusable.

---

# 46. States as Part of Design

Every component should consider:

```text
default
hover
focus
active
disabled
loading
empty
error
success
```

Data-driven components should also consider:

```text
no data
partial data
long content
missing image
slow network
permission denied
```

---

# 47. Content and Microcopy

The language should be:

- Brazilian Portuguese;
- Clear;
- Friendly;
- Direct;
- Human.

Avoid overly corporate terminology.

Prefer:

```text
Anunciar produto
```

instead of:

```text
Criar novo listing
```

Prefer:

```text
Conversar com vendedor
```

instead of:

```text
Iniciar sessão de comunicação
```

Technical terminology should not appear in user-facing interfaces.

---

# 48. Regional Microcopy

Regional references should be subtle.

Possible examples:

```text
Encontre o que você procura.
Venda o que está parado.

Tem algo para vender?
Anuncie no Açaíra.

Achou o que queria?
Converse com o vendedor.
```

Avoid forcing regional expressions into every screen.

---

# 49. Marketplace Trust Patterns

Use visual cues such as:

- Seller profile;
- Account information;
- Listing date;
- Location;
- Product condition;
- Clear price;
- Online status;
- Report action where applicable.

Do not visually imply that a seller is verified unless there is an actual verification system.

---

# 50. Responsive Chat

Desktop:

```text
┌────────────────┬──────────────────────────┐
│ Conversations  │ Chat                     │
│                │                          │
│ Seller A       │ Messages                 │
│ Seller B       │                          │
│ Seller C       │                          │
│                │ Composer                 │
└────────────────┴──────────────────────────┘
```

Mobile:

```text
Conversation List
        ↓
Chat
        ↓
Full viewport
```

Use route-based or state-based navigation appropriate to Next.js.

---

# 51. Responsive Product Details

Desktop:

```text
┌─────────────────────┬─────────────────────┐
│                     │ Product information │
│ Gallery             │ Price               │
│                     │ Seller              │
│                     │ Contact             │
└─────────────────────┴─────────────────────┘
```

Mobile:

```text
Gallery
↓
Title
↓
Price
↓
Information
↓
Seller
↓
Primary action
```

The primary action should remain easy to reach.

---

# 52. Design Anti-Patterns

Avoid:

- Excessive gradients;
- Glassmorphism as the default visual language;
- Huge rounded cards;
- Excessive shadows;
- Tiny text;
- Dense dashboards;
- Excessive badges;
- Too many colors;
- Long forms;
- Desktop-first layouts;
- Generic AI-generated SaaS aesthetics;
- Unnecessary decorative illustrations;
- Emoji-based UI icons.

---

# 53. Visual Quality Checklist

Before considering a UI feature complete:

```text
[ ] Visual hierarchy is clear
[ ] Typography is consistent
[ ] Spacing follows tokens
[ ] Colors use semantic tokens
[ ] Brand identity is subtle and consistent
[ ] Mobile layout works
[ ] Tablet layout works
[ ] Desktop layout works
[ ] Loading state exists
[ ] Empty state exists
[ ] Error state exists
[ ] Focus state exists
[ ] Accessibility reviewed
[ ] Touch targets are adequate
[ ] No horizontal overflow
[ ] No unnecessary visual noise
```

---

# 54. Design Review Checklist

Before merging a significant visual change, verify:

### Brand

- Does it feel like Açaíra?
- Is the Pará/Açaí identity present without being excessive?

### UX

- Is the primary action obvious?
- Can a new user understand the screen immediately?

### Responsive

- Does mobile receive the same quality of attention as desktop?

### Accessibility

- Can the feature be used with keyboard navigation?
- Is contrast sufficient?
- Are states understandable without color alone?

### Consistency

- Are existing components reused?
- Are tokens used instead of arbitrary values?

### Performance

- Are images optimized?
- Are unnecessary client components avoided?

---

# 55. Source of Truth

This file is the source of truth for visual and interaction design.

When implementing UI:

```text
AGENTS.md
    ↓
DESIGN.md
    ↓
Feature Plan
    ↓
Implementation
```

If an existing component conflicts with the design system, prefer updating the component systematically rather than introducing a one-off variation.

---

# 56. Final Design Direction

Açaíra should look like:

> A modern, trustworthy and simple Brazilian marketplace with a subtle Pará/Açaí visual identity.

The design should balance:

```text
Regional identity
        +
Modern technology
        +
Marketplace usability
        +
Accessibility
        +
Simplicity
```

The visual system must remain coherent as the product grows from MVP into additional modules.
