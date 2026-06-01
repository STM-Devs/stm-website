"use client";

import Link from "next/link";
import ScrollToTop from "./components/ScrollToTop";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 md:px-8">
      <Container>
        <div className="rounded-[2rem] bg-[#414042] p-8 text-white md:p-10">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 xl:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div>
                  <Link href="/" className="flex shrink-0 items-center gap-3">
                    <img loading="lazy" src="/STM-Consulting_logo_White.png" alt="STM Logo" width={160} height={48} className="h-9 w-auto sm:h-10" />
                  </Link>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
                Performance-led strategy, creative, and execution for brands that want smarter digital growth.
              </p>
            </div>

            <FooterColumn title="Navigation" items={[{ title: "About Us", link: "/about-us" }, { title: "People and Culture", link: "/people-and-culture" }, { title: "Services", link: "/services" }, { title: "Careers", link: "/careers" }, { title: "Contact", link: "/#contact" }]} />
            <FooterColumn title="Services" items={[{ title: "SEO", link: "/services#seo" }, { title: "Digital Marketing", link: "/services#digital-marketing" }, { title: "On The Ground Marketing", link: "/services#on-the-ground-marketing" }, { title: "CRM", link: "/services#crm" }, { title: "Graphic Design", link: "/services#graphic-design" }, { title: "Analytics & CRO", link: "/services#analytics" }]} />
            <FooterColumn title="Contact" items={[{ title: "info@stmconsulting.io", link: "mailto:info@stmconsulting.io" }, /*{title:"+230 000 0000", link:"tel:+2300000000"},*/ { title: "8th Floor, Nexteracom 1, Ebène, Mauritius", link: "https://maps.google.com/?q=8th+Floor,+Nexteracom+1,+Ebène,+Mauritius" }]} />
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <div>© 2021 - 2026 STM Consulting Ltd. All rights reserved.</div>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms-conditions" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center text-sm text-white/70">
          <ScrollToTop />
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-4 grid gap-3 text-sm text-white/70">
        {items.map((item) => {
          const isInternal = item.link.startsWith("/");
          if (isInternal) {
            return (
              <Link key={item.title} href={item.link} className="transition hover:text-white">
                {item.title}
              </Link>
            );
          }
          const isExternal = /^https?:\/\//.test(item.link);
          return (
            <a
              key={item.title}
              href={item.link}
              className="transition hover:text-white"
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
