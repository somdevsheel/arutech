// Single source of truth for Arutech's own products.
// Used by the navbar dropdown, /products, /products/[slug] and
// /products/[slug]/privacy-policy. Add a new app here and every page picks it up.

export type ProductStatus = "live" | "in-development" | "coming-soon";

export type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Paragraph shown after the bullets. */
  note?: string;
  /** Third-party policies referenced in this section. */
  links?: { label: string; href: string }[];
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  /** Tailwind color family used for accents (must be one used elsewhere so classes are generated). */
  accent: "orange" | "pink" | "violet" | "teal";
  /** App icon (e.g. from the Play listing). Falls back to the first letter of the name. */
  iconUrl?: string;
  description: string;
  features: { title: string; description: string }[];
  howItWorks: string[];
  tags: string[];
  screenshot?: { src: string; url: string };
  links: {
    website?: string;
    playStore?: string;
    indusStore?: string;
  };
  /** Present only once the app has a published privacy policy. */
  privacyPolicy?: {
    lastUpdated: string;
    sections: PolicySection[];
  };
};

export const statusLabel: Record<ProductStatus, string> = {
  live: "Live",
  "in-development": "In Development",
  "coming-soon": "Coming Soon",
};

export const products: Product[] = [
  {
    slug: "gps-camera",
    name: "GPS Camera",
    tagline: "Stamp photos with GPS location, address, date and time",
    status: "live",
    accent: "teal",
    iconUrl: "https://play-lh.googleusercontent.com/mkcy37HWMfstLqs9R5yfi0fpD4DNbJ5QNWLsa3ntFPCpkb5tiUg6LVDKkpCJDeqY-a12JV2O17tQAdISEYkFCQ=w240-h480-rw",
    description:
      "GPS Camera: Location Stamp adds a clear, readable stamp to every photo — coordinates, street address, date, time, altitude, accuracy and compass direction. Built for site surveys, field work, inspections, deliveries and travel records. No account, no ads, no analytics: your photos stay on your phone.",
    features: [
      { title: "Location Stamp", description: "Latitude and longitude in decimal or degrees/minutes/seconds, plus optional street address." },
      { title: "Date, Time & Sensors", description: "Date and time in your preferred format, with GPS accuracy, altitude, speed and compass heading." },
      { title: "Custom Details", description: "Add an optional map thumbnail, company name, project name and note to every photo." },
      { title: "Flexible Styles", description: "Four stamp styles, top or bottom placement and three text sizes." },
      { title: "Verified Capture", description: "Takes a fresh GPS fix at capture and records a SHA-256 fingerprint, so you can later check whether a photo was changed. Mock locations are never marked verified." },
      { title: "Private & Offline", description: "No account, ads or analytics. Photos stay on your device, and coordinates and time are stamped even without a connection." },
    ],
    howItWorks: [
      "Install GPS Camera from Google Play and allow camera and location access.",
      "Choose your stamp style and the details you want — address, map, company, project or note.",
      "Take a photo. The app stamps it with your location, date and time at the moment of capture.",
      "Browse your captures in the built-in gallery grouped by day, then share them or open the location in maps.",
    ],
    tags: ["Location Stamp", "Verified Capture", "Works Offline", "No Ads", "No Account"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.gpslocationcamera",
    },
    privacyPolicy: {
      lastUpdated: "November 16, 2026",
      sections: [
        {
          title: "1. About This Policy",
          paragraphs: [
            "GPS Camera (\"the app\") takes photos and stamps them with the location, date and time they were taken. The app is developed by Arutech Consultancy Services LLP. This policy explains what data the app uses, where that data goes, and the choices you have.",
          ],
        },
        {
          title: "2. Summary",
          bullets: [
            "There is no account, no advertising and no analytics in the app.",
            "Your photos and capture records are stored only on your device. They are never uploaded by the app.",
            "Your coordinates leave the device only when you use address lookup or the map stamp, as described below. You can turn both off in Settings.",
          ],
        },
        {
          title: "3. Permissions the App Requests",
          bullets: [
            "Camera — to take photos.",
            "Location (precise and approximate) — to read the GPS position that is stamped onto each photo. Location is used only while the camera screen is open. The app does not access location in the background.",
            "Storage (Android 9 and older only) — to save photos to your gallery when you choose to.",
          ],
        },
        {
          title: "4. Data Stored on Your Device",
          paragraphs: [
            "For each photo, the app stores the image file and a record containing the coordinates, accuracy, altitude, speed, compass direction, street address, date and time, image hashes, and any company, project or note text you entered in Settings. This data stays in the app's private storage on your device.",
            "If you enable \"Export to device gallery\", the stamped photo is also saved to your phone's photo gallery, where other apps you have allowed to access photos can read it.",
            "Saved photos may contain location data in their EXIF metadata when \"Write EXIF metadata\" is enabled. Keep this in mind before you share a photo.",
          ],
        },
        {
          title: "5. Data Sent Off Your Device",
          bullets: [
            "Address lookup (setting: \"Address\") — the app uses Android's built-in geocoding service to turn coordinates into a street address. On most devices this sends your coordinates to Google, whose handling is described in the Google Privacy Policy. Results are cached on your device so the same location is not looked up again.",
            "Map stamp (setting: \"Map preview\", off by default) — the app downloads map tiles from the OpenStreetMap Foundation's tile servers. A tile request reveals the approximate area being viewed (a square of a few hundred metres) and your IP address to OpenStreetMap, as described in the OpenStreetMap Foundation Privacy Policy.",
          ],
          note: "All of these requests use encrypted (HTTPS) connections where the provider supports them. The app developer does not operate any server and does not receive any of your data.",
          links: [
            { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
            { label: "OpenStreetMap Foundation Privacy Policy", href: "https://osmfoundation.org/wiki/Privacy_Policy" },
          ],
        },
        {
          title: "6. Sharing",
          paragraphs: [
            "A photo leaves your device through the app only when you tap Share and choose where to send it, or when you open its location in a maps app. The receiving app's own privacy policy then applies.",
          ],
        },
        {
          title: "7. Deleting Your Data",
          paragraphs: [
            "You can delete any capture from within the app. Clearing cached addresses is available in Settings. Uninstalling the app removes all of its stored photos and records from your device; photos you exported to the gallery remain there until you delete them.",
          ],
        },
        {
          title: "8. Children",
          paragraphs: [
            "The app is not directed at children under 13 and does not knowingly collect data from them.",
          ],
        },
        {
          title: "9. Changes to This Policy",
          paragraphs: [
            "If this policy changes, the updated version will be posted on this page with a new effective date.",
          ],
        },
      ],
    },
  },
  {
    slug: "freenoo",
    name: "Freenoo",
    tagline: "25+ free PDF tools — no sign-up, no watermarks",
    status: "live",
    accent: "orange",
    description:
      "Freenoo is a free PDF toolkit for web and Android. Convert, edit, compress, merge, split, rotate and e-sign PDFs without creating an account, without watermarks and without usage limits.",
    features: [
      { title: "Merge & Split", description: "Combine multiple PDFs into one, or split a document into separate pages or ranges." },
      { title: "Compress", description: "Shrink PDF file size for email and uploads while keeping documents readable." },
      { title: "Convert", description: "Convert PDFs to and from common formats such as images and Office documents." },
      { title: "Edit & Rotate", description: "Rotate, reorder and edit pages directly, without desktop software." },
      { title: "E-Sign", description: "Add your signature to documents in a few taps." },
      { title: "No Account Needed", description: "Every tool works immediately — no registration, no login, no personal details." },
    ],
    howItWorks: [
      "Open Freenoo on the web or in the Android app and pick a tool.",
      "Select the PDF or file you want to work on from your device.",
      "Freenoo processes the file and shows you the result.",
      "Download or share the output. Processed files are deleted automatically.",
    ],
    tags: ["PDF Merge", "PDF Compress", "E-Sign", "Convert", "No Sign-up", "Free Forever"],
    screenshot: { src: "/images/freenoo-screenshot.png", url: "freenoo.com" },
    links: {
      website: "https://freenoo.com",
      playStore: "https://play.google.com/store/apps/details?id=com.freenoo.app",
      indusStore: "https://indusapp.store/w4qowwp6",
    },
    privacyPolicy: {
      lastUpdated: "November 16, 2026",
      sections: [
        {
          title: "1. About This Policy",
          paragraphs: [
            "This Privacy Policy applies to the Freenoo Android app (package com.freenoo.app) and the Freenoo website at freenoo.com (together, \"Freenoo\"). Freenoo is developed and operated by Arutech Consultancy Services LLP (\"Arutech\", \"we\", \"us\" or \"our\"), a company registered in India.",
            "It explains what happens to your information and your files when you use Freenoo. The short version: Freenoo does not require an account and does not collect or share personal data.",
          ],
        },
        {
          title: "2. Information We Do Not Collect",
          paragraphs: ["Freenoo works without registration. We do not ask for and do not collect:"],
          bullets: [
            "Your name, email address, phone number or any account details",
            "Your contacts, location, photos or other personal content beyond the files you choose to process",
            "Payment information — Freenoo is free to use",
          ],
        },
        {
          title: "3. Files You Process",
          paragraphs: [
            "When you use a tool, you choose which file(s) to open. Freenoo accesses only the files you explicitly select.",
            "Where a tool needs server-side processing, the file is sent over an encrypted (HTTPS) connection, used only to perform the operation you requested, and automatically and permanently deleted from our servers within about one hour. We do not read, copy, analyse, share or keep your files for any other purpose.",
            "Output files you save are stored on your own device, under your control.",
          ],
        },
        {
          title: "4. Data Sharing",
          paragraphs: [
            "We do not sell, rent, trade or share user data with third parties. Your files are never used for advertising, profiling or training models.",
          ],
        },
        {
          title: "5. App Permissions",
          paragraphs: [
            "Freenoo requests access only to what it needs to work — for example, access to the files you pick so they can be opened, and network access so tools can process files. You can manage permissions at any time in your device settings.",
          ],
        },
        {
          title: "6. Security",
          paragraphs: [
            "Files are transmitted using encryption in transit and are removed automatically after processing. No method of transmission or storage is completely secure, but we take reasonable measures to protect files while they are being processed.",
          ],
        },
        {
          title: "7. Children's Privacy",
          paragraphs: [
            "Freenoo is suitable for general audiences and follows the Google Play Families Policy. We do not knowingly collect personal information from anyone, including children under 13. If you believe a child has provided us personal information, contact us and we will delete it.",
          ],
        },
        {
          title: "8. Your Rights",
          paragraphs: [
            "Because Freenoo does not collect personal data, there is normally nothing for us to access, correct or delete. If you have a question or request about your data, contact us using the details below and we will respond promptly.",
          ],
        },
        {
          title: "9. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. Changes will be posted on this page with a new \"Last updated\" date. Continued use of Freenoo after an update means you accept the revised policy.",
          ],
        },
      ],
    },
  },
  {
    slug: "instachat",
    name: "Instachat",
    tagline: "A native Android social app — chat, reels, posts and stories",
    status: "in-development",
    accent: "pink",
    description:
      "Instachat is a native Android social media app built from scratch by Arutech. It brings real-time chat, short-form reels, photo posts and stories together in one fast, familiar experience.",
    features: [
      { title: "Real-time Chat", description: "One-to-one and group messaging delivered instantly." },
      { title: "Reels", description: "Create and watch short-form vertical videos." },
      { title: "Posts & Feed", description: "Share photos and follow the people you care about." },
      { title: "Stories", description: "Post moments that disappear after 24 hours." },
    ],
    howItWorks: [
      "Create your profile and find people to follow.",
      "Share posts, reels and stories with your followers.",
      "Chat in real time with friends and groups.",
    ],
    tags: ["React Native", "Node.js", "Android"],
    links: {},
  },
  {
    slug: "moneto",
    name: "Moneto AI Terminal",
    tagline: "AI-native financial intelligence for individuals and teams",
    status: "coming-soon",
    accent: "violet",
    description:
      "Moneto AI Terminal is an AI-native financial intelligence platform for individuals and teams who need clarity in complex financial data, delivered through a fast terminal-style interface.",
    features: [
      { title: "Financial AI", description: "Ask questions about financial data in plain language." },
      { title: "Terminal UI", description: "A keyboard-first interface built for speed." },
      { title: "Intelligence", description: "Surface the signals that matter from noisy data." },
    ],
    howItWorks: [
      "Connect or load the financial data you work with.",
      "Ask questions and run analyses from the terminal.",
      "Get clear, AI-assisted answers and insights.",
    ],
    tags: ["Financial AI", "Terminal UI", "Intelligence"],
    links: {},
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const accentClasses: Record<Product["accent"], { text: string; bg: string; border: string; button: string }> = {
  orange: { text: "text-orange-500", bg: "bg-orange-100", border: "border-orange-200", button: "bg-orange-500 hover:bg-orange-600" },
  pink: { text: "text-pink-500", bg: "bg-pink-100", border: "border-pink-200", button: "bg-pink-500 hover:bg-pink-600" },
  violet: { text: "text-violet-500", bg: "bg-violet-100", border: "border-violet-200", button: "bg-violet-500 hover:bg-violet-600" },
  teal: { text: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200", button: "bg-teal-600 hover:bg-teal-700" },
};

export const statusClasses: Record<ProductStatus, string> = {
  live: "bg-emerald-100 text-emerald-700 border-emerald-200",
  "in-development": "bg-pink-100 text-pink-600 border-pink-200",
  "coming-soon": "bg-violet-100 text-violet-600 border-violet-200",
};
