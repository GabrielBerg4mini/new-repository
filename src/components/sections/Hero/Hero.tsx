import Link from "next/link";

export function Hero() {
  return (
    <section className="flex justify-between items-center gap-10 py-20 mt-24">
      <article>
        <p className="text-zinc-50 font-semibold font-[Intel_One_Mono] text-xl mb-4">
          Hello — I&apos;m Gabriel
        </p>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 mb-3">
          Frontend Enginner &
        </h1>
        <h2 className="text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 mb-3">
          Mobile Developer
        </h2>
        <p className="text-gray-400 text-lg font-semibold">
          Frontend enginner using HTML, CSS, JavaScript, TypeScript, Angular, React and NextJs.
        </p>
        <p className="text-gray-400 text-lg font-semibold">
          I use these technologies for both web and mobile front-end development.
        </p>
        <Link
          href="/resume"
          className="group relative inline-flex mt-6 overflow-hidden rounded-lg p-px bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500"
          aria-label="Open Resume"
        >
          <span className="relative block rounded-[calc(var(--radius-lg)-1px)] bg-zinc-900 px-6 py-3 font-semibold text-white">
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 rounded-[calc(var(--radius-lg)-1px)] bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-10">Open Resume</span>
          </span>
        </Link>
      </article>
      <div className="bg-amber-800">Imagem aqui</div>
    </section>
  );
}
