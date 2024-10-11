import Image from "next/image";
import {ReactNode} from "react";
// todo lets make the card flip with a short summary.
// todo lets add prettier!
// todo lets add rewrites to subdomain apps.
// todo add a link to my cv.
// todo light mode & dark mode.
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-950 text-amber-50">
      <main className="container flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="p-4 bg-blue-800 w-full drop-shadow-2xl flex justify-between items-center gap-8"><h1 className="text-5xl font-bold text-amber-50 ">Matthew's Portfolio</h1><Image className="rounded-full border-8" src="/images/profile.webp" alt="Matthew's profile!" width={229} height={262}/></section>
        <section className="flex flex-col gap-2">
          <p><strong>Welcome to my playground!</strong> Some of the projects below are relics from my earlier days, so don't be surprised if you stumble upon a bit of nostalgia. I’m in the process of giving them a modern makeover as tech continues to evolve—just like me!</p>
          <p>With 10 years in the world of web development, I’m all about the endless creativity and freedom that come with building awesome web apps! I have a blast working with cutting-edge tech like <strong>React</strong> and <strong>Next.js</strong>, whipping up fast, dynamic UIs that keep things exciting. Over the years, I’ve mastered the art of tackling tricky, complex interfaces—earning some serious kudos for my speed and top-notch quality.</p>
          <p>I’m also a fan of automation and enjoy writing Node.js scripts to simplify development workflows and automate repetitive tasks, making day-to-day development more efficient.</p>
          <p>Currently, I’m diving deeper into AWS and enjoying the learning journey, with some exposure to backend libraries like Java and Ruby, and I’m excited to expand my knowledge further.</p>
          <p>I’m on the lookout for a company that prides itself on its people and culture—one where I can work with other talented individuals to continue growing and learning. Ideally, I’m seeking the flexibility of hybrid working, with 2 days in the office and the freedom to work in the EU from time to time.</p>
        </section>
        <section className="grid md:grid-cols-2 gap-8 w-full">
          <Card title="Boids Simulation" gitUrl="https://github.com/huggie1984/boids-canvas"><><p>One of my first encounters of coding was at University, we were tasked to build a simulation that shows the behaviour of birds. In this app you can do ... this and ....</p><p>It was implemented with Canvas.</p></></Card>
          <Card title="Sudoku Legacy" gitUrl="https://github.com/huggie1984/boids-canvas"><p>Sudoku Legacy description, when, why I wrote it, what i used</p></Card>
          <Card title="Simon Says" gitUrl="https://github.com/huggie1984/boids-canvas"><p>Simon Says description, when, why I wrote it, what i used</p></Card>
          <Card title="Poker Assignment" gitUrl="https://github.com/huggie1984/boids-canvas"><p>Poker Assignment description, when, why I wrote it, what i used</p></Card>
          <Card title="Sudoku 2024" gitUrl="https://github.com/huggie1984/boids-canvas"><><p>Under construction!</p></></Card>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="www.linkedin.com/in/matthew-huggett-611aa098"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/linkedin.svg"
            alt="File icon"
            width={32}
            height={32}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/huggie1984"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/github.svg"
            alt="Window icon"
            width={32}
            height={32}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:matthuggett@hotmail.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/email.svg"
            alt="Globe icon"
            width={32}
            height={32}
          />
          matthuggett@hotmail.co.uk
        </a>
      </footer>
    </div>
  );
}

const Card = ({title = "", children, gitUrl}: {title: string, children: ReactNode, gitUrl: string}) => (
    <div className="flex flex-col gap-4 p-4 bg-cyan-700 rounded-2xl min-w-full">
      <h3 className="text-xl font-bold italic">{title}</h3>
      {children}
      <nav className="flex justify-between mt-auto"><a
          className="hover:underline hover:underline-offset-4"
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
      >Git</a><a className="hover:underline hover:underline-offset-4" href="">WebSite</a></nav>
    </div>)
