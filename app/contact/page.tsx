import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="mx-auto">
      {/* ヘッダーセクション */}
      <section className="relative overflow-hidden  py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-[64rem] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              お問い合わせ
            </h1>
            <p className="mt-6 text-lg text-zinc-400 md:text-xl max-w-[42rem] mx-auto">
              お仕事のご依頼は、Xのダイレクトメッセージにてお願いいたします。
            </p>
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://x.com/menemgxR4mN2KQc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                  X（旧Twitter）でメッセージを送る
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 背景グラデーション */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900" />
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-zinc-900/20 blur-[100px]" /> */}
      </section>

      {/* フォームセクション */}
      {/* <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-[42rem] bg-zinc-800/50 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                お問い合わせフォーム
              </CardTitle>
              <CardDescription className="text-zinc-400">
                以下のフォームに必要事項をご記入ください。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white"
                  >
                    お名前
                  </label>
                  <Input
                    id="name"
                    placeholder="山田 太郎"
                    required
                    className="bg-zinc-900 border-zinc-700 text-white focus:border-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    メールアドレス
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="taro@example.com"
                    required
                    className="bg-zinc-900 border-zinc-700 text-white focus:border-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    メッセージ
                  </label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    required
                    className="min-h-[150px] bg-zinc-900 border-zinc-700 text-white focus:border-white placeholder:text-zinc-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-white/90"
                >
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* 追加情報セクション */}
      {/* <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[64rem] text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              他の連絡方法
            </h2>
            <p className="mt-6 text-lg text-zinc-400 max-w-[42rem] mx-auto">
              フォーム以外にも、以下の方法でご連絡いただけます。
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-[64rem] mx-auto">
              <div className="rounded-lg bg-zinc-800/30 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">メール</h3>
                <p className="mt-2 text-zinc-400">info@example.com</p>
              </div>

              <div className="rounded-lg bg-zinc-800/30 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">Twitter</h3>
                <p className="mt-2 text-zinc-400">@yourusername</p>
              </div>

              <div className="rounded-lg bg-zinc-800/30 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">GitHub</h3>
                <p className="mt-2 text-zinc-400">github.com/yourusername</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
