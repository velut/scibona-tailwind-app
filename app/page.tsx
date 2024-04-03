"use client";

import { useEffect, useState, type SVGProps } from "react";

const img = [
  "0011000000000000000000000000000000000000000",
  "0111101100000000000000000000000000000000000",
  "1101111000110011110110110000000110000000011",
  "0000110001111000110000110101010000111101111",
  "0011000000110011010110110111110110110101011",
  "0111101100111011110110110110110110110101111",
  "1101111000000000000000000000000000000000000",
  "0000110000000000000000000000000000000000000",
];

const colors = [
  "bg-sky-300",
  "bg-sky-400",
  "bg-sky-500",
  "bg-sky-600",
  "bg-sky-700",
  "bg-sky-800",
  "bg-sky-900",
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 max-w-[60ch]">
      {/* Header */}
      <hr className="my-8" />
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl">Edoardo Scibona</h1>
          <a
            className="flex items-center gap-2"
            href="https://github.com/velut"
          >
            <MdiGithub className="w-5 h-5 flex-none" />
            <span className="underline">GitHub</span>
          </a>
        </div>
        <img
          className="rounded-full w-24 h-24"
          src="photo.jpg"
          width="460"
          height="460"
          alt="Profile picture of Edoardo Scibona"
        />
      </div>
      <hr className="my-8" />

      {/* Grid */}
      <Grid />
      <p className="text-sm text-center text-gray-600">(It's not a gif!)</p>

      {/* Text */}
      <div className="space-y-8 text-justify mt-8">
        <div className="space-y-4">
          <h2 className="font-bold">About me</h2>
          <p>
            My name is{" "}
            <a className="underline" href="https://github.com/velut">
              Edoardo Scibona
            </a>{" "}
            and I'm a 31 y/o software developer from Milan, Italy (UTC+1).
          </p>
          <p>
            I'm interested in developing software that increases developer
            productivity and improves developer experience, focusing on the
            JavaScript/TypeScript ecosystem.
          </p>
          <p>
            My main development language is currently TypeScript and I'm also
            comfortable with libraries/frameworks like React/Next.js and
            Svelte/SvelteKit. And I greatly enjoy using Tailwind CSS.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold">Open-source work</h2>
          <p>
            In 2020, I created{" "}
            <a className="underline" href="https://www.jsdocs.io/">
              jsDocs.io
            </a>
            , an open-source documentation host that automatically extracts and
            renders the public API of npm packages. My goal was to bring to the
            JS ecosystem something like{" "}
            <a className="underline" href="https://docs.rs/">
              Docs.rs
            </a>{" "}
            or{" "}
            <a className="underline" href="https://pkg.go.dev/">
              pkg.go.dev
            </a>
            .
          </p>
          <p>
            This project is powered by a custom-built{" "}
            <a
              className="underline"
              href="https://github.com/jsdocs-io/extractor"
            >
              API extractor
            </a>{" "}
            that combines different heuristics and makes heavy use of the
            TypeScript compiler API to find and parse type definitions available
            in packages and their dependencies.
          </p>
          <p>
            Building and maintaining this project, I had to solve multiple
            challenges like handling different JavaScript module formats,
            parsing package metadata, following standards and widely adopted
            practices and handling intrinsic edge cases caused by the vast
            number of package authors and build tools.
          </p>
          <p>
            For the API extractor, I've also implemented an extensive test suite
            to ensure its correctness, completeness and adaptability to
            TypeScript language changes.
          </p>
          <p>
            I'm also the author of{" "}
            <a
              className="underline"
              href="https://www.npmjs.com/package/query-registry"
            >
              query-registry
            </a>
            , an API client for the npm registry written in TypeScript, for
            which I've published an{" "}
            <a
              className="underline"
              href="https://www.edoardoscibona.com/exploring-the-npm-registry-api"
            >
              introductory blog post
            </a>
            .
          </p>
          <p>
            I also enjoy creating small apps that scratch a personal itch like{" "}
            <a href="https://www.gridify.it" className="underline">
              gridify.it
            </a>{" "}
            and{" "}
            <a href="https://www.videospeedup.com" className="underline">
              VideoSpeedup.com
            </a>
            .
          </p>
          <p>
            Recently, I've also contributed{" "}
            <a href="https://daisyui.com/?lang=it" className="underline">
              the Italian translation
            </a>{" "}
            to the daisyUI project.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold">About us</h2>
          <p>
            Since discovering Tailwind a few years ago, it has become my go-to
            solution for styling all my projects (and even this whole page) and
            I've come to appreciate how powerful it is and how great its
            developer experience is.
          </p>
          <p>
            I would love to contribute to Tailwind to further improve it and I
            think that with my knowledge of TypeScript, my drive for hard
            challenges and my ability to break down problems, I would be a great
            addition to the team.
          </p>
          <p>
            Of the listed upcoming projects, the backwards compatibility layer,
            the CSS bundler for Next.js and the IDE integrations sound really
            interesting to me but I'm also open to explore other areas such as
            accessibility and performance.
          </p>
          <p>
            I would also like to use Rust and learn more about it. I've already
            read "The Book" but I still haven't had the opportunity to develop a
            project in Rust.
          </p>
          <p>
            In conclusion, I hope that this quick introduction sparked enough
            ideas about the work we could do together. I am looking forward to
            hearing from you!
          </p>
        </div>
      </div>
      <hr className="my-8" />
    </main>
  );
}

function MdiGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

function Grid() {
  const [, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-[1px] sm:gap-[2px] items-center my-2">
      {img.map((row, i) => (
        <div key={i} className="flex gap-[1px] sm:gap-[2px]">
          {row.split("").map((cell, j) => (
            <div
              key={j}
              className={`w-1 h-1 sm:w-2 sm:h-2 flex-none rounded-full transition ${
                cell === "1"
                  ? colors[Math.floor(Math.random() * colors.length)]
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
