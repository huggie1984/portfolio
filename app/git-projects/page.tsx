import { Card } from '@/components/card/card';

export default function Page() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <div className=" bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h1>
        </section>
      </div>
      <section className="container">
        <p>
          <strong>Welcome to my playground!</strong> Most of the projects below
          are relics from my earlier days, so don&#39;t be surprised if you
          stumble upon a bit of nostalgia. I’m in the process of giving them a
          modern makeover as tech continues to evolve—just like me!
        </p>
      </section>
      <ul className="container grid md:grid-cols-2 gap-8 w-full">
        <li>
          <Card
            title="Boids Simulation (HTML5 Canvas)"
            gitUrl="https://github.com/huggie1984/boids-canvas"
            siteUrl="https://boids.mhuggs.com"
          >
            <p>
              <strong>AI Flocking Simulation</strong> Inspired by{' '}
              <a
                className="link-light"
                href="https://www.red3d.com/cwr/boids/"
                target="_blank"
              >
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
          </Card>
        </li>
        <li>
          <Card
            title="Simon Says Game (HTML5 Canvas)"
            gitUrl="https://github.com/huggie1984/simon-says-canvas"
            siteUrl="https://simon-says.mhuggs.com"
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
        </li>
        <li>
          <Card
            title="Poker Simulation (React)"
            gitUrl="https://github.com/huggie1984/poker-assignment"
            siteUrl="https://poker-simulation.mhuggs.com"
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
        </li>
        <li>
          <Card
            title="Sudoku 2024 (In the works!)"
            gitUrl="https://github.com/huggie1984/sudoku-2024"
            siteUrl="https://sudoku.mhuggs.com/"
          >
            <div className="flex flex-col justify-center items-center text-[120px]">
              <p>{'👷‍♂️'}</p>
            </div>
          </Card>
        </li>
      </ul>
    </main>
  );
}
