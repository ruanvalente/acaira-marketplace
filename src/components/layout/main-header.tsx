import Link from "next/link";

export function MainHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Açaíra
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">
            Explorar
          </Link>
          <Link href="/" className="hover:underline">
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
