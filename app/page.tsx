import Image from 'next/image';
import { DarkModeToggle } from '@/components/dark-mode-toggle/dark-mode-toggle';
import { Email } from '@/components/icons/Email';
import { Github } from '@/components/icons/Github';
import { Linkedin } from '@/components/icons/Linkedin';
import { Card } from '@/components/card/card';
import { ReadMore } from '@/components/read-more/read-more';
// todo add a link to my cv.
// todo re write sudoku app.
// todo make poker assignment pretty!
// todo add all text!
// todo deploy projects to static s3 buckets!
// todo add a bit of info on the architecture of this website!
// todo, look at integrating the git api to this site and route to the pages in here rather than to an external url.
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-6 flex-wrap items-center justify-center">
        <DarkModeToggle />
        <a
          className="flex items-center gap-2 link-dark dark:link-light"
          href="www.linkedin.com/in/matthew-huggett-611aa098"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 link-dark dark:link-light"
          href="https://github.com/huggie1984"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 link-dark dark:link-light"
          href="mailto:matthuggett@hotmail.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
          matthuggett@hotmail.co.uk
        </a>
      </header>
      <main className="container flex flex-col gap-8 items-center sm:items-start">
        <section className="p-4 bg-teal-800 w-full drop-shadow-2xl flex items-center flex-col md:flex-row gap-8">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-50">
            Matthew&#39;s Portfolio
          </h1>
          <div className="flex flex-grow justify-center md:justify-end">
            <Image
              className="rounded-full border-cyan-50 border-8"
              src="/images/profile.webp"
              alt="Matthew's profile!"
              width={115}
              height={131}
            />
          </div>
        </section>
        <section>
          <ReadMore
            summary={
              <p>
                <strong>Welcome to my playground!</strong> Some of the projects
                below are relics from my earlier days, so don&#39;t be surprised
                if you stumble upon a bit of nostalgia. I’m in the process of
                giving them a modern makeover as tech continues to evolve—just
                like me!
              </p>
            }
            details={
              <div className="flex flex-col gap-2">
                <p>
                  With 10 years in the world of web development, I’m all about
                  the endless creativity and freedom that come with building
                  awesome web apps! I have a blast working with cutting-edge
                  tech like <strong>React</strong> and <strong>Next.js</strong>,
                  whipping up fast, dynamic UIs that keep things exciting. Over
                  the years, I’ve mastered the art of tackling tricky, complex
                  interfaces—earning some serious kudos for my speed and
                  top-notch quality.
                </p>
                <p>
                  I’m also a fan of automation and enjoy writing Node.js scripts
                  to simplify development workflows and automate repetitive
                  tasks, making day-to-day development more efficient.
                </p>
                <p>
                  Currently, I’m diving deeper into AWS and enjoying the
                  learning journey, with some exposure to backend libraries like
                  Java and Ruby, and I’m excited to expand my knowledge further.
                </p>
                <p>
                  I’m on the lookout for a company that prides itself on its
                  people and culture—one where I can work with other talented
                  individuals to continue growing and learning. Ideally, I’m
                  seeking the flexibility of hybrid working, with 2 days in the
                  office and the freedom to work in the EU from time to time.
                </p>
              </div>
            }
          />
        </section>
        <section className="grid md:grid-cols-2 gap-8 w-full">
          <Card
            title="Boids Simulation (HTML5 Canvas)"
            gitUrl="https://github.com/huggie1984/boids-canvas"
          >
            <p>
              <strong>AI Flocking Simulation</strong> Inspired by
              <a href="https://www.red3d.com/cwr/boids/" target="_blank">
                Craig Reynolds&#39; &#34;Boids&#34; model
              </a>
              , this project was one of my first encounters with programming
              during university.
            </p>
            <p>
              It simulates the flocking behavior of autonomous agents (boids)
              using HTML5 Canvas.
            </p>
            <p>
              The boids follow simple rules like separation, alignment, and
              cohesion, but together they create mesmerizing and complex
              movement patterns.
            </p>
            <p>
              Now, after years of letting these digital birds fly as they are,
              I&#39;m planning an update. Get ready as I improve their behavior,
              making them smarter and maybe a bit sassier too!
            </p>
          </Card>
          <Card
            title="Simon Says Game (HTML5 Canvas)"
            gitUrl="https://github.com/huggie1984/simon-says-canvas"
          >
            <p>
              <strong>Throwback to a classic!</strong> This Simon Says game was
              built over 5 years ago using HTML5 Canvas and is a digital take on
              the iconic memory game.
            </p>
            <p>
              Players must follow an increasingly complex sequence of flashing
              colors and sounds, testing their memory and reflexes.
            </p>
            <p>
              It may be an older project, but it’s still fun — though it&#39;s
              about time I gave it a bit of love and attention.
            </p>
          </Card>
          <Card
            title="Poker Simulation (React)"
            gitUrl="https://github.com/huggie1984/poker-assignment"
          >
            <p>
              This project was part of a tech assignment, but it&#39;s a neat
              addition to my portfolio!
            </p>
            <p>
              Built over a year ago using React, it&#39;s a poker simulation
              where all the cards are drawn and evaluated immediately.
            </p>
            <p>
              While not overly complex, the game still captures the excitement
              of poker, providing instant results and insights.
            </p>
            <p>
              It&#39;s a simple yet fun way to see poker hands play out, and
              definitely worth a look for anyone who enjoys quick simulations!
            </p>
          </Card>
          <Card
            title="Sudoku 2024 (In the works!)"
            gitUrl="https://github.com/huggie1984/sudoku-2024"
          >
            <div className="flex flex-col justify-center items-center text-[120px]">
              <p>{'👷‍♂️'}</p>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
