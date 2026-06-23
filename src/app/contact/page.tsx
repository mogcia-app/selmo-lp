import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/marketing/brand-mark";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "selmo.に関するお問い合わせ・無料相談はこちらからご連絡ください。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-[#fffdf6] py-14">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-xl">
            <img src="/sechat.png" alt="" className="h-10 w-10 object-contain" />
            <BrandMark />
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary-hover">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal">
            お問い合わせ
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            導入相談、料金、機能についてのご質問など、お気軽にお問い合わせください。
            翌営業日を目安にご連絡いたします。
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <aside className="rounded-xl border border-border bg-white p-6 shadow-line">
            <h2 className="text-xl font-semibold">お問い合わせ窓口</h2>
            <div className="mt-6 space-y-3 leading-8 text-muted-foreground">
              <p>平日 10:00〜17:00</p>
              <p>翌営業日にご連絡いたします。</p>
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
            <Button asChild variant="outline" className="mt-8">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                トップページへ戻る
              </Link>
            </Button>
          </aside>

          <div className="rounded-xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <form
              className="formrun space-y-6"
              action="https://form.run/api/v1/r/j34lzbj8xw4jbopzonhaui5r"
              method="post"
            >
              <input type="hidden" name="_redirect" value="/contact/thanks" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold">会社名</label>
                  <input
                    name="会社名"
                    type="text"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-white px-4 outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">部署</label>
                  <input
                    name="部署"
                    type="text"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-white px-4 outline-none transition focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">お名前</label>
                <input
                  name="お名前"
                  type="text"
                  className="mt-2 h-12 w-full rounded-lg border border-border bg-white px-4 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">電話番号</label>
                <input
                  name="電話番号"
                  type="tel"
                  className="mt-2 h-12 w-full rounded-lg border border-border bg-white px-4 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">メールアドレス [必須]</label>
                <input
                  name="メールアドレス"
                  type="text"
                  data-formrun-type="email"
                  data-formrun-required=""
                  className="mt-2 h-12 w-full rounded-lg border border-border bg-white px-4 outline-none transition focus:border-primary"
                />
                <div
                  data-formrun-show-if-error="メールアドレス"
                  className="mt-2 text-sm text-red-600"
                >
                  メールアドレスを正しく入力してください
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">お問い合わせ [必須]</label>
                <textarea
                  name="お問い合わせ"
                  data-formrun-required=""
                  className="mt-2 min-h-40 w-full rounded-lg border border-border bg-white px-4 py-3 outline-none transition focus:border-primary"
                />
                <div
                  data-formrun-show-if-error="お問い合わせ"
                  className="mt-2 text-sm text-red-600"
                >
                  お問い合わせ内容を入力してください
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 text-sm font-semibold">
                  <input
                    type="checkbox"
                    name="個人情報利用同意"
                    data-formrun-required=""
                    className="h-4 w-4 rounded border-border accent-primary"
                  />
                  個人情報利用同意 [必須]
                </label>
                <div
                  data-formrun-show-if-error="個人情報利用同意"
                  className="mt-2 text-sm text-red-600"
                >
                  同意してください
                </div>
              </div>

              <div className="_formrun_gotcha">
                <style media="screen">
                  {`._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}`}
                </style>
                <label htmlFor="_formrun_gotcha">
                  If you are a human, ignore this field
                </label>
                <input
                  type="text"
                  name="_formrun_gotcha"
                  id="_formrun_gotcha"
                  tabIndex={-1}
                />
              </div>

              <button
                type="submit"
                data-formrun-error-text="未入力の項目があります"
                data-formrun-submitting-text="送信中..."
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_rgba(245,189,7,0.34)] transition hover:bg-primary-hover sm:w-auto"
              >
                送信
              </button>
            </form>
          </div>
        </div>
      </section>

      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </main>
  );
}
