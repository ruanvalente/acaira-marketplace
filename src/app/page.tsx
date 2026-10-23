import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="container mx-auto flex max-w-2xl flex-col items-center text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Açaíra
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Marketplace regional simples, local, moderno e confiável focado no Pará.
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          Encontre o que você precisa. Venda o que não usa.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Explorar produtos</Button>
          <Button size="lg" variant="outline">
            Anunciar produto
          </Button>
        </div>
      </div>
    </main>
  );
}
