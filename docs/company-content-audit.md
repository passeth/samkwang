# Company content migration · 2026-09-21

Official legacy source pages: http://www.samkwang-chem.com/company/{ceomessage,manage,history,organization,supplier,map}

- Greeting: founder date 1988-01-05, CEO 이석주, trust/quality, owned warehouse/transport, research center, communication/talent, 품질제일주의·개척자정신 retained; vague "30여 년" replaced by founding date without inventing a milestone.
- Philosophy: 신뢰와 정직 / 인재중시 / 고객만족 / 합리적가격 and original meaning transcribed from all four image-only statements.
- History: all 18 events / 10 years in data/company.ts retained, no post-2019 milestones invented; historical certificate is not described as currently valid.
- Organization: CO-CEO, Suwon Office / R&D Center & Sales, H.Q / Management Center, Sales/Research/Purchasing/Management/Logistics preserved. Exact original chart archived locally for hierarchy reference; no invented employee names/photos. Suwon is an original label, not current visitor address.
- Suppliers: 13 and customers: 12 original logo assets retained. Original supplier filter label MERCK conflicts with the displayed Susonity logo/name in repo; current site does not assert exclusivity or new relationship.
- Locations: both addresses, postal codes, telephone, faxes, email preserved. Legacy map body says B동 1005호 & 1111호 while footer says 1006호. Both labels shown with call-before-visit notice, not silently resolved.
- Five actual location images archived, two primary images and three under accessible details. No AI facility replacement.
- AI material-study.jpg and mineral-study.jpg are visibly captioned conceptual illustrations, never actual facilities/products.
- Header and subnav renamed company landing to 인사말·경영이념.

## Verification
- Source-only TypeScript check PASS (Next and Vinext concurrent generated route types conflict; application sources checked separately).
- 15 routes measured at CSS viewport 390px and 1440px via same-origin browser iframe, all document clientWidth == scrollWidth, one H1 on each, no completed broken images at load.
- Product category/function buttons: 282 -> 22 (기능성) -> 4 (주름개선), list view confirmed.
- Main film 0 -> 7.067s at ~47% scroll with autoplay disabled. Transparent header at top, solid fixed header after scroll. Middle CTA padding 16px 24px / gap 32px confirmed.
- Lovart project 2qhp1n7gbfnk supplied products.jpg and latest photoreal technology.jpg. Both captioned conceptual imagery.
- Final npx tsc --noEmit --incremental false PASS after excluding local generated preview caches from application source checking. git diff --check PASS.
- Header desktop click/Escape and mobile grouped navigation verified. Lovart product card and technical conceptual art downloaded and embedded locally.
- Final main overlay uses 12% top/left and 6% bottom maximum per gradient, with film brightness 1.08; scroll scrubbing remains active.

## Local review
Run `npm run dev:preview`, open http://localhost:5179/ . This polling-based Next.js preview isolates its output in ignored .next-review from the original Vinext caches. No production deploy or commit was performed.
