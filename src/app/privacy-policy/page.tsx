import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/marketing/brand-mark";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社MOGCIAが提供するselmo.のプライバシーポリシーです。",
};

const sections = [
  {
    title: "1. 個人情報の取得",
    body: [
      "当社は、お問い合わせ、サービス利用申込み、資料請求、サポート対応等に際して、氏名、会社名、部署名、メールアドレス、電話番号その他必要な情報を取得することがあります。",
      "また、サービスの提供・改善のため、利用状況、アクセスログ、Cookie等の技術情報を取得する場合があります。",
    ],
  },
  {
    title: "2. 個人情報の利用目的",
    body: [
      "当社は、取得した個人情報を、サービスの提供、本人確認、契約管理、お問い合わせ対応、利用状況の分析、サービス改善、新機能・キャンペーン等の案内、法令対応のために利用します。",
    ],
  },
  {
    title: "3. 第三者提供",
    body: [
      "当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。",
      "ただし、サービス提供に必要な範囲で、業務委託先に個人情報の取扱いを委託する場合があります。この場合、当社は委託先に対して適切な管理を行います。",
    ],
  },
  {
    title: "4. 安全管理措置",
    body: [
      "当社は、個人情報の漏えい、滅失、毀損、不正アクセス等を防止するため、必要かつ適切な安全管理措置を講じます。",
    ],
  },
  {
    title: "5. 個人情報の開示・訂正・利用停止等",
    body: [
      "本人から個人情報の開示、訂正、追加、削除、利用停止、第三者提供の停止等の請求があった場合、当社は法令に従い適切に対応します。",
    ],
  },
  {
    title: "6. Cookie等の利用",
    body: [
      "当社は、サイトの利便性向上、アクセス解析、広告配信、サービス改善のためCookie等を利用することがあります。利用者はブラウザ設定によりCookieを無効化できます。",
    ],
  },
  {
    title: "7. プライバシーポリシーの変更",
    body: [
      "当社は、必要に応じて本ポリシーを変更することがあります。重要な変更がある場合は、当社が適切と判断する方法により通知します。",
    ],
  },
  {
    title: "8. お問い合わせ窓口",
    body: [
      "本ポリシーに関するお問い合わせは、以下の窓口までご連絡ください。",
      "株式会社MOGCIA",
      "TEL: 092-517-9804",
      "Email: info@mogcia.jp",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-[#fffdf6] py-16">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-xl">
            <img src="/sechat.png" alt="" className="h-10 w-10 object-contain" />
            <BrandMark />
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary-hover">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal">
            プライバシーポリシー
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
            株式会社MOGCIAは、当社が提供するサービスにおける個人情報の取扱いについて、以下のとおり定めます。
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
