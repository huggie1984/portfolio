import Image from 'next/image';
import { ReadMore } from '@/components/read-more/read-more';
import { Linkedin } from '@/components/icons/Linkedin';
import { Github } from '@/components/icons/Github';
import { Email } from '@/components/icons/Email';
import { DownloadButton } from '@/components/export-pdf-button/export-pdf-button';
// todo responsiveness of home page.
// todo my box of tricks! XL
// todo recipe blog! XL
// todo create a new C.V with google docs to attach and download from my web site.
export default function Home() {
  const sectionGrid = 'grid grid-cols-[20%_1fr] gap-6';
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <header className="bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4 flex items-center flex-row gap-4">
          <div className="flex flex-col justify-end">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Matthew Huggett{' '}
              <small className="font-light">Full-Stack Web Engineer</small>
            </h1>
            <DownloadButton />
          </div>

          <div className="flex flex-grow justify-end">
            <Image
              className="rounded-full border-bamboo-50 border-2 sm:border-4 sm:w-[115px] sm:h-[131px] w-[57.5px] h-[65.5px] min-w-[57.5px] min-h-[65.5px]"
              src="/images/profile.webp"
              alt="Matthew's profile!"
              width={115}
              height={131}
            />
          </div>
        </section>
      </header>
      <div className="container flex flex-col gap-10">
        <section>
          <ReadMore
            summary={
              <p>
                <strong>With 10 years in the world of web development,</strong>{' '}
                I’m all about the endless creativity and freedom that come with
                building awesome web apps! I have a blast working with
                cutting-edge tech like <strong>React</strong> and{' '}
                <strong>Next.js</strong>, whipping up fast, dynamic UIs that
                keep things exciting. Over the years, I’ve mastered the art of
                tackling tricky, complex interfaces—earning some serious kudos
                for my speed and top-notch quality.
              </p>
            }
            details={
              <div className="flex flex-col gap-2">
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

        <section className="flex flex-col gap-6">
          <SectionTitle title="Employment history" />

          <div className={sectionGrid}>
            <div>
              <h3 className="font-semibold">
                Software Engineer, Game Play Network, Nov 2023 - Present
              </h3>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <p>
                    Lead Next.js migration to enhance performance and SEO,
                    driving user engagement growth.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Develop complex visual features with Node.js, React, and
                    Bootstrap, boosting user interaction.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Improve code quality using CICD task runners for robust
                    software.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Create custom Node scripts for automation, increasing team
                    efficiency significantly.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={sectionGrid}>
            <div>
              <h3 className="font-semibold">
                Full-Stack Engineering Senior Consultant, Accenture (formerly
                Infinity Works), Aug 2023 - Nov 2023
              </h3>
              <p>National Grid</p>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <p>
                    Delivered a Next.js app in 4 months, aligning UI with
                    business needs using{' '}
                    <a
                      href="http://Sanity.io"
                      target="_blank"
                      className="_link_19oon_27 _link_pjcz9_9"
                    >
                      Sanity.io
                    </a>
                    <span>.</span>
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Collaborated to deploy on Azure, ensuring high scalability
                    and availability.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Worked closely with stakeholders and UX team to enhance user
                    experience, meeting business goals.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={sectionGrid}>
            <div>
              <h3 className="font-semibold">
                Full-Stack Engineering Senior Consultant, Accenture (formerly
                Infinity Works), Apr 2023 - Aug 2023
              </h3>
              <p>Monzo</p>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <p>
                    Migrated pages to Next.js, boosting performance and
                    reliability significantly.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Developed e2e tests for for testing migrated pages where
                    rendering as expected, giving the team and managemnt comfort
                    that everything was working as expected.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Aligned tech solutions with business goals, leading to
                    improved user engagement.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={sectionGrid}>
            <div>
              <h3 className="font-semibold">
                Full-Stack Engineering Senior Consultant, Accenture (formerly
                Infinity Works), Dec 2021 - Dec 2022
              </h3>
              <p>Virgin Red</p>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <p>
                    Enhanced React Native features, improving app efficiency and
                    user satisfaction.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Rebuilt KPI system with RemixJS SSR, boosting performance
                    and engagement.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Collaborated with teams to align features with business
                    goals.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={sectionGrid}>
            <div>
              <h3 className="font-semibold">
                Senior Web Engineer, Rank Interactive (formerly Stride), May
                2013 - Apr 2022
              </h3>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <p>
                    Key squad member contributing to the implementation and
                    delivery of innovative Angular projects, extending
                    application lifecycles and modernizing outdated technology
                    stacks for improved performance and maintainability.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Converted over 30 business games to HTML5, enhancing
                    accessibility and significantly boosting revenue
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Collaborated with product managers and engineers to align
                    projects with business goals.
                  </p>
                </li>
                <li className="mb-1">
                  <p>
                    Implemented modern web techniques, enhancing project
                    outcomes and technical standards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionTitle title="Education" />
          <div>
            <h3 className="font-semibold">
              Kingston Upon Thames University, Sep 2009 - May 2013
            </h3>
            <p>BSc in Computer Science</p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionTitle title="Skills" />
          <div className="w-full mb-6 grid grid-cols-3 gap-6">
            <Skill label="Next.js" value={5} />
            <Skill label="React" value={6} />
            <Skill label="Webpack" value={5} />
            <Skill label="Tailwind" value={6} />
            <Skill label="Node.js" value={5} />
            <Skill label="Typescript" value={6} />
            <Skill label="Rest APIs" value={5} />
            <Skill label="Storybook" value={6} />
            <Skill label="Contentful" value={6} />
            <Skill label="Ruby" value={2} />
            <Skill label="React Query" value={5} />
            <Skill label="Bootstrap" value={6} />
            <Skill label="Sanity-io" value={4} />
            <Skill label="Azure" value={2} />
            <Skill label="AWS" value={3} />
            <Skill label="React Native" value={2} />
            <Skill label="RemixJS" value={3} />
            <Skill label="Angular" value={4} />
            <Skill label="Javascript" value={6} />
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <SectionTitle title="Links" />
          <div className="w-full mb-6 flex flex-wrap gap-6">
            <a
              className="flex items-center gap-2 link-light"
              href="https://www.linkedin.com/in/matthew-huggett-611aa098/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to LinkedIn page"
            >
              <Linkedin />
              <span className="hidden sm:block">Linkedin</span>
            </a>
            <a
              className="flex items-center gap-2 link-light"
              href="https://github.com/huggie1984"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to GitHub page"
            >
              <Github />
              <span className="hidden sm:block">GitHub</span>
            </a>
            <a
              className="flex items-center gap-2 link-light"
              href="mailto:matthuggett@hotmail.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email me"
            >
              <Email />
              <span className="hidden sm:block">matthuggett@hotmail.co.uk</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

const SectionTitle = ({ title }: { title: string }) => (
  <div>
    <h2 className="text-2xl font-black mb-2">{title}</h2>
    <hr className="border-t-2 border-bamboo-800 dark:border-white" />
  </div>
);

const Skill = ({ value, label }: { value: number; label: string }) => {
  const clampedValue = Math.min(Math.max(value, 1), 6);
  const percentage = ((clampedValue - 1) / 5) * 100;
  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="pb-1">{label}</div>

      <div className="w-full h-[2px] bg-bamboo-50 dark:bg-bamboo-800 rounded-full">
        <div
          className="h-full bg-bamboo-800 dark:bg-bamboo-50 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
