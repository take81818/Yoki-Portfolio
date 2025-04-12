"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-yellow-400 text-xl hover:text-yellow-300 transition-colors">
              Yoki-Portfolio
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-yellow-400"
                  : "text-muted-foreground hover:text-yellow-400/80"
              }`}
            >
              ホーム
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                pathname === "/projects"
                  ? "text-yellow-400"
                  : "text-muted-foreground hover:text-yellow-400/80"
              }`}
            >
              プロジェクト
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
            >
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
