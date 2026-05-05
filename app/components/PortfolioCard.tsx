import Image from "next/image";

type PortfolioCardProps = {
  title: string;
  tag: string;
  description: string;
  image: string;
  link: string;
};

export default function PortfolioCard({
  title,
  tag,
  description,
  image,
  link,
}: PortfolioCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${title}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border-[0.5px] border-ChampagneGold/30 bg-BrandGold text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:border-ChampagneGold hover:shadow-[0_34px_90px_rgba(0,0,0,0.42)] focus:outline-none focus:ring-4 focus:ring-ChampagneGold/30"
    >
      <div className="bg-slate-200 p-3">
        <div className="overflow-hidden rounded-xl border border-slate-300 bg-slate-100 shadow-inner">
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image
              src={image}
              alt={`${title} desktop website preview`}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex min-h-8 w-fit items-center rounded-full bg-white/80 px-3 text-[10px] font-black uppercase tracking-[0.14em] text-black">
          {tag}
        </span>
        <h3 className="mt-4 text-xl font-black leading-tight text-white">
          {title}
        </h3>
        <p className="mt-3 overflow-hidden text-sm font-medium leading-6 text-white/85 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {description}
        </p>
      </div>
    </a>
  );
}
