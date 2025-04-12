import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-black py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-[64rem] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              YOKI'S　<span className="text-yellow-400">PORTFOLIO</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 md:text-xl">
              フルスタックの個人開発を行う大学生のポートフォリオサイト
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all duration-300"
              >
                <Link href="/projects">プロジェクトを見る</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900" />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />
      </section>

      {/* 自己紹介セクション */}
      <section className="mx-auto max-w-[64rem] px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold text-white relative pb-2 mb-4">
              自己紹介
              <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-yellow-400/30"></span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              私は
              <span className="text-yellow-400/90">
                東京科学大学（旧・東京工業大学）のデータサイエンス系研究室
              </span>
              に所属する大学生で、最適化問題や機械学習を中心に研究しています。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-yellow-400/90">フルスタックの個人開発</span>
              に興味があり、AIツールを活用しながら、Webアプリケーションの設計から実装・デプロイまでを一人で行っています。{" "}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              また、
              <span className="text-yellow-400/90">
                Webマーケティング会社での半年間のインターン経験
              </span>
              があり、ある商品の責任者として、検索広告向けのLP企画・制作・運用までを担当。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              WEB開発・データサイエンス・マーケティングの3軸を活かし、
              <br />「
              <span className="text-yellow-400/90">
                ユーザーのインサイトを読み取り、課題を解決するプロダクト
              </span>
              」を形にすることを目標に、勉強をしています。{" "}
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-zinc-700 hover:border-yellow-400/50 hover:bg-yellow-400/5 hover:shadow-[0_0_10px_rgba(250,204,21,0.1)] transition-all duration-300 px-4 py-2"
              >
                <Link
                  href="https://x.com/menemgxR4mN2KQc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  
                  <span className="font-medium">X（旧Twitter）</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-zinc-700 hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-300">
              <Image
                src="/images/profile.png"
                alt="プロフィール画像"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-white">よき</h3>
          </div>
        </div>
      </section>

      {/* スキルセットセクション */}
      <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[64rem] text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl relative inline-block pb-2 mb-4">
              スキルセット
              <span className="absolute bottom-0 left-1/2 w-32 h-0.5 bg-yellow-400/30 -translate-x-1/2"></span>
            </h2>
            <p className="mt-4 text-zinc-400">
              私が持つ技術スタックとスキルをご紹介します。
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[90rem]">
            <Card className="bg-zinc-800/50 border-zinc-700 text-white hover:border-yellow-400/20 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-yellow-400">
                  エンジニアリング
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  フルスタック開発
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>
                      フロントエンド: React, Next.js, TypeScript, Tailwind CSS
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>バックエンド: Node.js</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>データベース: Supabase, Prisma ORM</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>インフラ: Vercel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800/50 border-zinc-700 text-white hover:border-yellow-400/20 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  データサイエンス
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Physon, 数学
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>東京科学大学（旧：東京工業大学）</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>
                      最適化問題と機械学習を研究する研究室に、2025年4月に所属
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>現在勉強中</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800/50 border-zinc-700 text-white hover:border-yellow-400/20 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  マーケティング
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Google広告,Figma,LP制作
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>半年間WEBマーケティング会社で長期インターン</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>責任者として１つの案件を担当</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>主にGoogle検索広告で、記事LPを企画・制作・運用</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0 text-yellow-400/50">•</span>
                    <span>社内の月間インターンMVPを獲得</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
