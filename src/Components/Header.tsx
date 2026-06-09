type Props = {
  title: string;
  introText: string;
};

function Header({ title, introText }: Props) {
  return (
    <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden border-b-[3px] border-petal bg-gradient-to-br from-deep via-mid to-slate px-6 py-12 text-center text-white sm:min-h-[280px] sm:px-8 sm:pb-12 sm:pt-[calc(var(--nav-height)+2rem)]">
      <div
        className="pointer-events-none absolute -right-[10%] -top-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,30,38,0.12)_0%,transparent_70%)]"
        aria-hidden
      />
      <h1 className="relative mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white">
        {title}
      </h1>
      {introText && (
        <p className="relative mx-auto max-w-[720px] text-base leading-relaxed text-white/85 sm:text-base">
          {introText}
        </p>
      )}
    </div>
  );
}

export default Header;
