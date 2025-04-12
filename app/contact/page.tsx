import { Button } from "@/components/ui/button";
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
      </section>
    </div>
  );
}
