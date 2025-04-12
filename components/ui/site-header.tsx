"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-yellow-400 text-xl hover:text-yellow-300 transition-colors">
              Yoki-Portfolio
            </span>
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-4">
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
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-yellow-400"
                : "text-muted-foreground hover:text-yellow-400/80"
            }`}
          >
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルナビゲーション */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-yellow-400">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] bg-black/95 border-yellow-500/20"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/"
                  className={`w-full ${
                    pathname === "/"
                      ? "text-yellow-400"
                      : "text-muted-foreground hover:text-yellow-400/80"
                  }`}
                >
                  ホーム
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/projects"
                  className={`w-full ${
                    pathname === "/projects"
                      ? "text-yellow-400"
                      : "text-muted-foreground hover:text-yellow-400/80"
                  }`}
                >
                  プロジェクト
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/contact"
                  className={`w-full ${
                    pathname === "/contact"
                      ? "text-yellow-400"
                      : "text-muted-foreground hover:text-yellow-400/80"
                  }`}
                >
                  お問い合わせ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
