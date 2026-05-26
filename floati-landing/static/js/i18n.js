/* ============================================================
   Heifer i18n — runtime translation engine.

   Each translatable string in index.html carries a data-i18n
   attribute whose value is a key into the dictionary below.

   Three flavours:
     data-i18n="key"        →  el.textContent = dict[key]
     data-i18n-html="key"   →  el.innerHTML  = dict[key]     (only used
                                for strings that contain inline <strong>,
                                <em>, <br>, <span> formatting we control)
     data-i18n-attr="attr:key;attr2:key2"
                            →  el.setAttribute(attr, dict[key])

   Proper nouns and codes that stay identical across languages:
     Heifer, Telegram, WhatsApp, Android, POS, VAT, FTA, AED, UUID,
     UAE, Dubai, Toronto, LinkedIn, X.

   ============================================================ */

(function () {
  'use strict'

  const T = {
    /* ─────────────────────── English ─────────────────────── */
    en: {
      'html.title': 'Heifer | Smart bookkeeping for bazaar merchants',

      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.telegram_bot': 'Telegram Bot',
      'nav.onboarding': 'Onboarding',
      'nav.for_accountants': 'For Accountants',
      'nav.book_call': 'Book a free call',
      'nav.menu': 'Menu',
      'nav.language': 'Language',
      'nav.choose_language': 'Choose language',
      'nav.more_languages': 'More languages on request',

      'hero.badge': 'VAT-compliant · Built for UAE bazaars',
      'hero.title': 'Run your shop.<br>Heifer runs <span class="hero-accent">the&nbsp;books.</span>',
      'hero.sub': 'From every cash sale to your final VAT filing, Heifer handles the books in the background. Send a voice note on Telegram — in any of five languages — and the bot logs the expense, categorises it, and signs the invoice. Type a line or snap a receipt if you\'d rather. You change nothing about how you trade.',
      'hero.cta_book': 'Book a free 30-min call',
      'hero.cta_accountants': 'For Accountants',
      'hero.stat_onboarded': 'Onboarded <strong style="color:var(--t1);font-weight:500">one-on-one</strong>',
      'hero.stat_daily': '<strong style="color:var(--t1);font-weight:500">Voice or text</strong> on Telegram',
      'hero.stat_languages': '<strong style="color:var(--t1);font-weight:500">5</strong> languages',
      'hero.stat_fta': '<strong style="color:var(--t1);font-weight:500">FTA</strong>-compliant',
      'hero.mockup_title': 'Heifer · Today',
      'hero.mockup_alt': "Heifer merchant dashboard showing today's sales, VAT position, and cash on hand",

      'trust.onboarded': 'Onboarded by our team, not by you',
      'trust.languages': 'English, Arabic, Urdu, Hindi, Malayalam',
      'trust.accountant': 'Free for your accountant',
      'trust.in_region': 'Data hosted in-region',

      'features.eyebrow': "What's inside",
      'features.title': 'Built for the till.<br><em>Not for the spreadsheet.</em>',
      'features.aside': "Every existing tool assumes you already have clean digital data. Bazaar merchants don't. Heifer is built for cash sales, handwritten receipts, and suppliers that send a photo on WhatsApp.",

      'features.tile1_eyebrow': '01 / POS Capture',
      'features.tile1_title': 'Every sale, the second&nbsp;it happens.',
      'features.tile1_desc': 'Heifer runs on your Android POS — either as the till itself, or alongside it — recording every transaction the moment your customer pays. No data entry, no end-of-day catch-up.',
      'features.tile1_alt': "Heifer dashboard showing today's transactions and live VAT position",

      'features.tile2_eyebrow': '02 / VAT Engine',
      'features.tile2_title': 'FTA spec.<br>Every&nbsp;invoice.',
      'features.tile2_desc': 'Every invoice is formatted, UUID-stamped, and cryptographically signed to government spec — with no merchant input.',
      'features.meter_q1_sales': 'Q1 sales',
      'features.meter_vat_collected': 'VAT collected',
      'features.meter_input_vat': 'Input VAT',
      'features.meter_net_payable': 'Net payable',

      'features.tile3_eyebrow': '03 / Accountant Portal',
      'features.tile3_title': 'Free for your accountant.<br>End of the shoebox.',
      'features.tile3_desc': "Your accountant gets a live, read-only dashboard of every client's transactions — categorised, VAT-formatted, audit-ready. They stop chasing you for paperwork. They recommend you to every new client.",
      'features.tile3_alt': 'Accountant portal showing multi-client VAT positions and exportable reports',

      'ai.eyebrow': 'Telegram Bot',
      'ai.title': 'Your bookkeeper lives <em>in your Telegram chats.</em>',
      'ai.lede': 'The web dashboard is for your accountant. Telegram is where you actually live. Press and hold to send a voice note — "paid Karim 280 dirhams for cardboard" — and Heifer logs it, calculates VAT, signs the invoice. Photo of a receipt works too. So does typing. All in the same chat you already use all day, in English, Arabic, Urdu, Hindi, or Malayalam.',

      'ai.bullet1_title': 'Talk, don\'t type',
      'ai.bullet1_desc': 'Hold the mic and say it — "142 dirhams, tissue paper, cash". Heifer transcribes, categorises, calculates VAT, and signs the invoice. Typing and receipt photos work the same way.',
      'ai.bullet2_title': 'Cash on hand, right now',
      'ai.bullet2_desc': '"After today\'s expenses, you have AED 1,450. Next supplier payment due in 3 days."',
      'ai.bullet3_title': 'Restock at the right moment',
      'ai.bullet3_desc': '"Tissue paper turns over every 11 days. Reorder within 4. Average spend: AED 280."',
      'ai.bullet4_title': 'Staffing that pays for itself',
      'ai.bullet4_desc': '"Tue/Thu afternoon sales are 40% lower. A single shift could save AED 600/month."',
      'ai.bullet5_title': 'Profit, week by week',
      'ai.bullet5_desc': '"Gross margin is 28% — down from 34% last week. Electronics are carrying you."',
      'ai.meta': 'Telegram for you · Portal for your accountant',
      'ai.mockup_alt': 'Heifer AI assistant chat on Telegram',

      'onboard.eyebrow': 'Onboarding',
      'onboard.title': 'One-on-one onboarding. <em>You change nothing.</em>',
      'onboard.sub': "Heifer isn't software you download and figure out. We work with each merchant one-on-one — remotely, in your language — to migrate your books, set up your Telegram bot, and brief your accountant. You don't lift a finger.",

      'onboard.card1_title': 'We start the conversation',
      'onboard.card1_desc': 'Not a demo. Not a signup form. A call about how your shop actually trades — in your language, on your time. We learn the business before we touch the books.',
      'onboard.card1_tag': 'No demo · No signup',
      'onboard.card2_title': 'We migrate your books for you',
      'onboard.card2_desc': "Send us your notebooks, WhatsApp invoice photos, supplier folders. We clean and load everything into Heifer — on our side. You don't fill a form, you don't re-type a receipt.",
      'onboard.card2_tag': 'Done for you · Not by you',
      'onboard.card3_title': 'We set up your Telegram bot',
      'onboard.card3_desc': 'A short screen-share on your own phone. From that moment you log expenses, snap supplier receipts, and ask the bot anything — all in the Telegram chat you already check all day.',
      'onboard.card3_tag': 'Telegram-first · No new app',
      'onboard.card4_title': 'We brief your accountant',
      'onboard.card4_desc': "A separate 30-minute call. Your accountant gets the free portal walkthrough and walks away with cleaner data than they've ever had from a bazaar client. They recommend us next.",
      'onboard.card4_tag': 'Their workload drops · Their fees protected',
      'onboard.footnote': 'We work with a handful of merchants at a time — quietly, carefully, by invitation.',

      'how.eyebrow': 'How it works',
      'how.title': 'Three steps. <em>None of them yours.</em>',
      'how.sub': 'You ring up the sale. Heifer files the rest. Your accountant reads clean books at the end of the month.',

      'how.step1_title': 'Ring up the sale',
      'how.step1_desc': 'Heifer sits on your Android POS. Every transaction — cash or card — is captured the moment the customer pays.',
      'how.step1_mock_title': 'POS · Till 1',
      'how.step1_desc_item': 'Tissue paper · 2 packs',
      'how.step1_chip_cash': 'Cash',
      'how.step1_chip_card': 'Card',
      'how.step1_chip_credit': 'Credit',
      'how.step1_status': 'Captured · 0.2s',

      'how.step2_title': 'Heifer files your VAT',
      'how.step2_desc': 'Every invoice is formatted to FTA spec, UUID-stamped, and pushed through certified compliance middleware. No paperwork on your side.',
      'how.step2_mock_title': 'VAT · this quarter',
      'how.step2_signed': 'All invoices signed',
      'how.step2_fta_submission': 'FTA submission',
      'how.step2_ready': 'Ready',

      'how.step3_title': 'Ask Heifer anything',
      'how.step3_desc': 'Send a voice note or type — "can I afford to restock this week?", "how much VAT do I owe?" — and get the answer in your language, instantly.',
      'how.step3_mock_title': 'Heifer AI · Telegram',
      'how.step3_user_msg': '"Can I restock today?"',
      'how.step3_transcript_label': 'Heifer heard',
      'how.step3_bot_msg': 'Yes — AED 1,450 in hand, AED 900 supplier payment due Friday. Restock budget: AED 350 safe.',
      'how.step3_status': 'Replied · 1.4s',

      'privacy.quote': 'Most bookkeeping starts with a signup form.<br><strong>Heifer starts with a&nbsp;conversation.</strong>',
      'privacy.quote_meta': 'What sets Heifer apart, in one&nbsp;line.',
      'privacy.stat1': 'Sign-up forms to fill',
      'privacy.stat2': 'Receipts re-typed',
      'privacy.stat3': 'Data leaves your region',
      'privacy.stat4': 'Languages, natively',
      'privacy.link': 'See how it fits your shop',

      'book.title': 'Ready to <em>talk?</em>',
      'book.sub': 'We migrate your books. We set up your Telegram bot. We brief your accountant. You change nothing about how you trade — we change everything about how it gets&nbsp;recorded.',
      'book.btn_book': 'Book a free 30-min call',
      'book.btn_partner': 'Partner as an accountant',
      'book.note': 'Free 30-min consultation · No demo, no signup · By invitation',

      'footer.tagline': 'Smart bookkeeping built for UAE bazaar merchants — WhatsApp receipts in, FTA-ready books out.',
      'footer.status': 'All systems normal · Dubai · UAE',
      'footer.product': 'Product',
      'footer.product_inside': "What's inside",
      'footer.product_bot': 'Telegram Bot',
      'footer.product_accountants': 'Accountant Portal',
      'footer.product_book': 'Book a free call',
      'footer.compliance': 'Compliance',
      'footer.compliance_fta': 'UAE FTA e-invoicing',
      'footer.compliance_residency': 'Data residency',
      'footer.compliance_vat': 'VAT & corporate tax',
      'footer.compliance_security': 'Security',
      'footer.company': 'Company',
      'footer.company_about': 'About',
      'footer.company_changelog': 'Changelog',
      'footer.company_privacy': 'Privacy policy',
      'footer.company_terms': 'Terms of use',
      'footer.connect': 'Connect',
      'footer.connect_book': 'Book a free call',
      'footer.connect_partners': 'Accountant partners',
      'footer.connect_press': 'Press & media',
      'footer.copyright': '© 2026 Heifer Technologies Inc.',
      'footer.meta': 'Designed in Toronto · Built for the UAE',
      'footer.back_top': 'Back to top',

      'fab.dark': 'Toggle dark mode',
      'fab.top': 'Back to top',
    },

    /* ─────────────────────── العربية (Arabic) ─────────────────────── */
    ar: {
      'html.title': 'Heifer | محاسبة ذكية لتجار البازار',

      'nav.home': 'الرئيسية',
      'nav.features': 'المميزات',
      'nav.telegram_bot': 'بوت تيليجرام',
      'nav.onboarding': 'الانضمام',
      'nav.for_accountants': 'للمحاسبين',
      'nav.book_call': 'احجز مكالمة مجانية',
      'nav.menu': 'القائمة',
      'nav.language': 'اللغة',
      'nav.choose_language': 'اختر اللغة',
      'nav.more_languages': 'لغات إضافية عند الطلب',

      'hero.badge': 'متوافق مع ضريبة القيمة المضافة · مصمَّم لبازارات الإمارات',
      'hero.title': 'أنت تدير محلك.<br>وHeifer يدير <span class="hero-accent">الدفاتر.</span>',
      'hero.sub': 'من كل عملية بيع نقدية حتى تقديم إقرار ضريبة القيمة المضافة، يتولى Heifer الدفاتر في الخلفية. يتيح لك بوت تيليجرام تسجيل المصروفات، والتقاط فواتير المورّدين، وطرح الأسئلة — كل ذلك في المحادثة التي تستخدمها فعلاً، وبلغتك. لا تغيّر شيئاً في طريقة عملك.',
      'hero.cta_book': 'احجز مكالمة مجانية ٣٠ دقيقة',
      'hero.cta_accountants': 'للمحاسبين',
      'hero.stat_onboarded': 'انضمام <strong style="color:var(--t1);font-weight:500">فردي</strong>',
      'hero.stat_daily': 'يومياً على <strong style="color:var(--t1);font-weight:500">تيليجرام</strong>',
      'hero.stat_languages': '<strong style="color:var(--t1);font-weight:500">٥</strong> لغات',
      'hero.stat_fta': 'متوافق مع <strong style="color:var(--t1);font-weight:500">FTA</strong>',
      'hero.mockup_title': 'Heifer · اليوم',
      'hero.mockup_alt': 'لوحة معلومات تاجر Heifer تعرض مبيعات اليوم ووضع ضريبة القيمة المضافة والنقد المتاح',

      'trust.onboarded': 'يتولى فريقنا الانضمام، لا أنت',
      'trust.languages': 'الإنجليزية، العربية، الأردية، الهندية، المالايالامية',
      'trust.accountant': 'مجاني لمحاسبك',
      'trust.in_region': 'البيانات مستضافة داخل المنطقة',

      'features.eyebrow': 'ما الذي يقدمه',
      'features.title': 'مصمَّم للصندوق.<br><em>لا لجداول البيانات.</em>',
      'features.aside': 'تفترض كل الأدوات الحالية أن لديك بيانات رقمية نظيفة. تجار البازار لا يملكون ذلك. صُمم Heifer للمبيعات النقدية، والإيصالات المكتوبة بخط اليد، ولموردين يرسلون صوراً عبر WhatsApp.',

      'features.tile1_eyebrow': '٠١ / استقبال نقطة البيع',
      'features.tile1_title': 'كل عملية بيع، في لحظة حدوثها.',
      'features.tile1_desc': 'يعمل Heifer على جهاز POS أندرويد لديك — إما كصندوق رئيسي أو بجانبه — مسجلاً كل معاملة لحظة دفع العميل. لا إدخال يدوي، ولا تدارُك في نهاية اليوم.',
      'features.tile1_alt': 'لوحة Heifer تعرض معاملات اليوم ووضع ضريبة القيمة المضافة المباشر',

      'features.tile2_eyebrow': '٠٢ / محرك ضريبة القيمة المضافة',
      'features.tile2_title': 'بمواصفات FTA.<br>لكل فاتورة.',
      'features.tile2_desc': 'كل فاتورة منسّقة، ومختومة بمعرّف UUID، وموقّعة تشفيرياً وفق مواصفات الحكومة — دون أي تدخل من التاجر.',
      'features.meter_q1_sales': 'مبيعات الربع الأول',
      'features.meter_vat_collected': 'القيمة المضافة المحصّلة',
      'features.meter_input_vat': 'القيمة المضافة على المدخلات',
      'features.meter_net_payable': 'صافي المستحق',

      'features.tile3_eyebrow': '٠٣ / بوابة المحاسب',
      'features.tile3_title': 'مجانية لمحاسبك.<br>نهاية صندوق الفواتير.',
      'features.tile3_desc': 'يحصل محاسبك على لوحة قراءة فقط لمعاملات كل عميل — مصنّفة، ومنسقة لضريبة القيمة المضافة، وجاهزة للتدقيق. يتوقفون عن مطاردتك للأوراق. ويرشحونك لكل عميل جديد.',
      'features.tile3_alt': 'بوابة المحاسب تعرض أوضاع ضريبة القيمة المضافة لعدة عملاء وتقارير قابلة للتصدير',

      'ai.eyebrow': 'بوت تيليجرام',
      'ai.title': 'محاسبك يعيش <em>داخل محادثات تيليجرام لديك.</em>',
      'ai.lede': 'لوحة الويب لمحاسبك. بوت تيليجرام هو المكان الذي تعيش فيه فعلاً. سجّل عملية بيع في الشات، التقط صورة لفاتورة مورّد، اسأل "هل أستطيع إعادة التخزين اليوم؟" — بالعربية أو الإنجليزية أو الأردية أو الهندية أو المالايالامية. نفس الشات الذي تستخدمه طوال اليوم. لا تطبيق جديد لتتعلمه.',

      'ai.bullet1_title': 'سجّل بيعاً أو مصروفاً من الشات',
      'ai.bullet1_desc': '"١٤٢ مناديل ورقية" أو صورة للإيصال. يصنّفها البوت، يحسب الضريبة، ويوقّع الفاتورة.',
      'ai.bullet2_title': 'النقد المتاح، الآن',
      'ai.bullet2_desc': '"بعد مصروفات اليوم، معك ١٬٤٥٠ درهماً. الدفعة التالية للمورّد بعد ٣ أيام."',
      'ai.bullet3_title': 'أعِد التخزين في اللحظة الصحيحة',
      'ai.bullet3_desc': '"المناديل الورقية تدور كل ١١ يوماً. أعد الطلب خلال ٤. متوسط الإنفاق: ٢٨٠ درهماً."',
      'ai.bullet4_title': 'توظيف يدفع تكلفته بنفسه',
      'ai.bullet4_desc': '"مبيعات ظهر الثلاثاء/الخميس أقل بنسبة ٤٠٪. وردية واحدة قد توفر ٦٠٠ درهم شهرياً."',
      'ai.bullet5_title': 'الربح، أسبوعاً بأسبوع',
      'ai.bullet5_desc': '"هامش الربح الإجمالي ٢٨٪ — انخفض من ٣٤٪ الأسبوع الماضي. الإلكترونيات تحملك."',
      'ai.meta': 'تيليجرام لك · البوابة لمحاسبك',
      'ai.mockup_alt': 'محادثة مساعد Heifer الذكي على تيليجرام',

      'onboard.eyebrow': 'الانضمام',
      'onboard.title': 'انضمام فردي. <em>لا تغيّر شيئاً.</em>',
      'onboard.sub': 'Heifer ليس برنامجاً تحمّله وتحاول فهمه. نعمل مع كل تاجر فردياً — عن بُعد، وبلغتك — لنقل دفاترك، وإعداد بوت تيليجرام الخاص بك، وإطلاع محاسبك. أنت لا تحرّك ساكناً.',

      'onboard.card1_title': 'نبدأ المحادثة',
      'onboard.card1_desc': 'ليس عرضاً تجريبياً. ليس نموذج تسجيل. مكالمة عن كيفية عمل محلك فعلاً — بلغتك، في وقتك. نتعرّف على العمل قبل أن نلمس الدفاتر.',
      'onboard.card1_tag': 'بلا عرض تجريبي · بلا تسجيل',
      'onboard.card2_title': 'نحن ننقل دفاترك نيابة عنك',
      'onboard.card2_desc': 'أرسل لنا دفاترك، وصور فواتير WhatsApp، وملفات المورّدين. ننظّف كل شيء ونرفعه إلى Heifer — من جانبنا. لا تملأ نموذجاً، ولا تعيد كتابة إيصال.',
      'onboard.card2_tag': 'نُنجزه لك · لا تنجزه أنت',
      'onboard.card3_title': 'نُعدّ لك بوت تيليجرام',
      'onboard.card3_desc': 'مشاركة شاشة قصيرة على هاتفك. منذ تلك اللحظة تسجّل المصروفات، تلتقط فواتير الموردين، وتسأل البوت أي شيء — كل ذلك في شات تيليجرام الذي تتابعه طوال اليوم.',
      'onboard.card3_tag': 'تيليجرام أولاً · بلا تطبيق جديد',
      'onboard.card4_title': 'نُطلِع محاسبك',
      'onboard.card4_desc': 'مكالمة منفصلة مدتها ٣٠ دقيقة. يحصل محاسبك على جولة بالبوابة المجانية ويخرج ببيانات أنظف من أي عميل بازار سبق وتعامل معه. هو من سيرشّحنا لاحقاً.',
      'onboard.card4_tag': 'يقلّ عبء عمله · وتُصان أتعابه',
      'onboard.footnote': 'نعمل مع عدد محدود من التجار في وقت واحد — بهدوء، وعناية، بالدعوة.',

      'how.eyebrow': 'كيف يعمل',
      'how.title': 'ثلاث خطوات. <em>لا واحدة منها عليك.</em>',
      'how.sub': 'أنت تسجّل البيع. Heifer يقدّم الباقي. ومحاسبك يقرأ دفاتر نظيفة في نهاية الشهر.',

      'how.step1_title': 'سجّل البيع',
      'how.step1_desc': 'يجلس Heifer على جهاز POS أندرويد لديك. كل معاملة — نقدية أو ببطاقة — تُلتقط لحظة دفع العميل.',
      'how.step1_mock_title': 'POS · الصندوق ١',
      'how.step1_desc_item': 'مناديل ورقية · علبتان',
      'how.step1_chip_cash': 'نقداً',
      'how.step1_chip_card': 'بطاقة',
      'how.step1_chip_credit': 'آجل',
      'how.step1_status': 'تم الالتقاط · ٠٫٢ ثانية',

      'how.step2_title': 'Heifer يقدّم إقرار ضريبتك',
      'how.step2_desc': 'كل فاتورة منسّقة بمواصفات FTA، ومختومة بمعرّف UUID، ومرسلة عبر وسيط امتثال معتمد. لا أوراق عليك.',
      'how.step2_mock_title': 'الضريبة · هذا الربع',
      'how.step2_signed': 'كل الفواتير موقّعة',
      'how.step2_fta_submission': 'تقديم إلى FTA',
      'how.step2_ready': 'جاهز',

      'how.step3_title': 'اسأل Heifer أي شيء',
      'how.step3_desc': '"هل أستطيع إعادة التخزين هذا الأسبوع؟" "كم الضريبة المستحقة عليّ؟" احصل على الإجابة بلغتك، فوراً.',
      'how.step3_mock_title': 'Heifer AI · تيليجرام',
      'how.step3_user_msg': 'هل أستطيع إعادة التخزين اليوم؟',
      'how.step3_bot_msg': 'نعم — ١٬٤٥٠ درهماً متاحة، ودفعة مورّد ٩٠٠ درهم مستحقة الجمعة. ميزانية إعادة التخزين الآمنة: ٣٥٠ درهماً.',
      'how.step3_status': 'تم الرد · ١٫٤ ثانية',

      'privacy.quote': 'معظم برامج المحاسبة تبدأ بنموذج تسجيل.<br><strong>Heifer يبدأ بمحادثة.</strong>',
      'privacy.quote_meta': 'ما يميّز Heifer، في سطر واحد.',
      'privacy.stat1': 'نماذج تسجيل لتعبئتها',
      'privacy.stat2': 'إيصالات يُعاد كتابتها',
      'privacy.stat3': 'بيانات تغادر منطقتك',
      'privacy.stat4': 'لغات، بشكل أصيل',
      'privacy.link': 'شاهد كيف يناسب محلك',

      'book.title': 'مستعد <em>للحديث؟</em>',
      'book.sub': 'نحن ننقل دفاترك. نُعدّ بوت تيليجرام الخاص بك. نُطلِع محاسبك. أنت لا تغيّر شيئاً في طريقة عملك — ونحن نغيّر كل شيء في كيفية تسجيله.',
      'book.btn_book': 'احجز مكالمة مجانية ٣٠ دقيقة',
      'book.btn_partner': 'كن شريكاً محاسباً',
      'book.note': 'استشارة مجانية ٣٠ دقيقة · بلا عرض تجريبي، بلا تسجيل · بالدعوة',

      'footer.tagline': 'محاسبة ذكية مصمَّمة لتجار بازار الإمارات — تدخل فواتير WhatsApp، وتخرج دفاتر جاهزة لـ FTA.',
      'footer.status': 'كل الأنظمة طبيعية · دبي · الإمارات',
      'footer.product': 'المنتج',
      'footer.product_inside': 'ما الذي يقدمه',
      'footer.product_bot': 'بوت تيليجرام',
      'footer.product_accountants': 'بوابة المحاسب',
      'footer.product_book': 'احجز مكالمة مجانية',
      'footer.compliance': 'الامتثال',
      'footer.compliance_fta': 'الفوترة الإلكترونية لـ FTA',
      'footer.compliance_residency': 'إقامة البيانات',
      'footer.compliance_vat': 'ضريبة القيمة المضافة وضريبة الشركات',
      'footer.compliance_security': 'الأمان',
      'footer.company': 'الشركة',
      'footer.company_about': 'من نحن',
      'footer.company_changelog': 'سجل التحديثات',
      'footer.company_privacy': 'سياسة الخصوصية',
      'footer.company_terms': 'شروط الاستخدام',
      'footer.connect': 'تواصل',
      'footer.connect_book': 'احجز مكالمة مجانية',
      'footer.connect_partners': 'شركاء المحاسبين',
      'footer.connect_press': 'الصحافة والإعلام',
      'footer.copyright': '© ٢٠٢٦ Heifer Technologies Inc.',
      'footer.meta': 'مصمَّم في تورونتو · مبني للإمارات',
      'footer.back_top': 'العودة للأعلى',

      'fab.dark': 'تبديل الوضع الداكن',
      'fab.top': 'العودة للأعلى',
    },

    /* ─────────────────────── اردو (Urdu) ─────────────────────── */
    ur: {
      'html.title': 'Heifer | بازار کے تاجروں کے لیے سمارٹ بک کیپنگ',

      'nav.home': 'ہوم',
      'nav.features': 'خصوصیات',
      'nav.telegram_bot': 'ٹیلیگرام بوٹ',
      'nav.onboarding': 'آن بورڈنگ',
      'nav.for_accountants': 'اکاؤنٹنٹس کے لیے',
      'nav.book_call': 'مفت کال بک کریں',
      'nav.menu': 'مینو',
      'nav.language': 'زبان',
      'nav.choose_language': 'زبان منتخب کریں',
      'nav.more_languages': 'مزید زبانیں درخواست پر',

      'hero.badge': 'VAT کے مطابق · UAE کے بازاروں کے لیے بنایا گیا',
      'hero.title': 'آپ دکان چلائیں۔<br>Heifer چلائے گا <span class="hero-accent">حساب کتاب۔</span>',
      'hero.sub': 'ہر نقد بکری سے لے کر آپ کی آخری VAT فائلنگ تک، Heifer پسِ پردہ سارا حساب کتاب سنبھالتا ہے۔ ٹیلیگرام بوٹ سے آپ اخراجات درج کریں، سپلائر کی رسیدیں کھینچیں، اور سوال پوچھیں — یہ سب اسی چیٹ میں جسے آپ پہلے ہی استعمال کرتے ہیں، آپ کی زبان میں۔ آپ اپنے کاروبار کے طریقے میں کچھ تبدیل نہیں کرتے۔',
      'hero.cta_book': '30 منٹ کی مفت کال بک کریں',
      'hero.cta_accountants': 'اکاؤنٹنٹس کے لیے',
      'hero.stat_onboarded': '<strong style="color:var(--t1);font-weight:500">انفرادی</strong> آن بورڈنگ',
      'hero.stat_daily': 'روزانہ <strong style="color:var(--t1);font-weight:500">ٹیلیگرام</strong> پر',
      'hero.stat_languages': '<strong style="color:var(--t1);font-weight:500">5</strong> زبانیں',
      'hero.stat_fta': '<strong style="color:var(--t1);font-weight:500">FTA</strong> کے مطابق',
      'hero.mockup_title': 'Heifer · آج',
      'hero.mockup_alt': 'Heifer مرچنٹ ڈیش بورڈ جس میں آج کی فروخت، VAT پوزیشن، اور دستیاب نقدی دکھائی جا رہی ہے',

      'trust.onboarded': 'ہماری ٹیم آن بورڈ کرتی ہے، آپ نہیں',
      'trust.languages': 'انگریزی، عربی، اردو، ہندی، ملیالم',
      'trust.accountant': 'آپ کے اکاؤنٹنٹ کے لیے مفت',
      'trust.in_region': 'ڈیٹا خطے کے اندر ہوسٹ کیا گیا',

      'features.eyebrow': 'اندر کیا ہے',
      'features.title': 'گلے کے لیے بنایا گیا۔<br><em>اسپریڈ شیٹ کے لیے نہیں۔</em>',
      'features.aside': 'ہر موجودہ ٹول یہ مان لیتا ہے کہ آپ کے پاس پہلے سے صاف ڈیجیٹل ڈیٹا ہے۔ بازار کے تاجروں کے پاس ایسا نہیں ہوتا۔ Heifer نقد فروخت، ہاتھ سے لکھی رسیدوں، اور WhatsApp پر تصویر بھیجنے والے سپلائرز کے لیے بنایا گیا ہے۔',

      'features.tile1_eyebrow': '01 / POS ریکارڈنگ',
      'features.tile1_title': 'ہر بکری، اسی لمحے۔',
      'features.tile1_desc': 'Heifer آپ کے Android POS پر چلتا ہے — یا تو خود گلہ کے طور پر، یا اس کے ساتھ — اور ہر ٹرانزیکشن کو اسی لمحے ریکارڈ کرتا ہے جب گاہک ادائیگی کرتا ہے۔ نہ ڈیٹا انٹری، نہ دن کے آخر کا کام۔',
      'features.tile1_alt': 'Heifer ڈیش بورڈ جس میں آج کے ٹرانزیکشنز اور لائیو VAT پوزیشن دکھائی جا رہی ہے',

      'features.tile2_eyebrow': '02 / VAT انجن',
      'features.tile2_title': 'FTA معیار۔<br>ہر انوائس۔',
      'features.tile2_desc': 'ہر انوائس فارمیٹ کی گئی، UUID سے مہر بند، اور حکومتی معیار کے مطابق کرپٹوگرافی سے دستخط شدہ — تاجر کی کسی مداخلت کے بغیر۔',
      'features.meter_q1_sales': 'پہلی سہ ماہی فروخت',
      'features.meter_vat_collected': 'وصول کردہ VAT',
      'features.meter_input_vat': 'ان پٹ VAT',
      'features.meter_net_payable': 'خالص قابلِ ادائیگی',

      'features.tile3_eyebrow': '03 / اکاؤنٹنٹ پورٹل',
      'features.tile3_title': 'آپ کے اکاؤنٹنٹ کے لیے مفت۔<br>کاغذی ڈبے کا اختتام۔',
      'features.tile3_desc': 'آپ کے اکاؤنٹنٹ کو ہر کلائنٹ کے ٹرانزیکشنز کا لائیو، صرف پڑھنے والا ڈیش بورڈ ملتا ہے — درجہ بند، VAT فارمیٹ شدہ، آڈٹ کے لیے تیار۔ وہ آپ سے کاغذات کا پیچھا کرنا چھوڑ دیں گے۔ ہر نئے کلائنٹ کو آپ کی سفارش کریں گے۔',
      'features.tile3_alt': 'اکاؤنٹنٹ پورٹل جس میں متعدد کلائنٹس کی VAT پوزیشنز اور قابلِ برآمد رپورٹس دکھائی جا رہی ہیں',

      'ai.eyebrow': 'ٹیلیگرام بوٹ',
      'ai.title': 'آپ کا منشی رہتا ہے <em>آپ کی ٹیلیگرام چیٹس میں۔</em>',
      'ai.lede': 'ویب ڈیش بورڈ آپ کے اکاؤنٹنٹ کے لیے ہے۔ ٹیلیگرام بوٹ وہ جگہ ہے جہاں آپ اصل میں رہتے ہیں۔ چیٹ میں بکری درج کریں، سپلائر کی رسید کی تصویر کھینچیں، پوچھیں "کیا میں آج اسٹاک منگوا سکتا ہوں؟" — اردو، انگریزی، عربی، ہندی، یا ملیالم میں۔ وہی چیٹ جو آپ سارا دن استعمال کرتے ہیں۔ سیکھنے کے لیے کوئی نئی ایپ نہیں۔',

      'ai.bullet1_title': 'چیٹ میں بکری یا خرچہ درج کریں',
      'ai.bullet1_desc': '"142 ٹشو پیپر" یا رسید کی تصویر۔ بوٹ درجہ بندی کرتا ہے، VAT حساب کرتا ہے، اور انوائس پر دستخط کرتا ہے۔',
      'ai.bullet2_title': 'دستیاب نقدی، ابھی',
      'ai.bullet2_desc': '"آج کے اخراجات کے بعد، آپ کے پاس AED 1,450 ہیں۔ اگلی سپلائر ادائیگی 3 دن میں۔"',
      'ai.bullet3_title': 'صحیح وقت پر اسٹاک منگوائیں',
      'ai.bullet3_desc': '"ٹشو پیپر ہر 11 دن میں ختم ہوتا ہے۔ 4 دن کے اندر دوبارہ آرڈر کریں۔ اوسط خرچ: AED 280۔"',
      'ai.bullet4_title': 'وہ عملہ جو اپنی قیمت خود نکالے',
      'ai.bullet4_desc': '"منگل/جمعرات کی دوپہر کی فروخت 40% کم ہے۔ ایک شفٹ ماہانہ AED 600 بچا سکتی ہے۔"',
      'ai.bullet5_title': 'منافع، ہفتہ بہ ہفتہ',
      'ai.bullet5_desc': '"مجموعی مارجن 28% ہے — پچھلے ہفتے سے 34% سے گرا۔ الیکٹرانکس آپ کو سہارا دے رہے ہیں۔"',
      'ai.meta': 'ٹیلیگرام آپ کے لیے · پورٹل آپ کے اکاؤنٹنٹ کے لیے',
      'ai.mockup_alt': 'ٹیلیگرام پر Heifer AI اسسٹنٹ چیٹ',

      'onboard.eyebrow': 'آن بورڈنگ',
      'onboard.title': 'انفرادی آن بورڈنگ۔ <em>آپ کچھ تبدیل نہیں کرتے۔</em>',
      'onboard.sub': 'Heifer وہ سافٹ ویئر نہیں جسے آپ ڈاؤن لوڈ کر کے خود سمجھیں۔ ہم ہر تاجر کے ساتھ انفرادی طور پر کام کرتے ہیں — دور سے، آپ کی زبان میں — آپ کے کھاتے منتقل کرنے، آپ کا ٹیلیگرام بوٹ سیٹ کرنے، اور آپ کے اکاؤنٹنٹ کو سمجھانے کے لیے۔ آپ کو ایک انگلی بھی نہیں اٹھانی۔',

      'onboard.card1_title': 'ہم بات چیت شروع کرتے ہیں',
      'onboard.card1_desc': 'یہ کوئی ڈیمو نہیں۔ سائن اپ فارم نہیں۔ ایک کال کہ آپ کی دکان اصل میں کیسے چلتی ہے — آپ کی زبان میں، آپ کے وقت پر۔ ہم کھاتوں کو چھونے سے پہلے کاروبار کو سمجھتے ہیں۔',
      'onboard.card1_tag': 'نہ ڈیمو · نہ سائن اپ',
      'onboard.card2_title': 'ہم آپ کے کھاتے آپ کی جگہ منتقل کرتے ہیں',
      'onboard.card2_desc': 'ہمیں اپنی نوٹ بکس، WhatsApp انوائس تصاویر، اور سپلائر فولڈرز بھیجیں۔ ہم سب کچھ صاف کر کے Heifer میں اپنی طرف سے لوڈ کرتے ہیں۔ نہ آپ فارم بھرتے ہیں، نہ رسید دوبارہ ٹائپ کرتے ہیں۔',
      'onboard.card2_tag': 'ہم کرتے ہیں · آپ نہیں',
      'onboard.card3_title': 'ہم آپ کا ٹیلیگرام بوٹ سیٹ کرتے ہیں',
      'onboard.card3_desc': 'آپ کے فون پر ایک مختصر اسکرین شیئر۔ اس لمحے سے آپ اخراجات درج کریں گے، سپلائر کی رسیدیں کھینچیں گے، اور بوٹ سے کچھ بھی پوچھیں گے — یہ سب اسی ٹیلیگرام چیٹ میں جسے آپ سارا دن چیک کرتے ہیں۔',
      'onboard.card3_tag': 'ٹیلیگرام پہلے · کوئی نئی ایپ نہیں',
      'onboard.card4_title': 'ہم آپ کے اکاؤنٹنٹ کو سمجھاتے ہیں',
      'onboard.card4_desc': 'الگ 30 منٹ کی کال۔ آپ کے اکاؤنٹنٹ کو مفت پورٹل کا دورہ ملتا ہے اور وہ کسی بھی بازار کلائنٹ سے کہیں زیادہ صاف ڈیٹا کے ساتھ نکلتے ہیں۔ اگلی بار وہ ہماری سفارش کرتے ہیں۔',
      'onboard.card4_tag': 'ان کا کام کم · ان کی فیس محفوظ',
      'onboard.footnote': 'ہم ایک وقت میں چند تاجروں کے ساتھ کام کرتے ہیں — خاموشی سے، احتیاط سے، صرف دعوت پر۔',

      'how.eyebrow': 'یہ کیسے کام کرتا ہے',
      'how.title': 'تین قدم۔ <em>کوئی بھی آپ کا نہیں۔</em>',
      'how.sub': 'آپ بکری درج کرتے ہیں۔ Heifer باقی فائل کرتا ہے۔ آپ کا اکاؤنٹنٹ مہینے کے آخر میں صاف کھاتے پڑھتا ہے۔',

      'how.step1_title': 'بکری درج کریں',
      'how.step1_desc': 'Heifer آپ کے Android POS پر بیٹھا ہوتا ہے۔ ہر ٹرانزیکشن — نقد یا کارڈ — اسی لمحے ریکارڈ ہوتا ہے جب گاہک ادائیگی کرتا ہے۔',
      'how.step1_mock_title': 'POS · گلہ 1',
      'how.step1_desc_item': 'ٹشو پیپر · 2 پیک',
      'how.step1_chip_cash': 'نقد',
      'how.step1_chip_card': 'کارڈ',
      'how.step1_chip_credit': 'ادھار',
      'how.step1_status': 'ریکارڈ ہو گیا · 0.2 سیکنڈ',

      'how.step2_title': 'Heifer آپ کا VAT فائل کرتا ہے',
      'how.step2_desc': 'ہر انوائس FTA معیار کے مطابق فارمیٹ کی گئی، UUID سے مہر بند، اور تصدیق شدہ کمپلائنس مڈل ویئر سے بھیجی گئی۔ آپ کی طرف کوئی کاغذی کارروائی نہیں۔',
      'how.step2_mock_title': 'VAT · اس سہ ماہی',
      'how.step2_signed': 'تمام انوائسز پر دستخط',
      'how.step2_fta_submission': 'FTA کو جمع کرانا',
      'how.step2_ready': 'تیار',

      'how.step3_title': 'Heifer سے کچھ بھی پوچھیں',
      'how.step3_desc': '"کیا میں اس ہفتے اسٹاک منگوا سکتا ہوں؟" "مجھ پر کتنا VAT ہے؟" اپنی زبان میں فوری جواب لیں۔',
      'how.step3_mock_title': 'Heifer AI · ٹیلیگرام',
      'how.step3_user_msg': 'کیا میں آج اسٹاک منگوا سکتا ہوں؟',
      'how.step3_bot_msg': 'ہاں — AED 1,450 ہاتھ میں، AED 900 کی سپلائر ادائیگی جمعہ کو واجب الادا۔ اسٹاک منگوانے کا محفوظ بجٹ: AED 350۔',
      'how.step3_status': 'جواب دے دیا · 1.4 سیکنڈ',

      'privacy.quote': 'زیادہ تر بک کیپنگ سائن اپ فارم سے شروع ہوتی ہے۔<br><strong>Heifer ایک بات چیت سے شروع ہوتا ہے۔</strong>',
      'privacy.quote_meta': 'جو Heifer کو ممتاز بناتا ہے، ایک سطر میں۔',
      'privacy.stat1': 'بھرنے والے سائن اپ فارم',
      'privacy.stat2': 'دوبارہ ٹائپ ہونے والی رسیدیں',
      'privacy.stat3': 'آپ کے خطے سے باہر جانے والا ڈیٹا',
      'privacy.stat4': 'مکمل طور پر زبانیں',
      'privacy.link': 'دیکھیں یہ آپ کی دکان پر کیسے فٹ بیٹھتا ہے',

      'book.title': 'بات کرنے کے لیے <em>تیار؟</em>',
      'book.sub': 'ہم آپ کے کھاتے منتقل کرتے ہیں۔ ہم آپ کا ٹیلیگرام بوٹ سیٹ کرتے ہیں۔ ہم آپ کے اکاؤنٹنٹ کو سمجھاتے ہیں۔ آپ اپنے کاروبار کے طریقے میں کچھ تبدیل نہیں کرتے — ہم اس بات کو بدل دیتے ہیں کہ یہ کیسے ریکارڈ ہوتا ہے۔',
      'book.btn_book': '30 منٹ کی مفت کال بک کریں',
      'book.btn_partner': 'اکاؤنٹنٹ پارٹنر بنیں',
      'book.note': '30 منٹ کی مفت مشاورت · نہ ڈیمو، نہ سائن اپ · صرف دعوت پر',

      'footer.tagline': 'UAE کے بازار کے تاجروں کے لیے بنی سمارٹ بک کیپنگ — WhatsApp کی رسیدیں اندر، FTA کے لیے تیار کھاتے باہر۔',
      'footer.status': 'تمام نظام معمول پر · دبئی · UAE',
      'footer.product': 'پروڈکٹ',
      'footer.product_inside': 'اندر کیا ہے',
      'footer.product_bot': 'ٹیلیگرام بوٹ',
      'footer.product_accountants': 'اکاؤنٹنٹ پورٹل',
      'footer.product_book': 'مفت کال بک کریں',
      'footer.compliance': 'کمپلائنس',
      'footer.compliance_fta': 'UAE FTA ای انوائسنگ',
      'footer.compliance_residency': 'ڈیٹا ریزیڈنسی',
      'footer.compliance_vat': 'VAT اور کارپوریٹ ٹیکس',
      'footer.compliance_security': 'سیکیورٹی',
      'footer.company': 'کمپنی',
      'footer.company_about': 'ہمارے بارے میں',
      'footer.company_changelog': 'تبدیلیوں کی فہرست',
      'footer.company_privacy': 'پرائیویسی پالیسی',
      'footer.company_terms': 'استعمال کی شرائط',
      'footer.connect': 'رابطہ',
      'footer.connect_book': 'مفت کال بک کریں',
      'footer.connect_partners': 'اکاؤنٹنٹ پارٹنرز',
      'footer.connect_press': 'پریس اور میڈیا',
      'footer.copyright': '© 2026 Heifer Technologies Inc.',
      'footer.meta': 'ٹورنٹو میں ڈیزائن کیا گیا · UAE کے لیے بنایا گیا',
      'footer.back_top': 'اوپر واپس جائیں',

      'fab.dark': 'ڈارک موڈ ٹوگل کریں',
      'fab.top': 'اوپر واپس جائیں',
    },

    /* ─────────────────────── हिन्दी (Hindi) ─────────────────────── */
    hi: {
      'html.title': 'Heifer | बाज़ार के व्यापारियों के लिए स्मार्ट बहीखाता',

      'nav.home': 'होम',
      'nav.features': 'विशेषताएँ',
      'nav.telegram_bot': 'टेलीग्राम बॉट',
      'nav.onboarding': 'ऑनबोर्डिंग',
      'nav.for_accountants': 'अकाउंटेंट के लिए',
      'nav.book_call': 'मुफ़्त कॉल बुक करें',
      'nav.menu': 'मेनू',
      'nav.language': 'भाषा',
      'nav.choose_language': 'भाषा चुनें',
      'nav.more_languages': 'और भाषाएँ अनुरोध पर',

      'hero.badge': 'VAT-अनुपालन · UAE बाज़ारों के लिए बनाया गया',
      'hero.title': 'आप दुकान चलाइए।<br>Heifer चलाएगा <span class="hero-accent">बहीखाता।</span>',
      'hero.sub': 'हर नकद बिक्री से लेकर आपकी अंतिम VAT फाइलिंग तक, Heifer पर्दे के पीछे पूरा बहीखाता संभालता है। टेलीग्राम बॉट आपको खर्चे दर्ज करने, सप्लायर रसीदें खींचने, और सवाल पूछने देता है — सब उसी चैट में जो आप पहले से इस्तेमाल करते हैं, आपकी भाषा में। आपको अपने व्यापार करने का तरीका बदलने की ज़रूरत नहीं।',
      'hero.cta_book': 'मुफ़्त 30-मिनट कॉल बुक करें',
      'hero.cta_accountants': 'अकाउंटेंट के लिए',
      'hero.stat_onboarded': '<strong style="color:var(--t1);font-weight:500">वन-ऑन-वन</strong> ऑनबोर्डिंग',
      'hero.stat_daily': 'रोज़ <strong style="color:var(--t1);font-weight:500">टेलीग्राम</strong> पर',
      'hero.stat_languages': '<strong style="color:var(--t1);font-weight:500">5</strong> भाषाएँ',
      'hero.stat_fta': '<strong style="color:var(--t1);font-weight:500">FTA</strong>-अनुपालन',
      'hero.mockup_title': 'Heifer · आज',
      'hero.mockup_alt': 'Heifer मर्चेंट डैशबोर्ड जिसमें आज की बिक्री, VAT स्थिति, और उपलब्ध नकदी दिख रही है',

      'trust.onboarded': 'हमारी टीम ऑनबोर्ड करती है, आप नहीं',
      'trust.languages': 'अंग्रेज़ी, अरबी, उर्दू, हिन्दी, मलयालम',
      'trust.accountant': 'आपके अकाउंटेंट के लिए मुफ़्त',
      'trust.in_region': 'डेटा क्षेत्र में ही होस्ट किया जाता है',

      'features.eyebrow': 'अंदर क्या है',
      'features.title': 'कैश काउंटर के लिए बना।<br><em>स्प्रेडशीट के लिए नहीं।</em>',
      'features.aside': 'हर मौजूदा टूल यह मान लेता है कि आपके पास पहले से साफ डिजिटल डेटा है। बाज़ार के व्यापारियों के पास नहीं होता। Heifer नकद बिक्री, हाथ से लिखी रसीदों, और WhatsApp पर फ़ोटो भेजने वाले सप्लायरों के लिए बना है।',

      'features.tile1_eyebrow': '01 / POS कैप्चर',
      'features.tile1_title': 'हर बिक्री, उसी पल।',
      'features.tile1_desc': 'Heifer आपके Android POS पर चलता है — या तो खुद कैश काउंटर के रूप में, या उसके साथ — और हर लेन-देन को उसी पल रिकॉर्ड करता है जब ग्राहक भुगतान करता है। न डेटा एंट्री, न दिन के अंत की भागदौड़।',
      'features.tile1_alt': 'Heifer डैशबोर्ड जिसमें आज के लेन-देन और लाइव VAT स्थिति दिख रही है',

      'features.tile2_eyebrow': '02 / VAT इंजन',
      'features.tile2_title': 'FTA मानक।<br>हर इनवॉइस।',
      'features.tile2_desc': 'हर इनवॉइस फॉर्मेट की गई, UUID-मुहर लगी, और सरकारी मानक के अनुसार क्रिप्टोग्राफिक रूप से हस्ताक्षरित — व्यापारी की किसी भी भागीदारी के बिना।',
      'features.meter_q1_sales': 'पहली तिमाही की बिक्री',
      'features.meter_vat_collected': 'वसूला गया VAT',
      'features.meter_input_vat': 'इनपुट VAT',
      'features.meter_net_payable': 'शुद्ध देय',

      'features.tile3_eyebrow': '03 / अकाउंटेंट पोर्टल',
      'features.tile3_title': 'आपके अकाउंटेंट के लिए मुफ़्त।<br>कागज़ी डिब्बे का अंत।',
      'features.tile3_desc': 'आपके अकाउंटेंट को हर ग्राहक के लेन-देन का लाइव, केवल-पढ़ने वाला डैशबोर्ड मिलता है — वर्गीकृत, VAT फॉर्मेट में, ऑडिट के लिए तैयार। वे आपसे कागज़ात के लिए पीछे पड़ना बंद कर देंगे। हर नए ग्राहक को आपकी सिफ़ारिश करेंगे।',
      'features.tile3_alt': 'अकाउंटेंट पोर्टल जिसमें कई ग्राहकों की VAT स्थितियाँ और निर्यात-योग्य रिपोर्ट्स दिख रही हैं',

      'ai.eyebrow': 'टेलीग्राम बॉट',
      'ai.title': 'आपका मुनीम रहता है <em>आपकी टेलीग्राम चैट में।</em>',
      'ai.lede': 'वेब डैशबोर्ड आपके अकाउंटेंट के लिए है। टेलीग्राम बॉट वह जगह है जहाँ आप असल में रहते हैं। चैट में बिक्री दर्ज करें, सप्लायर की रसीद की फ़ोटो खींचें, पूछें "क्या मैं आज स्टॉक मंगा सकता हूँ?" — हिन्दी, अंग्रेज़ी, अरबी, उर्दू, या मलयालम में। वही चैट जो आप पूरे दिन इस्तेमाल करते हैं। सीखने के लिए कोई नई ऐप नहीं।',

      'ai.bullet1_title': 'चैट में बिक्री या खर्च दर्ज करें',
      'ai.bullet1_desc': '"142 टिशू पेपर" या रसीद की फ़ोटो। बॉट वर्गीकृत करता है, VAT गणना करता है, इनवॉइस पर हस्ताक्षर करता है।',
      'ai.bullet2_title': 'अभी हाथ में कितनी नकदी है',
      'ai.bullet2_desc': '"आज के खर्चों के बाद, आपके पास AED 1,450 हैं। अगला सप्लायर भुगतान 3 दिन में।"',
      'ai.bullet3_title': 'सही समय पर स्टॉक मँगाएँ',
      'ai.bullet3_desc': '"टिशू पेपर हर 11 दिन में ख़त्म होता है। 4 दिन के अंदर दोबारा ऑर्डर करें। औसत खर्च: AED 280।"',
      'ai.bullet4_title': 'वह स्टाफ़ जो अपना ख़र्च खुद निकाले',
      'ai.bullet4_desc': '"मंगल/गुरुवार दोपहर की बिक्री 40% कम है। एक शिफ़्ट महीने में AED 600 बचा सकती है।"',
      'ai.bullet5_title': 'मुनाफ़ा, हफ़्ते-दर-हफ़्ते',
      'ai.bullet5_desc': '"कुल मार्जिन 28% है — पिछले हफ़्ते के 34% से नीचे। इलेक्ट्रॉनिक्स आपको थामे हुए हैं।"',
      'ai.meta': 'टेलीग्राम आपके लिए · पोर्टल आपके अकाउंटेंट के लिए',
      'ai.mockup_alt': 'टेलीग्राम पर Heifer AI असिस्टेंट चैट',

      'onboard.eyebrow': 'ऑनबोर्डिंग',
      'onboard.title': 'वन-ऑन-वन ऑनबोर्डिंग। <em>आप कुछ नहीं बदलते।</em>',
      'onboard.sub': 'Heifer कोई सॉफ़्टवेयर नहीं जिसे आप डाउनलोड करके खुद समझें। हम हर व्यापारी के साथ अलग-अलग काम करते हैं — दूर से, आपकी भाषा में — आपके बहीखाते माइग्रेट करने, आपका टेलीग्राम बॉट सेट करने, और आपके अकाउंटेंट को समझाने के लिए। आपको उँगली तक नहीं हिलानी।',

      'onboard.card1_title': 'हम बातचीत शुरू करते हैं',
      'onboard.card1_desc': 'न डेमो। न साइनअप फ़ॉर्म। एक कॉल कि आपकी दुकान असल में कैसे चलती है — आपकी भाषा में, आपके समय पर। हम बहीखातों को छूने से पहले व्यापार को समझते हैं।',
      'onboard.card1_tag': 'न डेमो · न साइनअप',
      'onboard.card2_title': 'हम आपके बहीखाते आपकी जगह माइग्रेट करते हैं',
      'onboard.card2_desc': 'हमें अपनी नोटबुक्स, WhatsApp इनवॉइस फ़ोटो, और सप्लायर फ़ोल्डर भेजें। हम सब कुछ साफ़ करके Heifer में अपनी तरफ़ से लोड करते हैं। न आप फ़ॉर्म भरते हैं, न रसीद दोबारा टाइप करते हैं।',
      'onboard.card2_tag': 'हम करते हैं · आप नहीं',
      'onboard.card3_title': 'हम आपका टेलीग्राम बॉट सेट करते हैं',
      'onboard.card3_desc': 'आपके फ़ोन पर एक छोटा स्क्रीन-शेयर। उस पल से आप खर्चे दर्ज करते हैं, सप्लायर रसीदें खींचते हैं, और बॉट से कुछ भी पूछते हैं — सब उसी टेलीग्राम चैट में जिसे आप पूरे दिन देखते हैं।',
      'onboard.card3_tag': 'टेलीग्राम पहले · कोई नई ऐप नहीं',
      'onboard.card4_title': 'हम आपके अकाउंटेंट को समझाते हैं',
      'onboard.card4_desc': 'अलग 30 मिनट की कॉल। आपके अकाउंटेंट को मुफ़्त पोर्टल का दौरा मिलता है और वे किसी भी बाज़ार ग्राहक से ज़्यादा साफ़ डेटा के साथ निकलते हैं। अगली बार वे हमारी सिफ़ारिश करते हैं।',
      'onboard.card4_tag': 'उनका काम घटता है · उनकी फ़ीस सुरक्षित',
      'onboard.footnote': 'हम एक समय में मुट्ठी भर व्यापारियों के साथ काम करते हैं — चुपचाप, सावधानी से, सिर्फ़ निमंत्रण पर।',

      'how.eyebrow': 'यह कैसे काम करता है',
      'how.title': 'तीन कदम। <em>एक भी आपका नहीं।</em>',
      'how.sub': 'आप बिक्री दर्ज करते हैं। Heifer बाक़ी फ़ाइल करता है। आपका अकाउंटेंट महीने के अंत में साफ़ बहीखाते पढ़ता है।',

      'how.step1_title': 'बिक्री दर्ज करें',
      'how.step1_desc': 'Heifer आपके Android POS पर बैठा रहता है। हर लेन-देन — नकद हो या कार्ड — उसी पल रिकॉर्ड हो जाता है जब ग्राहक भुगतान करता है।',
      'how.step1_mock_title': 'POS · काउंटर 1',
      'how.step1_desc_item': 'टिशू पेपर · 2 पैक',
      'how.step1_chip_cash': 'नकद',
      'how.step1_chip_card': 'कार्ड',
      'how.step1_chip_credit': 'उधार',
      'how.step1_status': 'रिकॉर्ड हो गया · 0.2 सेकंड',

      'how.step2_title': 'Heifer आपका VAT फ़ाइल करता है',
      'how.step2_desc': 'हर इनवॉइस FTA मानक में फ़ॉर्मेट, UUID-मुहर लगी, और प्रमाणित अनुपालन मिडलवेयर से भेजी जाती है। आपकी तरफ़ कोई कागज़ी कार्रवाई नहीं।',
      'how.step2_mock_title': 'VAT · इस तिमाही',
      'how.step2_signed': 'सभी इनवॉइस हस्ताक्षरित',
      'how.step2_fta_submission': 'FTA में जमा',
      'how.step2_ready': 'तैयार',

      'how.step3_title': 'Heifer से कुछ भी पूछें',
      'how.step3_desc': '"क्या मैं इस हफ़्ते स्टॉक मँगा सकता हूँ?" "मुझ पर कितना VAT है?" अपनी भाषा में तुरंत जवाब पाएँ।',
      'how.step3_mock_title': 'Heifer AI · टेलीग्राम',
      'how.step3_user_msg': 'क्या मैं आज स्टॉक मँगा सकता हूँ?',
      'how.step3_bot_msg': 'हाँ — AED 1,450 हाथ में, AED 900 सप्लायर भुगतान शुक्रवार को देय। स्टॉक का सुरक्षित बजट: AED 350।',
      'how.step3_status': 'जवाब दिया · 1.4 सेकंड',

      'privacy.quote': 'ज़्यादातर बहीखाता साइनअप फ़ॉर्म से शुरू होता है।<br><strong>Heifer एक बातचीत से शुरू होता है।</strong>',
      'privacy.quote_meta': 'जो Heifer को अलग बनाता है, एक पंक्ति में।',
      'privacy.stat1': 'भरने को साइनअप फ़ॉर्म',
      'privacy.stat2': 'दोबारा टाइप होती रसीदें',
      'privacy.stat3': 'आपके क्षेत्र से बाहर जाता डेटा',
      'privacy.stat4': 'मूल रूप से भाषाएँ',
      'privacy.link': 'देखें यह आपकी दुकान पर कैसे फ़िट होता है',

      'book.title': 'बात करने के लिए <em>तैयार?</em>',
      'book.sub': 'हम आपके बहीखाते माइग्रेट करते हैं। हम आपका टेलीग्राम बॉट सेट करते हैं। हम आपके अकाउंटेंट को समझाते हैं। आप अपने व्यापार के तरीके में कुछ नहीं बदलते — हम उसके रिकॉर्ड होने का तरीका बदल देते हैं।',
      'book.btn_book': 'मुफ़्त 30-मिनट कॉल बुक करें',
      'book.btn_partner': 'अकाउंटेंट पार्टनर बनें',
      'book.note': 'मुफ़्त 30-मिनट परामर्श · न डेमो, न साइनअप · सिर्फ़ निमंत्रण पर',

      'footer.tagline': 'UAE के बाज़ार व्यापारियों के लिए बनी स्मार्ट बहीखाता — WhatsApp रसीदें अंदर, FTA-तैयार बहीखाते बाहर।',
      'footer.status': 'सभी सिस्टम सामान्य · दुबई · UAE',
      'footer.product': 'प्रोडक्ट',
      'footer.product_inside': 'अंदर क्या है',
      'footer.product_bot': 'टेलीग्राम बॉट',
      'footer.product_accountants': 'अकाउंटेंट पोर्टल',
      'footer.product_book': 'मुफ़्त कॉल बुक करें',
      'footer.compliance': 'अनुपालन',
      'footer.compliance_fta': 'UAE FTA ई-इनवॉइसिंग',
      'footer.compliance_residency': 'डेटा रेज़िडेंसी',
      'footer.compliance_vat': 'VAT और कॉर्पोरेट टैक्स',
      'footer.compliance_security': 'सुरक्षा',
      'footer.company': 'कंपनी',
      'footer.company_about': 'परिचय',
      'footer.company_changelog': 'बदलाव सूची',
      'footer.company_privacy': 'गोपनीयता नीति',
      'footer.company_terms': 'उपयोग की शर्तें',
      'footer.connect': 'संपर्क',
      'footer.connect_book': 'मुफ़्त कॉल बुक करें',
      'footer.connect_partners': 'अकाउंटेंट पार्टनर',
      'footer.connect_press': 'प्रेस और मीडिया',
      'footer.copyright': '© 2026 Heifer Technologies Inc.',
      'footer.meta': 'टोरंटो में डिज़ाइन · UAE के लिए बनाया गया',
      'footer.back_top': 'ऊपर वापस जाएँ',

      'fab.dark': 'डार्क मोड टॉगल करें',
      'fab.top': 'ऊपर वापस जाएँ',
    },

    /* ─────────────────────── മലയാളം (Malayalam) ─────────────────────── */
    ml: {
      'html.title': 'Heifer | ബസാർ വ്യാപാരികൾക്കായുള്ള സ്മാർട്ട് ബുക്ക്കീപ്പിംഗ്',

      'nav.home': 'ഹോം',
      'nav.features': 'സവിശേഷതകൾ',
      'nav.telegram_bot': 'ടെലിഗ്രാം ബോട്ട്',
      'nav.onboarding': 'ഓൺബോർഡിംഗ്',
      'nav.for_accountants': 'അക്കൗണ്ടന്റുമാർക്കായി',
      'nav.book_call': 'സൗജന്യ കോൾ ബുക്ക് ചെയ്യൂ',
      'nav.menu': 'മെനു',
      'nav.language': 'ഭാഷ',
      'nav.choose_language': 'ഭാഷ തിരഞ്ഞെടുക്കൂ',
      'nav.more_languages': 'കൂടുതൽ ഭാഷകൾ അഭ്യർത്ഥനപ്രകാരം',

      'hero.badge': 'VAT-അനുയോജ്യം · UAE ബസാറുകൾക്കായി നിർമ്മിച്ചത്',
      'hero.title': 'നിങ്ങൾ കട നടത്തൂ.<br>Heifer നടത്തും <span class="hero-accent">കണക്കുകൾ.</span>',
      'hero.sub': 'ഓരോ പണമിടപാടു മുതൽ നിങ്ങളുടെ അവസാന VAT ഫയലിംഗ് വരെ, Heifer പശ്ചാത്തലത്തിൽ കണക്കുകൾ കൈകാര്യം ചെയ്യുന്നു. ടെലിഗ്രാം ബോട്ട് നിങ്ങൾക്ക് ചെലവുകൾ രേഖപ്പെടുത്താനും, വിതരണക്കാരുടെ രസീതുകൾ ഫോട്ടോ എടുക്കാനും, ചോദ്യങ്ങൾ ചോദിക്കാനും അനുവദിക്കുന്നു — എല്ലാം നിങ്ങൾ ഇപ്പോൾ ഉപയോഗിക്കുന്ന ചാറ്റിൽ, നിങ്ങളുടെ ഭാഷയിൽ. നിങ്ങളുടെ കച്ചവട രീതിയിൽ ഒന്നും മാറ്റേണ്ടതില്ല.',
      'hero.cta_book': 'സൗജന്യ 30-മിനിറ്റ് കോൾ ബുക്ക് ചെയ്യൂ',
      'hero.cta_accountants': 'അക്കൗണ്ടന്റുമാർക്കായി',
      'hero.stat_onboarded': '<strong style="color:var(--t1);font-weight:500">ഒറ്റയ്ക്കൊറ്റയ്ക്കുള്ള</strong> ഓൺബോർഡിംഗ്',
      'hero.stat_daily': 'ദിവസവും <strong style="color:var(--t1);font-weight:500">ടെലിഗ്രാമിൽ</strong>',
      'hero.stat_languages': '<strong style="color:var(--t1);font-weight:500">5</strong> ഭാഷകൾ',
      'hero.stat_fta': '<strong style="color:var(--t1);font-weight:500">FTA</strong>-അനുയോജ്യം',
      'hero.mockup_title': 'Heifer · ഇന്ന്',
      'hero.mockup_alt': 'ഇന്നത്തെ വിൽപ്പന, VAT സ്ഥിതി, കൈയിലുള്ള പണം എന്നിവ കാണിക്കുന്ന Heifer വ്യാപാരി ഡാഷ്ബോർഡ്',

      'trust.onboarded': 'നിങ്ങളല്ല, ഞങ്ങളുടെ ടീമാണ് ഓൺബോർഡ് ചെയ്യുന്നത്',
      'trust.languages': 'ഇംഗ്ലീഷ്, അറബിക്, ഉറുദു, ഹിന്ദി, മലയാളം',
      'trust.accountant': 'നിങ്ങളുടെ അക്കൗണ്ടന്റിന് സൗജന്യം',
      'trust.in_region': 'ഡാറ്റ പ്രദേശത്തിനുള്ളിൽ ഹോസ്റ്റ് ചെയ്യുന്നു',

      'features.eyebrow': 'അകത്ത് എന്തുണ്ട്',
      'features.title': 'കാഷ് കൗണ്ടറിനായി നിർമ്മിച്ചത്.<br><em>സ്പ്രെഡ്ഷീറ്റിനല്ല.</em>',
      'features.aside': 'നിലവിലുള്ള ഓരോ ഉപകരണവും നിങ്ങൾക്ക് ഇതിനകം വൃത്തിയുള്ള ഡിജിറ്റൽ ഡാറ്റ ഉണ്ടെന്ന് അനുമാനിക്കുന്നു. ബസാർ വ്യാപാരികൾക്കില്ല. പണമിടപാടുകൾ, കൈകൊണ്ടെഴുതിയ രസീതുകൾ, WhatsApp-ൽ ഫോട്ടോ അയക്കുന്ന വിതരണക്കാർ എന്നിവയ്ക്കായാണ് Heifer നിർമ്മിച്ചിരിക്കുന്നത്.',

      'features.tile1_eyebrow': '01 / POS ക്യാപ്ചർ',
      'features.tile1_title': 'ഓരോ വിൽപ്പന, അതേ നിമിഷം.',
      'features.tile1_desc': 'Heifer നിങ്ങളുടെ Android POS-ൽ പ്രവർത്തിക്കുന്നു — കാഷ് കൗണ്ടറായോ അല്ലെങ്കിൽ അതിന്റെ ഒപ്പമോ — ഉപഭോക്താവ് പണം നൽകുന്ന നിമിഷം തന്നെ ഓരോ ഇടപാടും രേഖപ്പെടുത്തുന്നു. ഡാറ്റ എൻട്രി ഇല്ല, ദിവസാവസാന അവലോകനവുമില്ല.',
      'features.tile1_alt': 'ഇന്നത്തെ ഇടപാടുകളും തത്സമയ VAT സ്ഥിതിയും കാണിക്കുന്ന Heifer ഡാഷ്ബോർഡ്',

      'features.tile2_eyebrow': '02 / VAT എഞ്ചിൻ',
      'features.tile2_title': 'FTA സ്പെക്.<br>ഓരോ ഇൻവോയ്സും.',
      'features.tile2_desc': 'ഓരോ ഇൻവോയ്സും ഫോർമാറ്റ് ചെയ്തു, UUID-മുദ്രണം ചെയ്തു, സർക്കാർ സ്പെക്കിന് അനുസരിച്ച് ക്രിപ്റ്റോഗ്രാഫിക്കായി ഒപ്പിട്ടു — വ്യാപാരിയുടെ ഇടപെടലൊന്നുമില്ലാതെ.',
      'features.meter_q1_sales': 'Q1 വിൽപ്പന',
      'features.meter_vat_collected': 'ശേഖരിച്ച VAT',
      'features.meter_input_vat': 'ഇൻപുട്ട് VAT',
      'features.meter_net_payable': 'അറ്റ അടയ്ക്കേണ്ടത്',

      'features.tile3_eyebrow': '03 / അക്കൗണ്ടന്റ് പോർട്ടൽ',
      'features.tile3_title': 'നിങ്ങളുടെ അക്കൗണ്ടന്റിന് സൗജന്യം.<br>കടലാസുപെട്ടിയുടെ അവസാനം.',
      'features.tile3_desc': 'നിങ്ങളുടെ അക്കൗണ്ടന്റിന് ഓരോ ക്ലയന്റിന്റെയും ഇടപാടുകളുടെ തത്സമയ, വായന-മാത്ര ഡാഷ്ബോർഡ് ലഭിക്കും — വർഗ്ഗീകരിച്ച, VAT-ഫോർമാറ്റ് ചെയ്ത, ഓഡിറ്റ്-റെഡി. അവർ നിങ്ങളെ കടലാസുകൾക്കായി പിന്തുടരുന്നത് നിർത്തും. ഓരോ പുതിയ ക്ലയന്റിനും നിങ്ങളെ ശുപാർശ ചെയ്യും.',
      'features.tile3_alt': 'ഒന്നിലധികം ക്ലയന്റുകളുടെ VAT സ്ഥിതികളും കയറ്റുമതി ചെയ്യാവുന്ന റിപ്പോർട്ടുകളും കാണിക്കുന്ന അക്കൗണ്ടന്റ് പോർട്ടൽ',

      'ai.eyebrow': 'ടെലിഗ്രാം ബോട്ട്',
      'ai.title': 'നിങ്ങളുടെ ബുക്ക്കീപ്പർ ജീവിക്കുന്നു <em>നിങ്ങളുടെ ടെലിഗ്രാം ചാറ്റുകളിൽ.</em>',
      'ai.lede': 'വെബ് ഡാഷ്ബോർഡ് നിങ്ങളുടെ അക്കൗണ്ടന്റിന് വേണ്ടിയാണ്. ടെലിഗ്രാം ബോട്ടാണ് നിങ്ങൾ യഥാർത്ഥത്തിൽ ജീവിക്കുന്ന സ്ഥലം. ചാറ്റിൽ ഒരു വിൽപ്പന രേഖപ്പെടുത്തുക, വിതരണക്കാരുടെ രസീതിന്റെ ഫോട്ടോ എടുക്കുക, "ഇന്ന് സ്റ്റോക്ക് വാങ്ങാമോ?" എന്ന് ചോദിക്കുക — മലയാളം, ഇംഗ്ലീഷ്, അറബിക്, ഉറുദു, അല്ലെങ്കിൽ ഹിന്ദിയിൽ. ദിവസം മുഴുവൻ നിങ്ങൾ ഉപയോഗിക്കുന്ന അതേ ചാറ്റ്. പഠിക്കാൻ പുതിയ ആപ്പില്ല.',

      'ai.bullet1_title': 'ചാറ്റിൽ വിൽപ്പനയോ ചെലവോ രേഖപ്പെടുത്തുക',
      'ai.bullet1_desc': '"142 ടിഷ്യു പേപ്പർ" അല്ലെങ്കിൽ രസീതിന്റെ ഫോട്ടോ. ബോട്ട് വർഗ്ഗീകരിക്കുന്നു, VAT കണക്കാക്കുന്നു, ഇൻവോയ്സിൽ ഒപ്പിടുന്നു.',
      'ai.bullet2_title': 'കൈയിലുള്ള പണം, ഇപ്പോൾ തന്നെ',
      'ai.bullet2_desc': '"ഇന്നത്തെ ചെലവുകൾക്ക് ശേഷം, നിങ്ങൾക്ക് AED 1,450 ഉണ്ട്. അടുത്ത വിതരണക്കാരുടെ പേയ്മെന്റ് 3 ദിവസത്തിനകം."',
      'ai.bullet3_title': 'ശരിയായ സമയത്ത് സ്റ്റോക്ക് ചെയ്യൂ',
      'ai.bullet3_desc': '"ടിഷ്യു പേപ്പർ ഓരോ 11 ദിവസത്തിലും തീരുന്നു. 4 ദിവസത്തിനകം വീണ്ടും ഓർഡർ ചെയ്യൂ. ശരാശരി ചെലവ്: AED 280."',
      'ai.bullet4_title': 'സ്വയം പണം മടക്കിത്തരുന്ന ജോലിക്കാർ',
      'ai.bullet4_desc': '"ചൊവ്വ/വ്യാഴം ഉച്ചയ്ക്ക് ശേഷമുള്ള വിൽപ്പന 40% കുറവാണ്. ഒരൊറ്റ ഷിഫ്റ്റ് മാസത്തിൽ AED 600 ലാഭിക്കാം."',
      'ai.bullet5_title': 'ലാഭം, ആഴ്ചതോറും',
      'ai.bullet5_desc': '"ഗ്രോസ് മാർജിൻ 28% — കഴിഞ്ഞ ആഴ്ച 34%-ൽ നിന്ന് കുറഞ്ഞു. ഇലക്ട്രോണിക്സ് നിങ്ങളെ താങ്ങുന്നു."',
      'ai.meta': 'നിങ്ങൾക്ക് ടെലിഗ്രാം · നിങ്ങളുടെ അക്കൗണ്ടന്റിന് പോർട്ടൽ',
      'ai.mockup_alt': 'ടെലിഗ്രാമിൽ Heifer AI അസിസ്റ്റന്റ് ചാറ്റ്',

      'onboard.eyebrow': 'ഓൺബോർഡിംഗ്',
      'onboard.title': 'ഒറ്റയ്ക്കൊറ്റയ്ക്കുള്ള ഓൺബോർഡിംഗ്. <em>നിങ്ങൾ ഒന്നും മാറ്റേണ്ടതില്ല.</em>',
      'onboard.sub': 'Heifer നിങ്ങൾ ഡൗൺലോഡ് ചെയ്ത് സ്വയം മനസ്സിലാക്കേണ്ട സോഫ്റ്റ്വെയറല്ല. ഓരോ വ്യാപാരിയുമായും ഞങ്ങൾ വ്യക്തിഗതമായി പ്രവർത്തിക്കുന്നു — വിദൂരത്തു നിന്ന്, നിങ്ങളുടെ ഭാഷയിൽ — നിങ്ങളുടെ കണക്കുകൾ മാറ്റാനും, നിങ്ങളുടെ ടെലിഗ്രാം ബോട്ട് സജ്ജമാക്കാനും, നിങ്ങളുടെ അക്കൗണ്ടന്റിനെ ധരിപ്പിക്കാനും. നിങ്ങൾ ഒരു വിരൽ പോലും അനക്കേണ്ടതില്ല.',

      'onboard.card1_title': 'ഞങ്ങൾ സംഭാഷണം ആരംഭിക്കുന്നു',
      'onboard.card1_desc': 'ഒരു ഡെമോ അല്ല. സൈൻഅപ്പ് ഫോം അല്ല. നിങ്ങളുടെ കട യഥാർത്ഥത്തിൽ എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്നതിനെക്കുറിച്ചുള്ള ഒരു കോൾ — നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സമയത്ത്. കണക്കുകൾ തൊടുന്നതിന് മുമ്പ് ഞങ്ങൾ ബിസിനസ്സ് പഠിക്കുന്നു.',
      'onboard.card1_tag': 'ഡെമോ ഇല്ല · സൈൻഅപ്പ് ഇല്ല',
      'onboard.card2_title': 'ഞങ്ങൾ നിങ്ങളുടെ കണക്കുകൾ നിങ്ങൾക്കായി മാറ്റുന്നു',
      'onboard.card2_desc': 'നിങ്ങളുടെ നോട്ട്ബുക്കുകൾ, WhatsApp ഇൻവോയ്സ് ഫോട്ടോകൾ, വിതരണക്കാരുടെ ഫോൾഡറുകൾ ഞങ്ങൾക്ക് അയക്കൂ. ഞങ്ങൾ എല്ലാം വൃത്തിയാക്കി ഞങ്ങളുടെ ഭാഗത്തുനിന്ന് Heifer-ലേക്ക് ലോഡ് ചെയ്യും. നിങ്ങൾ ഫോം പൂരിപ്പിക്കില്ല, രസീത് വീണ്ടും ടൈപ്പ് ചെയ്യില്ല.',
      'onboard.card2_tag': 'നിങ്ങൾക്കായി ചെയ്യുന്നു · നിങ്ങളല്ല',
      'onboard.card3_title': 'ഞങ്ങൾ നിങ്ങളുടെ ടെലിഗ്രാം ബോട്ട് സജ്ജമാക്കുന്നു',
      'onboard.card3_desc': 'നിങ്ങളുടെ ഫോണിൽ ഒരു ചെറിയ സ്ക്രീൻ-ഷെയർ. ആ നിമിഷം മുതൽ നിങ്ങൾ ചെലവുകൾ രേഖപ്പെടുത്തുന്നു, വിതരണക്കാരുടെ രസീതുകൾ ഫോട്ടോ എടുക്കുന്നു, ബോട്ടിനോട് എന്തും ചോദിക്കുന്നു — എല്ലാം ദിവസം മുഴുവൻ പരിശോധിക്കുന്ന അതേ ടെലിഗ്രാം ചാറ്റിൽ.',
      'onboard.card3_tag': 'ടെലിഗ്രാം ആദ്യം · പുതിയ ആപ്പില്ല',
      'onboard.card4_title': 'ഞങ്ങൾ നിങ്ങളുടെ അക്കൗണ്ടന്റിനെ ധരിപ്പിക്കുന്നു',
      'onboard.card4_desc': 'പ്രത്യേക 30 മിനിറ്റ് കോൾ. നിങ്ങളുടെ അക്കൗണ്ടന്റിന് സൗജന്യ പോർട്ടൽ പര്യടനം ലഭിക്കും, ഏതെങ്കിലും ബസാർ ക്ലയന്റിൽ നിന്ന് അവർക്ക് ലഭിച്ച ഏതിനെക്കാളും വൃത്തിയുള്ള ഡാറ്റയുമായി മടങ്ങും. അടുത്ത തവണ അവർ ഞങ്ങളെ ശുപാർശ ചെയ്യും.',
      'onboard.card4_tag': 'അവരുടെ ജോലിഭാരം കുറയുന്നു · അവരുടെ ഫീസ് സംരക്ഷിക്കപ്പെടുന്നു',
      'onboard.footnote': 'ഒരേസമയം ഒരുപിടി വ്യാപാരികളുമായി മാത്രമേ ഞങ്ങൾ പ്രവർത്തിക്കൂ — നിശ്ശബ്ദമായി, ശ്രദ്ധയോടെ, ക്ഷണത്തിലൂടെ മാത്രം.',

      'how.eyebrow': 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
      'how.title': 'മൂന്ന് ഘട്ടങ്ങൾ. <em>ഒന്നുപോലും നിങ്ങളുടേതല്ല.</em>',
      'how.sub': 'നിങ്ങൾ വിൽപ്പന രേഖപ്പെടുത്തുന്നു. Heifer ബാക്കി ഫയൽ ചെയ്യുന്നു. നിങ്ങളുടെ അക്കൗണ്ടന്റ് മാസാവസാനം വൃത്തിയുള്ള കണക്കുകൾ വായിക്കുന്നു.',

      'how.step1_title': 'വിൽപ്പന രേഖപ്പെടുത്തുക',
      'how.step1_desc': 'Heifer നിങ്ങളുടെ Android POS-ൽ ഇരിക്കുന്നു. ഉപഭോക്താവ് പണം നൽകുന്ന നിമിഷം തന്നെ ഓരോ ഇടപാടും — പണമോ കാർഡോ ആകട്ടെ — രേഖപ്പെടുത്തുന്നു.',
      'how.step1_mock_title': 'POS · കൗണ്ടർ 1',
      'how.step1_desc_item': 'ടിഷ്യു പേപ്പർ · 2 പായ്ക്ക്',
      'how.step1_chip_cash': 'പണം',
      'how.step1_chip_card': 'കാർഡ്',
      'how.step1_chip_credit': 'കടം',
      'how.step1_status': 'പിടിച്ചെടുത്തു · 0.2 സെക്കൻഡ്',

      'how.step2_title': 'Heifer നിങ്ങളുടെ VAT ഫയൽ ചെയ്യുന്നു',
      'how.step2_desc': 'ഓരോ ഇൻവോയ്സും FTA സ്പെക്കിന് അനുസരിച്ച് ഫോർമാറ്റ് ചെയ്തു, UUID-മുദ്രണം ചെയ്തു, സർട്ടിഫൈഡ് കംപ്ലയൻസ് മിഡിൽവെയറിലൂടെ അയച്ചു. നിങ്ങളുടെ ഭാഗത്ത് കടലാസുപണിയില്ല.',
      'how.step2_mock_title': 'VAT · ഈ പാദത്തിൽ',
      'how.step2_signed': 'എല്ലാ ഇൻവോയ്സുകളും ഒപ്പിട്ടു',
      'how.step2_fta_submission': 'FTA സമർപ്പണം',
      'how.step2_ready': 'തയ്യാർ',

      'how.step3_title': 'Heifer-നോട് എന്തും ചോദിക്കൂ',
      'how.step3_desc': '"ഈ ആഴ്ച സ്റ്റോക്ക് വാങ്ങാൻ കഴിയുമോ?" "എനിക്ക് എത്ര VAT കൊടുക്കാനുണ്ട്?" നിങ്ങളുടെ ഭാഷയിൽ തൽക്ഷണം ഉത്തരം നേടൂ.',
      'how.step3_mock_title': 'Heifer AI · ടെലിഗ്രാം',
      'how.step3_user_msg': 'ഇന്ന് സ്റ്റോക്ക് വാങ്ങാമോ?',
      'how.step3_bot_msg': 'അതെ — AED 1,450 കൈയിൽ, AED 900 വിതരണക്കാരുടെ പേയ്മെന്റ് വെള്ളിയാഴ്ച അടയ്ക്കാനുണ്ട്. സുരക്ഷിത സ്റ്റോക്ക് ബജറ്റ്: AED 350.',
      'how.step3_status': 'മറുപടി നൽകി · 1.4 സെക്കൻഡ്',

      'privacy.quote': 'മിക്ക ബുക്ക്കീപ്പിംഗും ഒരു സൈൻഅപ്പ് ഫോമിൽ തുടങ്ങുന്നു.<br><strong>Heifer ഒരു സംഭാഷണത്തിൽ തുടങ്ങുന്നു.</strong>',
      'privacy.quote_meta': 'Heifer-നെ വ്യത്യസ്തമാക്കുന്നത്, ഒറ്റവരിയിൽ.',
      'privacy.stat1': 'പൂരിപ്പിക്കാനുള്ള സൈൻഅപ്പ് ഫോമുകൾ',
      'privacy.stat2': 'വീണ്ടും ടൈപ്പ് ചെയ്യപ്പെടുന്ന രസീതുകൾ',
      'privacy.stat3': 'നിങ്ങളുടെ പ്രദേശത്തിന് പുറത്തേക്ക് പോകുന്ന ഡാറ്റ',
      'privacy.stat4': 'സ്വാഭാവികമായി ഭാഷകൾ',
      'privacy.link': 'നിങ്ങളുടെ കടയ്ക്ക് ഇത് എങ്ങനെ യോജിക്കുന്നുവെന്ന് കാണൂ',

      'book.title': 'സംസാരിക്കാൻ <em>തയ്യാറാണോ?</em>',
      'book.sub': 'ഞങ്ങൾ നിങ്ങളുടെ കണക്കുകൾ മാറ്റുന്നു. ഞങ്ങൾ നിങ്ങളുടെ ടെലിഗ്രാം ബോട്ട് സജ്ജമാക്കുന്നു. ഞങ്ങൾ നിങ്ങളുടെ അക്കൗണ്ടന്റിനെ ധരിപ്പിക്കുന്നു. നിങ്ങളുടെ കച്ചവടരീതിയിൽ നിങ്ങൾ ഒന്നും മാറ്റേണ്ടതില്ല — അത് എങ്ങനെ രേഖപ്പെടുത്തുന്നു എന്നതിലെ എല്ലാം ഞങ്ങൾ മാറ്റും.',
      'book.btn_book': 'സൗജന്യ 30-മിനിറ്റ് കോൾ ബുക്ക് ചെയ്യൂ',
      'book.btn_partner': 'അക്കൗണ്ടന്റ് പങ്കാളിയാകൂ',
      'book.note': 'സൗജന്യ 30-മിനിറ്റ് കൺസൾട്ടേഷൻ · ഡെമോ ഇല്ല, സൈൻഅപ്പ് ഇല്ല · ക്ഷണത്തിലൂടെ മാത്രം',

      'footer.tagline': 'UAE-യിലെ ബസാർ വ്യാപാരികൾക്കായി നിർമ്മിച്ച സ്മാർട്ട് ബുക്ക്കീപ്പിംഗ് — WhatsApp രസീതുകൾ അകത്തേക്ക്, FTA-റെഡി കണക്കുകൾ പുറത്തേക്ക്.',
      'footer.status': 'എല്ലാ സിസ്റ്റങ്ങളും സാധാരണം · ദുബായ് · UAE',
      'footer.product': 'ഉത്പന്നം',
      'footer.product_inside': 'അകത്ത് എന്തുണ്ട്',
      'footer.product_bot': 'ടെലിഗ്രാം ബോട്ട്',
      'footer.product_accountants': 'അക്കൗണ്ടന്റ് പോർട്ടൽ',
      'footer.product_book': 'സൗജന്യ കോൾ ബുക്ക് ചെയ്യൂ',
      'footer.compliance': 'കംപ്ലയൻസ്',
      'footer.compliance_fta': 'UAE FTA ഇ-ഇൻവോയ്സിംഗ്',
      'footer.compliance_residency': 'ഡാറ്റ റെസിഡൻസി',
      'footer.compliance_vat': 'VAT & കോർപ്പറേറ്റ് ടാക്സ്',
      'footer.compliance_security': 'സുരക്ഷ',
      'footer.company': 'കമ്പനി',
      'footer.company_about': 'ഞങ്ങളെക്കുറിച്ച്',
      'footer.company_changelog': 'മാറ്റങ്ങളുടെ ലിസ്റ്റ്',
      'footer.company_privacy': 'സ്വകാര്യതാ നയം',
      'footer.company_terms': 'ഉപയോഗ നിബന്ധനകൾ',
      'footer.connect': 'ബന്ധപ്പെടുക',
      'footer.connect_book': 'സൗജന്യ കോൾ ബുക്ക് ചെയ്യൂ',
      'footer.connect_partners': 'അക്കൗണ്ടന്റ് പങ്കാളികൾ',
      'footer.connect_press': 'പ്രസ്സ് & മീഡിയ',
      'footer.copyright': '© 2026 Heifer Technologies Inc.',
      'footer.meta': 'ടൊറന്റോയിൽ രൂപകൽപ്പന · UAE-ക്കായി നിർമ്മിച്ചത്',
      'footer.back_top': 'മുകളിലേക്ക് മടങ്ങുക',

      'fab.dark': 'ഡാർക്ക് മോഡ് ടോഗിൾ ചെയ്യൂ',
      'fab.top': 'മുകളിലേക്ക് മടങ്ങുക',
    },
  }

  function getDict(lang) {
    return T[lang] || T.en
  }

  function apply(lang) {
    const dict = getDict(lang)
    const fallback = T.en

    // textContent translations
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n')
      const val = dict[key] != null ? dict[key] : fallback[key]
      if (val != null) el.textContent = val
    })

    // innerHTML translations (for strings with inline <strong>, <em>, <br>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html')
      const val = dict[key] != null ? dict[key] : fallback[key]
      if (val != null) el.innerHTML = val
    })

    // attribute translations: "attr:key;attr:key"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr')
      spec.split(';').forEach((pair) => {
        const idx = pair.indexOf(':')
        if (idx < 0) return
        const attr = pair.slice(0, idx).trim()
        const key = pair.slice(idx + 1).trim()
        const val = dict[key] != null ? dict[key] : fallback[key]
        if (val != null) el.setAttribute(attr, val)
      })
    })

    // Document title
    if (dict['html.title']) document.title = dict['html.title']
  }

  // Apply translations whenever the language switcher fires its event
  document.addEventListener('language-change', (e) => {
    const { lang, dir } = e.detail || {}
    if (!lang) return
    apply(lang)
    // Flip layout direction for RTL languages now that we have real
    // translated copy. Specific RTL layout tweaks live in extras.css.
    document.documentElement.setAttribute('dir', dir || 'ltr')
    document.body.classList.toggle('rtl', dir === 'rtl')
  })

  // Public API
  window.HEIFER_I18N = { apply, dict: getDict, langs: Object.keys(T) }
})()
