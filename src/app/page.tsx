import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Bot,
  CheckCircle2,
  ChevronRight,
  DatabaseZap,
  LineChart,
  MessageCircleQuestion,
  MessageSquareText,
  PhoneCall,
  Search,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrandMark } from "@/components/marketing/brand-mark";
import { Reveal } from "@/components/marketing/motion";
import { ScreenTabs } from "@/components/marketing/screen-tabs";
import { SectionHeading } from "@/components/marketing/section-heading";

const navItems = [
  { label: "機能", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const challengeGroups = [
  {
    label: "営業メンバー側",
    description: "日々の商談で、成長のきっかけを掴みきれていない。",
    items: [
      {
        title: ["商談後の振り返りが", "できていない"],
        icon: MessageSquareText,
        image: "/1599%20(1).png",
      },
      {
        title: ["勝ちパターンがなく", "毎回ゼロから考えている"],
        icon: Sparkles,
        image: "/1182%20(1).png",
      },
      {
        title: ["ぶっつけ本番で", "商談に臨んでいる"],
        icon: Bot,
        image: "/1198.png",
      },
      {
        title: ["抜け漏れや", "引き継ぎが不安"],
        icon: DatabaseZap,
        image: "/217%20(1).png",
      },
    ],
  },
  {
    label: "マネジメント側",
    description: "育成と標準化を進めたいのに、現場の中身が見えにくい。",
    items: [
      {
        title: ["トップに依存していて", "組織として再現性がない"],
        icon: UsersRound,
        image: "/736.png",
      },
      {
        title: ["商談の中身が見えず", "適切なフォローができない"],
        icon: Search,
        image: "/738.png",
      },
      {
        title: ["育成に時間がかかりすぎて", "現場の負担が大きい"],
        icon: LineChart,
        image: "/708.png",
      },
      {
        title: ["マニュアルやノウハウが", "浸透していない"],
        icon: BookOpenCheck,
        image: "/1642.png",
      },
    ],
  },
];

const aboutCards = [
  {
    description: ["営業状況を", "リアルタイムで可視化"],
    image: "/702.png",
  },
  {
    description: ["勝ちパターンを蓄積し", "組織の再現性を高める"],
    image: "/1416.png",
  },
  {
    description: ["商談のたびに学び", "成長できる"],
    image: "/1838.png",
  },
  {
    description: ["必要な情報に", "すぐアクセスできる"],
    image: "/1394.png",
  },
];

const features = [
  {
    title: "AI商談分析",
    description: "商談音声やテキストをもとに、要約・評価・改善ポイントを自動生成。",
    items: ["要約", "評価", "改善ポイント"],
    icon: BarChart3,
  },
  {
    title: "AIテレアポ分析",
    description: "アポ打診、ヒアリング、反論対応などを分析。",
    items: ["アポ打診", "ヒアリング", "反論対応"],
    icon: PhoneCall,
  },
  {
    title: "AIロープレ",
    description: "AI顧客との実践練習とスコアリング。",
    items: ["AI顧客との練習", "スコアリング", "反復学習"],
    icon: Bot,
  },
  {
    title: "営業マネジメント",
    description: "チーム全体の状況、スコア、改善状況を可視化。",
    items: ["チーム状況", "スコア", "改善状況"],
    icon: LineChart,
  },
  {
    title: "顧客カルテ",
    description: "顧客情報、温度感、契約状況、次回アクションを管理。",
    items: ["顧客情報", "温度感", "次回アクション"],
    icon: UserRoundCheck,
  },
  {
    title: "ナレッジ管理",
    description: "商材別マニュアル、反論対応、評価基準を検索・活用。",
    items: ["商材別マニュアル", "反論対応", "評価基準"],
    icon: BookOpenCheck,
  },
];

const ooda = [
  {
    title: "Observe（観察）",
    items: [
      "現状の情報を収集する",
      "事実や変化を把握する",
      "顧客・市場・競合の状況を確認する",
      "問題や機会の兆候を見つける",
    ],
  },
  {
    title: "Orient（状況判断）",
    items: [
      "集めた情報を整理する",
      "現状を分析・解釈する",
      "課題や原因を特定する",
      "優先順位を明確にする",
    ],
  },
  {
    title: "Decide（意思決定）",
    items: [
      "取るべき行動を選択する",
      "改善方針を決定する",
      "最適な選択肢を判断する",
      "目標達成への道筋を定める",
    ],
  },
  {
    title: "Act（実行）",
    items: [
      "決定した内容を実行する",
      "施策を現場へ反映する",
      "結果を検証する",
      "次の観察につなげる",
    ],
  },
];

const comparisonRows = [
  {
    before: "成果がトップ営業の経験に依存している",
    after: "勝ちパターンをチーム全体で再現できる",
  },
  {
    before: "商談の中身が見えず、振り返りが曖昧",
    after: "会話データから改善ポイントが明確になる",
  },
  {
    before: "指導内容がマネージャーごとにばらつく",
    after: "共通の評価基準で育成を進められる",
  },
  {
    before: "新人が現場で覚えるまで時間がかかる",
    after: "ロープレとナレッジで立ち上がりを早める",
  },
  {
    before: "顧客情報やノウハウが散らばっている",
    after: "顧客情報と営業ナレッジを一元管理できる",
  },
];

const pricingPlans = [
  {
    plan: "スタンダード",
    price: "45,000円/月",
    content: "商談アップロード15回/月、ロープレ15回/月",
  },
  {
    plan: "プロ",
    price: "90,000円/月",
    content: "商談アップロード30回/月、ロープレ30回/月",
  },
  {
    plan: "カスタム",
    price: "個別見積もり",
    content: "30回超、長時間音声、大人数利用、特殊運用",
  },
];

const includedItems = [
  {
    item: "商談音声アップロード",
    content: "音声データのアップロード、文字起こし、要約、振り返り",
  },
  {
    item: "ロープレ機能",
    content: "AI相手の営業ロープレ、会話記録、評価・フィードバック",
  },
  {
    item: "AI処理枠",
    content: "文字起こし、要約、分析、評価などのAI処理",
  },
  {
    item: "データ管理",
    content: "商談履歴、ロープレ履歴、ナレッジの保存",
  },
  {
    item: "基本サポート",
    content: "初期設定、操作案内、軽微な調整対応",
  },
];

const pricingNotes = [
  "音声アップロードは1回あたり最大2時間まで",
  "月内未使用分の翌月繰り越しはありません",
  "上限回数を超える利用は個別見積もりとなります",
  "大容量音声や特殊なファイル形式が多い場合は、事前にご相談ください",
  "表示価格は税別です",
];

const steps = [
  {
    title: "お問い合わせ",
    description: "現在の営業課題や導入目的をフォームから共有。",
  },
  {
    title: "ヒアリング",
    description: "商談分析・育成フロー・ナレッジ状況を確認。",
  },
  {
    title: "ご契約",
    description: "利用範囲と初期設定内容を決めて契約へ。",
  },
  {
    title: "初期設定",
    description: "評価軸、マニュアル、チーム情報をセットアップ。",
  },
  {
    title: "利用開始",
    description: "会話データを活用し、改善サイクルを運用開始。",
  },
];

const faqs = [
  {
    q: "録音だけで分析できますか？",
    a: "はい。商談や架電の音声をもとに、文字起こし、要約、評価、改善ポイントの整理まで行える設計です。運用に合わせて評価項目を調整できます。",
  },
  {
    q: "テレアポにも使えますか？",
    a: "使えます。アポ獲得率、反論対応、切り返し、会話の流れを分析し、次の架電で改善すべきポイントを明確にします。",
  },
  {
    q: "自社マニュアルに合わせられますか？",
    a: "対応できます。商材資料、FAQ、応酬話法、営業プロセスをナレッジとして登録し、分析やAIロープレの基準に反映できます。",
  },
  {
    q: "AIの評価は信用できますか？",
    a: "AIの評価は営業判断を補助するものです。自社の評価軸やマネージャーの確認を組み合わせることで、育成のばらつきを抑えやすくなります。",
  },
  {
    q: "導入までどれくらいですか？",
    a: "利用範囲やナレッジ整備の状況によりますが、初期設定後すぐに小さく始め、運用しながら評価軸を磨いていく導入が可能です。",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/82 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-normal">
            <img
              src="/sechat.png"
              alt=""
              className="h-10 w-10 object-contain"
            />
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-foreground" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="h-10 px-4">
              <Link href="/contact">無料相談</Link>
            </Button>
          </div>
        </div>
      </header>

      <section id="top" className="hero-surface relative pt-28">
        <div className="container relative z-10 grid items-center gap-12 pb-20 lg:min-h-[640px] lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-balance text-xl font-semibold leading-[1.18] tracking-normal sm:text-2xl">
                話すたび、強くなる
              </h1>
              <p className="mt-5 text-5xl leading-none sm:mt-7 sm:text-7xl">
                <BrandMark />
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-xl sm:leading-8">
                商談分析・テレアポ分析・ロープレ・ナレッジ管理をひとつに
                <br />
                営業教育を仕組み化するAIプラットフォーム
              </p>
              <div className="mt-9 hidden flex-col gap-3 sm:flex sm:flex-row">
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">無料相談</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-white py-24 sm:py-28">
        <img
          src="/da.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-10 hidden w-28 rotate-6 object-contain opacity-90 lg:block"
        />
        <div className="container relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Challenges"
              titleClassName="text-2xl sm:text-4xl"
              descriptionClassName="text-sm leading-7 sm:text-lg sm:leading-8"
              title={
                <>
                  営業組織に、こんな
                  <span className="bg-[linear-gradient(transparent_58%,rgba(245,189,7,0.42)_58%)] px-1">
                    お悩み
                  </span>
                  ありませんか？
                </>
              }
              description="成果が出る営業活動には理由があります。けれど多くの現場では、会話の中にある改善のヒントが記録されず、教育に活かされないまま流れていきます。"
            />
          </Reveal>
          <div className="mt-12 space-y-8">
            {challengeGroups.map((group, groupIndex) => (
              <Reveal key={group.label} delay={groupIndex * 0.08}>
                <div className="rounded-xl border border-border bg-[#fafafa] p-5 sm:p-6">
                  <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-bold text-primary-hover">
                        {group.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {group.items.map((challenge, index) => {
                      const Icon = challenge.icon;
                      return (
                        <Card
                          key={challenge.title.join("")}
                          className="relative h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                        >
                          <span className="absolute left-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-md bg-primary text-sm font-bold text-white shadow-line">
                            {index + 1}
                          </span>
                          <div className="grid aspect-[4/3] place-items-center overflow-hidden border-b border-border bg-white">
                            {"image" in challenge ? (
                              <img
                                src={challenge.image}
                                alt=""
                                className="h-[88%] w-[88%] object-contain object-center"
                              />
                            ) : (
                              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/16">
                                <Icon className="h-7 w-7 text-primary-hover" />
                              </div>
                            )}
                          </div>
                          <h3 className="p-5 text-base font-semibold leading-7">
                            {challenge.title.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </h3>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 rounded-xl border border-border bg-[#fffdf6] p-5 text-center shadow-line">
              <span className="text-lg sm:text-xl">
                その悩み、<BrandMark />で解決できます
              </span>
              <ChevronRight className="hidden h-5 w-5 text-primary-hover sm:block" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-28">
        <img
          src="/nareji.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-8 top-16 hidden w-24 -rotate-6 object-contain opacity-90 lg:block"
        />
        <div className="container relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  <BrandMark />とは？
                </>
              }
              description={
                <span className="block">
                  <span className="mb-3 block font-semibold text-foreground">
                    「話すたび、強くなる」
                  </span>
                  <BrandMark /> は、営業担当者の商談・テレアポ・ロープレをAIが分析し
                  <br />
                  個人の成長と組織の標準化を同時に実現する 営業特化AIプラットフォーム です
                </span>
              }
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aboutCards.map((card) => (
                <Card
                  key={card.image}
                  className="h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <div className="grid aspect-[4/3] place-items-center overflow-hidden border-b border-border bg-[#fffdf6]">
                    <img
                      src={card.image}
                      alt=""
                      className="h-[88%] w-[88%] object-contain object-center"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-semibold leading-8">
                      {card.description.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="relative overflow-hidden border-y border-border bg-[#fafafa] py-24 sm:py-28">
        <img
          src="/mojiokoshi.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-14 hidden w-24 rotate-3 object-contain opacity-90 lg:block"
        />
        <div className="container relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              titleClassName="text-2xl sm:text-4xl"
              title="営業教育を仕組み化する主要機能"
              description="分析、練習、管理、ナレッジ活用を分断せず、営業活動の改善サイクルとしてつなげます。"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.04}>
                  <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                    <CardHeader>
                      <div className="mb-3 grid h-12 w-12 place-items-center rounded-lg bg-primary/16 transition group-hover:bg-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm font-semibold">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary-hover" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Product"
              title="実際の画面イメージ"
              description="説明は短く、画面で直感的に。会話データを行動へ変えるワークスペースです。"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12">
              <ScreenTabs />
              <p className="mt-3 text-right text-xs text-muted-foreground">
                ※実際の画面と異なる場合がございます
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="ooda" className="border-y border-border bg-[#fafafa] py-24 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="OODA"
              title={
                <>
                  <BrandMark />が採用するOODA
                </>
              }
              description="会話内容を観察し、課題を整理し、改善行動を決める。次回商談・テレアポ・ロープレですぐ試せる状態まで導きます。"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.35fr_1fr] lg:items-center">
              <div className="space-y-8">
                {[ooda[0], ooda[3]].map((step) => (
                  <div key={step.title}>
                    <h3 className="text-2xl font-semibold tracking-normal">
                      {step.title}
                    </h3>
                    <div className="mt-4 h-px bg-border" />
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                      {step.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="order-first lg:order-none">
                <div className="relative z-10 rounded-xl overflow-visible">
                  <img
                    src="/ooda.png"
                    alt="OODAサイクル"
                    className="h-full w-full -translate-y-8 scale-[2.25] object-contain"
                  />
                </div>
              </div>

              <div className="space-y-8">
                {[ooda[1], ooda[2]].map((step) => (
                  <div key={step.title}>
                    <h3 className="text-2xl font-semibold tracking-normal">
                      {step.title}
                    </h3>
                    <div className="mt-4 h-px bg-border" />
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                      {step.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Before / After"
              title="営業教育は、ここまで変えられる"
              description="感覚や経験に頼っていた営業育成を、会話データとナレッジをもとに再現できる仕組みへ変えていきます。"
            />
          </Reveal>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-white shadow-line">
            <div className="grid grid-cols-[1fr_auto_1fr] border-b border-border bg-[#fafafa] px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              <span>Before</span>
              <span className="px-3" />
              <span className="text-primary-hover">After</span>
            </div>
            <div className="divide-y divide-border">
              {comparisonRows.map((row) => (
                <Reveal key={row.before}>
                  <div className="grid gap-4 p-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                    <div className="flex items-start gap-3 rounded-lg bg-[#f7f7f4] p-4">
                      <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                      <p className="font-semibold leading-7">{row.before}</p>
                    </div>
                    <ChevronRight className="mx-auto hidden h-5 w-5 text-primary-hover lg:block" />
                    <div className="flex items-start gap-3 rounded-lg bg-[#fff8d6] p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-hover" />
                      <p className="font-semibold leading-7">{row.after}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative overflow-hidden border-y border-border bg-white py-24 sm:py-28">
        <img
          src="/sechat.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-10 top-14 hidden w-24 -rotate-3 object-contain opacity-90 lg:block"
        />
        <div className="container relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="料金表"
              description="利用回数に合わせて選びやすい月額プランをご用意しています。"
            />
          </Reveal>
          <div className="mt-12 space-y-8">
            <Reveal delay={0.04}>
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-line">
                <div className="hidden grid-cols-[1fr_1fr_1.4fr] bg-[#fafafa] px-5 py-4 text-sm font-bold text-muted-foreground sm:grid">
                  <span>プラン</span>
                  <span>月額</span>
                  <span>内容</span>
                </div>
                <div className="divide-y divide-border">
                  {pricingPlans.map((plan) => (
                    <div
                      key={plan.plan}
                      className="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_1fr_1.4fr] sm:items-center"
                    >
                      <p className="text-lg font-semibold">{plan.plan}</p>
                      <p className="text-lg font-semibold text-primary-hover">
                        {plan.price}
                      </p>
                      <p className="leading-7 text-muted-foreground">
                        {plan.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
              <Reveal delay={0.08}>
                <div className="h-full rounded-xl border border-border bg-white p-6 shadow-line">
                  <h3 className="text-xl font-semibold">各プランに含まれるもの</h3>
                  <div className="mt-6 divide-y divide-border">
                    {includedItems.map((row) => (
                      <div key={row.item} className="grid gap-2 py-4 sm:grid-cols-[0.7fr_1fr]">
                        <p className="font-semibold">{row.item}</p>
                        <p className="leading-7 text-muted-foreground">{row.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="h-full rounded-xl border border-primary/40 bg-[#fff8d6] p-6">
                  <h3 className="text-xl font-semibold">注意事項</h3>
                  <ul className="mt-6 space-y-4">
                    {pricingNotes.map((note) => (
                      <li key={note} className="flex gap-3 text-sm leading-7">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-hover" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-[#fafafa] py-24 sm:py-28">
        <img
          src="/da.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-8 bottom-8 hidden w-24 -rotate-6 object-contain opacity-85 lg:block"
        />
        <div className="container relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Onboarding"
              title="導入フロー"
              description="最短で運用を始められるよう、課題整理から初期設定まで伴走します。"
            />
          </Reveal>
          <div className="relative mt-12 grid gap-5 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-border md:block" />
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="relative h-full rounded-xl border border-border bg-white p-6 shadow-line transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl bg-primary text-lg font-bold text-white shadow-[0_14px_34px_rgba(245,189,7,0.28)]">
                    {index + 1}
                  </span>
                  <p className="mt-6 text-lg font-semibold">{step.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="よくある質問"
              description="導入前に確認されることの多い項目をまとめています。"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="rounded-xl border border-border bg-white px-5 shadow-line">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`item-${index}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-4 pb-8 sm:pb-10">
        <Reveal>
          <div className="container relative overflow-hidden rounded-xl border border-primary/40 bg-[#fff8d6] px-6 py-16 text-center shadow-[0_24px_80px_rgba(245,189,7,0.20)] sm:px-10 sm:py-20">
            <img
              src="/sechat.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-8 hidden w-24 -rotate-6 object-contain sm:block lg:w-32"
            />
            <img
              src="/da.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-6 right-6 hidden w-24 rotate-6 object-contain sm:block lg:w-32"
            />
            <div className="relative z-10">
              <h2 className="text-balance text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
                話すたび、強くなる
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-xl">
                営業教育を属人化させず、個人の成長を組織の成果につなげます。
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    無料相談
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container grid gap-8 text-sm text-muted-foreground sm:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/sechat.png"
                alt=""
                className="h-10 w-10 object-contain"
              />
              <BrandMark />
            </div>
            <p className="mt-2 text-foreground">話すたび、強くなる</p>
            <p className="mt-4">
              © 2026 <BrandMark className="text-sm" /> All rights reserved.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-semibold text-foreground">お問い合わせ</p>
            <p className="mt-4">平日 10:00〜17:00</p>
            <p className="mt-2">翌営業日にご連絡いたします。</p>
            <div className="mt-5 space-y-2">
              <p>
                TEL:{" "}
                <a className="transition hover:text-foreground" href="tel:0925179804">
                  092-517-9804
                </a>
              </p>
              <p>
                <a className="transition hover:text-foreground" href="mailto:info@mogcia.jp">
                  info@mogcia.jp
                </a>
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              <a
                className="transition hover:text-foreground"
                href="https://www.mogcia.net/"
                target="_blank"
                rel="noreferrer"
              >
                運営会社
              </a>
              <Link
                className="transition hover:text-foreground"
                href="/privacy-policy"
              >
                プライバシーポリシー
              </Link>
              <Link
                className="transition hover:text-foreground"
                href="/terms"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
