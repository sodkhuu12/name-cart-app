import Link from "next/link";
import type { CSSProperties, FC } from "react";
import type { CardTemplateItem } from "@/components/card-templates/types";

type CardTemplateProps = {
  card: CardTemplateItem;
};

const CardTemplate: FC<CardTemplateProps> = ({ card }) => {
  const cardStyle: CSSProperties = {
    ...(card.cardColor ? { background: card.cardColor } : {}),
    ...(card.fontFamily ? { fontFamily: card.fontFamily } : {}),
  };
  const profile = getCardProfile(card);

  return (
    <div
      className={`h-full w-full rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col border border-white/10 ${card.theme.cardClass} ${profile.frameClass}`}
      style={cardStyle}
    >
      <Link href={`/template/${card.id}`}>
        {profile.layout === "executive" && (
          <ExecutiveCard card={card} profile={profile} />
        )}
        {profile.layout === "creative" && (
          <CreativeCard card={card} profile={profile} />
        )}
        {profile.layout === "minimal" && (
          <MinimalCard card={card} profile={profile} />
        )}
        {profile.layout === "dashboard" && (
          <DashboardCard card={card} profile={profile} />
        )}
        {profile.layout === "spotlight" && (
          <SpotlightCard card={card} profile={profile} />
        )}
      </Link>
    </div>
  );
};

export default CardTemplate;

type LayoutType =
  | "executive"
  | "creative"
  | "minimal"
  | "dashboard"
  | "spotlight";

type CardProfile = {
  layout: LayoutType;
  advantage: string;
  actionPrimary: string;
  actionSecondary: string;
  frameClass: string;
  pillClass: string;
};

function getCardProfile(card: CardTemplateItem): CardProfile {
  const num = Number(card.id.replace(/\D/g, "")) || 1;
  const profiles: CardProfile[] = [
    {
      layout: "executive",
      advantage: "Strategic leadership",
      actionPrimary: "Book Meeting",
      actionSecondary: "Company Profile",
      frameClass:
        "before:absolute before:inset-0 before:rounded-3xl before:border before:border-white/10 before:pointer-events-none",
      pillClass: "bg-white/20 text-white",
    },
    {
      layout: "creative",
      advantage: "Brand growth expert",
      actionPrimary: "Campaign Deck",
      actionSecondary: "Portfolio",
      frameClass: "ring-1 ring-white/20",
      pillClass: "bg-black/20 text-white",
    },
    {
      layout: "minimal",
      advantage: "Systems architecture",
      actionPrimary: "Tech Stack",
      actionSecondary: "Case Study",
      frameClass: "border-dashed border-white/25",
      pillClass: "bg-white/15 text-white",
    },
    {
      layout: "dashboard",
      advantage: "Global operation focus",
      actionPrimary: "Schedule Call",
      actionSecondary: "Business Deck",
      frameClass: "shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]",
      pillClass: "bg-white/20 text-white",
    },
    {
      layout: "spotlight",
      advantage: "People-first management",
      actionPrimary: "HR Playbook",
      actionSecondary: "Culture Kit",
      frameClass: "bg-black/15 backdrop-blur-[1px]",
      pillClass: "bg-white/10 text-white",
    },
    {
      layout: "creative",
      advantage: "Innovation strategy",
      actionPrimary: "Roadmap",
      actionSecondary: "Workshops",
      frameClass: "ring-1 ring-orange-100/50",
      pillClass: "bg-white/20 text-white",
    },
    {
      layout: "dashboard",
      advantage: "Full-stack delivery",
      actionPrimary: "GitHub",
      actionSecondary: "Live Demos",
      frameClass: "shadow-[0_0_0_1px_rgba(255,255,255,0.2)]",
      pillClass: "bg-black/20 text-white",
    },
    {
      layout: "executive",
      advantage: "SME business advisor",
      actionPrimary: "Consultation",
      actionSecondary: "Success Cases",
      frameClass: "border-white/30",
      pillClass: "bg-white/25 text-white",
    },
    {
      layout: "spotlight",
      advantage: "Modern product engineering",
      actionPrimary: "Open to Work",
      actionSecondary: "Resume",
      frameClass: "ring-1 ring-white/20",
      pillClass: "bg-white/20 text-white",
    },
  ];

  return profiles[(num - 1) % profiles.length];
}

function LogoBadge({ card }: { card: CardTemplateItem }) {
  if (!card.companyLogoUrl) {
    return (
      <div className="rounded-xl bg-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">
        Logo
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-white/90 p-1 shadow-md">
      <img
        src={card.companyLogoUrl}
        alt={`${card.company} logo`}
        className="h-7 w-7 rounded-md object-contain"
      />
    </div>
  );
}

function Social({
  card,
  profile,
}: {
  card: CardTemplateItem;
  profile: CardProfile;
}) {
  return (
    <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
      <button
        type="button"
        className={`flex-1 py-2 rounded-xl font-medium transition ${card.theme.socialPrimaryClass}`}
      >
        {profile.actionPrimary}
      </button>
      <button
        type="button"
        className={`flex-1 py-2 rounded-xl font-medium transition ${card.theme.socialSecondaryClass}`}
      >
        {profile.actionSecondary}
      </button>
    </div>
  );
}

function Contacts({ card }: { card: CardTemplateItem }) {
  return (
    <div className="mt-5 space-y-3 text-sm">
      <div className={`rounded-xl p-3 ${card.theme.contactItemClass}`}>
        📞 {card.phone}
      </div>
      <div className={`rounded-xl p-3 ${card.theme.contactItemClass}`}>
        ✉️ {card.email}
      </div>
      <div className={`rounded-xl p-3 ${card.theme.contactItemClass}`}>
        📍 {card.location}
      </div>
    </div>
  );
}

function ExecutiveCard({
  card,
  profile,
}: {
  card: CardTemplateItem;
  profile: CardProfile;
}) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${profile.pillClass}`}
        >
          {profile.advantage}
        </div>
        <LogoBadge card={card} />
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={card.avatarUrl}
          alt={card.name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/70 object-cover shadow"
        />
        <div>
          <h2 className="text-base sm:text-lg font-bold tracking-wide">
            {card.name}
          </h2>
          <p className={`text-sm font-medium ${card.theme.roleClass}`}>
            {card.role}
          </p>
          <p className={`text-xs ${card.theme.companyClass}`}>{card.company}</p>
        </div>
      </div>
      <div className="border-t border-white/20 my-4" />
      <p className={`text-sm leading-relaxed ${card.theme.bioClass}`}>
        {card.bio}
      </p>
      <Contacts card={card} />
      <Social card={card} profile={profile} />
    </>
  );
}

function CreativeCard({
  card,
  profile,
}: {
  card: CardTemplateItem;
  profile: CardProfile;
}) {
  return (
    <>
      <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <img
            src={card.avatarUrl}
            alt={card.name}
            className="w-20 h-20 rounded-2xl object-cover border border-white/30"
          />
          <div className="flex flex-col items-end gap-2">
            <LogoBadge card={card} />
            <div
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${profile.pillClass}`}
            >
              {profile.advantage}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">{card.name}</h2>
          <p className={`text-sm ${card.theme.roleClass}`}>{card.role}</p>
          <p className={`text-xs ${card.theme.companyClass}`}>{card.company}</p>
        </div>
      </div>
      <p className={`mt-4 text-sm leading-relaxed ${card.theme.bioClass}`}>
        {card.bio}
      </p>
      <Contacts card={card} />
      <Social card={card} profile={profile} />
    </>
  );
}

function MinimalCard({
  card,
  profile,
}: {
  card: CardTemplateItem;
  profile: CardProfile;
}) {
  const isCardThree = card.id === "card-3";

  return (
    <>
      {isCardThree && (
        <div className="mb-4 flex justify-center">
          <img
            src={card.avatarUrl}
            alt={card.name}
            className="h-20 w-20 rounded-full border-2 border-white/60 object-cover shadow-lg"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div
            className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold ${profile.pillClass}`}
          >
            {profile.advantage}
          </div>
          <h2 className="mt-2 text-xl font-extrabold">{card.name}</h2>
          <p className={`text-sm mt-1 ${card.theme.roleClass}`}>{card.role}</p>
        </div>
        <LogoBadge card={card} />
      </div>
      <p className={`mt-4 text-sm ${card.theme.companyClass}`}>
        {card.company}
      </p>
      <p className={`mt-4 text-sm leading-relaxed ${card.theme.bioClass}`}>
        {card.bio}
      </p>
      <div className="mt-5 grid grid-cols-1 gap-2 text-xs">
        <div className={`rounded-lg p-2 ${card.theme.contactItemClass}`}>
          {card.phone}
        </div>
        <div className={`rounded-lg p-2 ${card.theme.contactItemClass}`}>
          {card.email}
        </div>
        <div className={`rounded-lg p-2 ${card.theme.contactItemClass}`}>
          {card.location}
        </div>
      </div>
      <Social card={card} profile={profile} />
    </>
  );
}

function DashboardCard({
  card,
  profile,
}: {
  card: CardTemplateItem;
  profile: CardProfile;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <Stat label="ADVANTAGE" value={profile.advantage} />
        <Stat label="COMPANY" value={card.company} />
      </div>
      <div className="mt-4 rounded-2xl bg-black/20 border border-white/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={card.avatarUrl}
              alt={card.name}
              className="h-12 w-12 rounded-xl object-cover border border-white/30"
            />
            <div>
              <h2 className="text-base font-bold">{card.name}</h2>
              <p className={`text-xs ${card.theme.roleClass}`}>{card.role}</p>
            </div>
          </div>
          <LogoBadge card={card} />
        </div>
      </div>
      <p className={`mt-4 text-sm leading-relaxed ${card.theme.bioClass}`}>
        {card.bio}
      </p>
      <Contacts card={card} />
      <Social card={card} profile={profile} />
    </>
  );
}

function SpotlightCard({
  card,
  profile,
}: {
  card: CardTemplateItem;
  profile: CardProfile;
}) {
  return (
    <>
      <div className="rounded-2xl bg-white/15 p-4 border border-white/20">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-white/80">
            {profile.advantage}
          </p>
          <LogoBadge card={card} />
        </div>
        <div className="mt-3 flex items-center gap-3">
          <img
            src={card.avatarUrl}
            alt={card.name}
            className="h-12 w-12 rounded-full object-cover border border-white/30"
          />
          <div>
            <h2 className="font-bold">{card.name}</h2>
            <p className={`text-xs ${card.theme.roleClass}`}>{card.role}</p>
            <p className={`text-[11px] ${card.theme.companyClass}`}>
              {card.company}
            </p>
          </div>
        </div>
      </div>
      <p className={`mt-4 text-sm ${card.theme.companyClass}`}>
        {card.company}
      </p>
      <p className={`mt-2 text-sm leading-relaxed ${card.theme.bioClass}`}>
        {card.bio}
      </p>
      <Contacts card={card} />
      <Social card={card} profile={profile} />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-2.5">
      <div className="text-[10px] uppercase tracking-widest text-white/70">
        {label}
      </div>
      <div className="mt-1 text-xs font-semibold text-white">{value}</div>
    </div>
  );
}
