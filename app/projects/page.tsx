import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 仮のプロジェクトデータ
const projects = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description: "Next.jsとTailwind CSSを使用した個人ポートフォリオサイト",
    imageUrl:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2940&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://your-portfolio.com",
  },
  {
    id: 2,
    title: "タスク管理アプリ",
    description:
      "ReactとFirebaseを使用したリアルタイムタスク管理アプリケーション",
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2944&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://your-task-manager.com",
  },
  {
    id: 3,
    title: "ECサイト",
    description: "Next.jsとStripeを使用したECサイト",
    imageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2940&auto=format&fit=crop",
    githubUrl: "https://github.com/yourusername/ecommerce",
    demoUrl: "https://your-ecommerce.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto">
      {/* ヘッダーセクション */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-[64rem] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              プロジェクト
            </h1>
            <p className="mt-6 text-lg text-zinc-400 md:text-xl max-w-[42rem] mx-auto">
              現在、プロジェクトを開発中です。もうしばらくお待ちください。
            </p>
          </div>
        </div>

        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900" />
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-zinc-900/20 blur-[100px]" />
      </section>

      {/* プロジェクト一覧セクション */}
      <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[64rem] text-center">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="text-6xl text-zinc-700">🚧</div>
              <h2 className="text-3xl font-bold text-zinc-500">現在開発中</h2>
              <p className="text-zinc-400">
                プロジェクトは現在開発中です。完成までもうしばらくお待ちください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
