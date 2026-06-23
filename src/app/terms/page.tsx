import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/marketing/brand-mark";

export const metadata: Metadata = {
  title: "利用規約",
  description: "株式会社MOGCIAが提供するselmo.の利用規約です。",
};

const sections = [
  {
    title: "第1条（適用）",
    body: [
      "本利用規約は、株式会社MOGCIA（以下「当社」といいます。）が提供する営業AIプラットフォーム「selmo.」（以下「本サービス」といいます。）の利用条件を定めるものです。",
      "本サービスを利用する利用者は、本規約に同意したものとみなします。",
    ],
  },
  {
    title: "第2条（利用申込み）",
    body: [
      "本サービスの利用を希望する者は、当社所定の方法により申込みを行うものとします。",
      "当社は、申込内容を確認のうえ、利用を承諾するか否かを判断します。",
    ],
  },
  {
    title: "第3条（サービス内容）",
    body: [
      "本サービスは、商談分析、テレアポ分析、AIロープレ、ナレッジ管理、顧客カルテ、営業マネジメント等を支援するAIプラットフォームです。",
      "当社は、サービス改善、機能追加、保守等のため、本サービスの内容を変更することがあります。",
    ],
  },
  {
    title: "第4条（利用料金）",
    body: [
      "利用者は、当社が別途定める料金プランに従い、利用料金を支払うものとします。",
      "支払済みの利用料金は、法令に定める場合を除き返金されません。",
    ],
  },
  {
    title: "第5条（禁止事項）",
    body: [
      "利用者は、法令または公序良俗に反する行為、第三者の権利を侵害する行為、本サービスの運営を妨害する行為、不正アクセス、虚偽情報の登録、当社が不適切と判断する行為を行ってはなりません。",
    ],
  },
  {
    title: "第6条（データの取扱い）",
    body: [
      "利用者が本サービスにアップロードした音声、テキスト、顧客情報、ナレッジ等のデータは、本サービスの提供、分析、改善、サポート対応のために利用されます。",
      "利用者は、第三者の個人情報や機密情報を取り扱う場合、必要な権限および同意を得たうえで本サービスを利用するものとします。",
    ],
  },
  {
    title: "第7条（知的財産権）",
    body: [
      "本サービスに関する知的財産権は、当社または正当な権利者に帰属します。",
      "利用者は、本サービスを通じて得られた情報を、本規約および契約の範囲内で利用するものとします。",
    ],
  },
  {
    title: "第8条（免責）",
    body: [
      "当社は、本サービスによる分析結果、評価、提案等の完全性、正確性、有用性を保証するものではありません。",
      "AIによる出力は営業活動を補助するものであり、最終的な判断は利用者の責任において行うものとします。",
    ],
  },
  {
    title: "第9条（利用停止・解除）",
    body: [
      "利用者が本規約に違反した場合、当社は事前通知なく本サービスの利用停止または契約解除を行うことができます。",
    ],
  },
  {
    title: "第10条（規約の変更）",
    body: [
      "当社は、必要に応じて本規約を変更することがあります。変更後の規約は、当社が定める方法により通知または掲載した時点から効力を生じます。",
    ],
  },
  {
    title: "第11条（準拠法・管轄）",
    body: [
      "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。",
    ],
  },
  {
    title: "お問い合わせ",
    body: [
      "本規約に関するお問い合わせは、以下の窓口までご連絡ください。",
      "株式会社MOGCIA",
      "TEL: 092-517-9804",
      "Email: info@mogcia.jp",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-[#fffdf6] py-16">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-xl">
            <img src="/sechat.png" alt="" className="h-10 w-10 object-contain" />
            <BrandMark />
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary-hover">
            Terms
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal">利用規約</h1>
          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
            本規約は、株式会社MOGCIAが提供する営業AIプラットフォーム
            <BrandMark className="mx-1" />
            の利用条件を定めるものです。
          </p>
          <p className="mt-4 text-sm text-muted-foreground">制定日: 2026年6月23日</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="rounded-xl border border-border bg-white p-6 shadow-line">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <div className="mt-4 space-y-3 leading-8 text-muted-foreground">
                  {section.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link className="font-semibold text-primary-hover transition hover:text-foreground" href="/">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
