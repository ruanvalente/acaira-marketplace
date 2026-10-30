import {
  Bike,
  Car,
  Gamepad2,
  Handshake,
  Headphones,
  Laptop,
  MessageSquareLock,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sofa,
} from "lucide-react"

import type {
  Category,
  FooterColumn,
  MarketplacePolo,
  PopularSearch,
  Product,
  SellStep,
  TrustItem,
} from "../types/marketplace.types"

/**
 * Conteúdo mock da home do marketplace.
 *
 * Tudo aqui é dado de apresentação. Quando a camada de serviços do módulo de
 * produtos for integrada ao Supabase, os componentes poderão receber os mesmos
 * tipos a partir de `features/products/services/`.
 */

/**
 * Data de referência usada para os rótulos relativos enquanto os anúncios são
 * mockados.
 *
 * Cache Components exige que valores dependentes do relógio sejam tratados
 * explicitamente. Ao integrar dados reais, o tempo relativo deve ser calculado
 * em um ponto de renderização dinâmico (ou em um Client Component).
 */
export const MARKETPLACE_REFERENCE_DATE = "2026-10-29T12:00:00-03:00"

export const marketplacePolos: MarketplacePolo[] = [
  { value: "belem", label: "Belém e Região Metropolitana" },
  { value: "castanhal", label: "Castanhal e Nordeste do Pará" },
  { value: "santarem", label: "Santarém e Oeste do Pará" },
  { value: "maraba", label: "Marabá e Sudeste do Pará" },
  { value: "salinas", label: "Salinópolis e Costa Atlântica" },
]

export const popularSearches: PopularSearch[] = [
  { label: "iPhone 15", query: "iphone 15" },
  { label: "PlayStation 5", query: "playstation 5" },
  { label: "Mesa de escritório", query: "mesa de escritório" },
  { label: "Bicicleta aro 29", query: "bicicleta aro 29" },
  { label: "Geladeira Frost Free", query: "geladeira frost free" },
]

export const popularCategories: Category[] = [
  {
    id: "celulares",
    name: "Celulares",
    icon: Smartphone,
    count: 248,
    tone: "primary",
    href: "/products?category=celulares",
  },
  {
    id: "eletronicos",
    name: "Eletrônicos",
    icon: Headphones,
    count: 186,
    tone: "secondary",
    href: "/products?category=eletronicos",
  },
  {
    id: "informatica",
    name: "Informática",
    icon: Laptop,
    count: 132,
    tone: "featured",
    href: "/products?category=informatica",
  },
  {
    id: "casa-moveis",
    name: "Casa & Móveis",
    icon: Sofa,
    count: 96,
    tone: "success",
    href: "/products?category=casa-moveis",
  },
  {
    id: "veiculos",
    name: "Veículos",
    icon: Car,
    count: 74,
    tone: "warning",
    href: "/products?category=veiculos",
  },
  {
    id: "moda",
    name: "Moda",
    icon: Shirt,
    count: 63,
    tone: "primary",
    href: "/products?category=moda",
  },
  {
    id: "games",
    name: "Games",
    icon: Gamepad2,
    count: 58,
    tone: "secondary",
    href: "/products?category=games",
  },
  {
    id: "esportes",
    name: "Esportes",
    icon: Bike,
    count: 41,
    tone: "success",
    href: "/products?category=esportes",
  },
]

export const mockProducts: Product[] = [
  {
    id: "iphone-15-pro-256gb",
    title: "iPhone 15 Pro 256GB Titânio Natural",
    price: 4500,
    image: "/products/iphone.png",
    imageAlt:
      "iPhone 15 Pro na cor titânio natural, com módulo de câmeras visível",
    condition: "Seminovo",
    location: "Belém - Nazaré",
    seller: "Lucas M.",
    publishedAt: "2026-10-29T11:35:00-03:00",
    categoryId: "celulares",
  },
  {
    id: "playstation-5-dois-controles",
    title: "PlayStation 5 com 2 controles e 3 jogos",
    price: 3200,
    image: "/products/playstation.png",
    imageAlt: "Console PlayStation 5 branco acompanhado de um controle",
    condition: "Excelente",
    location: "Ananindeua - Centro",
    seller: "Rafael S.",
    publishedAt: "2026-10-29T11:18:00-03:00",
    categoryId: "games",
  },
  {
    id: "mesa-escritorio-em-l",
    title: "Mesa de escritório em L com gavetas",
    price: 480,
    image: "/products/desk.png",
    imageAlt: "Mesa de escritório em L com monitor e luminária",
    condition: "Bom estado",
    location: "Belém - Umarizal",
    seller: "Camila R.",
    publishedAt: "2026-10-29T11:02:00-03:00",
    categoryId: "casa-moveis",
  },
  {
    id: "bicicleta-aro-29-shimano",
    title: "Bicicleta aro 29 Shimano 21 marchas",
    price: 1450,
    image: "/products/bike.png",
    imageAlt: "Bicicleta aro 29 preta com detalhes em roxo",
    condition: "Seminovo",
    location: "Marituba - Centro",
    seller: "Diego A.",
    publishedAt: "2026-10-29T10:12:00-03:00",
    categoryId: "esportes",
  },
  {
    id: "geladeira-frost-free-375l",
    title: "Geladeira Frost Free 375L Inox",
    price: 1890,
    image: "/products/fridge.png",
    imageAlt: "Geladeira Frost Free inox de duas portas",
    condition: "Bom estado",
    location: "Belém - Guamá",
    seller: "Patrícia L.",
    publishedAt: "2026-10-29T09:48:00-03:00",
    categoryId: "casa-moveis",
  },
  {
    id: "macbook-air-m2-13",
    title: "MacBook Air M2 13 polegadas 8GB/256GB",
    price: 6200,
    image: "/products/macbook.png",
    imageAlt: "Notebook MacBook Air aberto com tela clara",
    condition: "Excelente",
    location: "Belém - Batista Campos",
    seller: "André P.",
    publishedAt: "2026-10-29T08:55:00-03:00",
    categoryId: "informatica",
  },
  {
    id: "sofa-tres-lugares-retratil",
    title: "Sofá 3 lugares retrátil e reclinável",
    price: 1200,
    image: "/products/sofa.png",
    imageAlt: "Sofá de três lugares verde com almofada roxa",
    condition: "Bom estado",
    location: "Ananindeua - Cidade Nova",
    seller: "Juliana T.",
    publishedAt: "2026-10-29T08:10:00-03:00",
    categoryId: "casa-moveis",
  },
  {
    id: "fone-bluetooth-anc",
    title: "Fone Bluetooth com cancelamento de ruído",
    price: 320,
    image: "/products/headphones.png",
    imageAlt: "Fone de ouvido over-ear preto com detalhes roxos",
    condition: "Novo",
    location: "Castanhal - Centro",
    seller: "Marcos V.",
    publishedAt: "2026-10-29T07:24:00-03:00",
    categoryId: "eletronicos",
  },
]

export const sellSteps: SellStep[] = [
  {
    title: "Fotografe seu item",
    description: "Use fotos claras e mostre os detalhes que importam.",
  },
  {
    title: "Publique em 2 minutos",
    description: "Informe preço, estado e localização. Sem burocracia.",
  },
  {
    title: "Negocie pelo chat",
    description: "Converse com quem está perto e combine a entrega.",
  },
]

export const trustItems: TrustItem[] = [
  {
    title: "Negociação direta, sem taxas abusivas",
    description:
      "Você negocia direto com o comprador e recebe o valor combinado. Sem comissão sobre a venda.",
    icon: Handshake,
    tone: "primary",
  },
  {
    title: "Comunidade verificada",
    description:
      "Perfis com informações reais e histórico de uso para você saber com quem está negociando.",
    icon: ShieldCheck,
    tone: "success",
  },
  {
    title: "Chat seguro em tempo real",
    description:
      "Converse sobre o anúncio dentro da plataforma, com histórico e sem expor seu telefone.",
    icon: MessageSquareLock,
    tone: "secondary",
  },
]

export const marketplaceFooterColumns: FooterColumn[] = [
  {
    title: "Sobre a Ver-o-Preço",
    links: [
      { label: "Início", href: "/" },
      { label: "Sobre o Ver-o-Preço", href: "/about" },
      { label: "Como funciona", href: "/about#como-funciona" },
      { label: "Segurança", href: "/about#seguranca" },
      { label: "Polos no Pará", href: "/about#polos" },
    ],
  },
  {
    title: "Para compradores",
    links: [
      { label: "Explorar produtos", href: "/" },
      { label: "Categorias", href: "/#categorias" },
      { label: "Como comprar", href: "/about#como-funciona" },
      { label: "Chat seguro", href: "/about#seguranca" },
    ],
  },
  {
    title: "Para vendedores",
    links: [
      { label: "Anunciar produto", href: "/register" },
      { label: "Criar conta", href: "/register" },
      { label: "Entrar", href: "/login" },
      { label: "Minha conta", href: "/dashboard" },
    ],
  },
  {
    title: "Polos atendidos (PA)",
    links: [
      { label: "Belém", href: "/products?location=belem" },
      { label: "Ananindeua", href: "/products?location=ananindeua" },
      { label: "Castanhal", href: "/products?location=castanhal" },
      { label: "Santarém", href: "/products?location=santarem" },
      { label: "Marabá", href: "/products?location=maraba" },
    ],
  },
]

export const marketplaceFooterLegalLinks = [
  { label: "Privacidade", href: "/privacy" },
  { label: "Termos de uso", href: "/terms" },
  { label: "Política de cookies", href: "/cookies" },
] as const

export const TOTAL_RECENT_LISTINGS = 1248
