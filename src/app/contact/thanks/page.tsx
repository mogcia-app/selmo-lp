import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { BrandMark } from "@/components/marketing/brand-mark";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "お問い合わせありがとうございました",
  description:
    "selmo.へのお問い合わせを受け付けました。内容を確認のうえ、翌営業日を目安にご連絡いたします。",
};

export default function ContactThanksPage() {
  return (
    <main className="min-h-screen bg-[#fffdf6] text-foreground">
      <section className="flex min-h-screen items-center py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 text-center shadow-soft sm:p-12">
            <Link
              href="/"
              className="mx-auto inline-flex items-center justify-center gap-2 text-xl"
            >
              <img
                src="/sechat.png"
                alt=""
                className="h-12 w-12 object-contain"
              />
              <BrandMark />
            </Link>

            <div className="mx-auto mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-primary-hover">
              Thank you
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-normal sm:text-4xl">
              お問い合わせありがとうございました
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-muted-foreground">
              送信内容を受け付けました。担当者が内容を確認し、翌営業日を目安にご連絡いたします。
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  トップページへ戻る
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">お問い合わせに戻る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
