import { ExportPdfButton } from '@/components/export-pdf-button/export-pdf-button';
import Link from 'next/link';

// todo add icons
// todo adjust text, show what outcomes and how the point did something positive.

export default function Page() {
  const text3XL = 'text-[3vw] max:text-3xl';
  const text2XL = 'text-[2vw] max:text-2xl';
  const textBase = 'text-[1.11vw] max:text-base';
  const textSM = 'text-[0.97vw] max:text-sm';
  const sectionGrid = 'grid grid-cols-[20%_1fr] gap-6';

  return (
    <div className="container">
      <div className="flex gap-6 mb-6">
        <Link href="/" className="link-dark dark:link-light">
          Home
        </Link>
        <ExportPdfButton elementId={'resume'} />
      </div>

      <div
        id="resume"
        className={`w-full max-w-none aspect-[1/1.414] flex items-center justify-center ${textBase} bg-black box-border`}
      >
        <main className="w-full flex flex-col items-center">
          <header className="flex gap-4 text-white self-start bg-[#115e59] p-10 w-full">
            <img
              className="rounded-xl w-[115px] h-[131px] object-cover"
              src="/images/profile.webp"
              alt="Matthew's profile!"
              width={115}
              height={131}
            />

            <div className={`flex flex-col gap-2 ${textSM}`}>
              <div className="flex gap-4 items-start leading-none">
                <h1 className={`${text3XL} font-black`}>
                  Matthew Huggett{' '}
                  <small className="font-light">Full-Stack Web Engineer</small>
                </h1>
              </div>
              <div>
                29 Leighton Avenue, Leigh-on-Sea, Southend-on-Sea, Essex,
                Leigh-on-Sea, UK, SS9 1QB
              </div>
              <a href="tel:07940965305" className="_link_1ps2u_60">
                07940965305
              </a>
              <a
                href="mailto:matthuggett@hotmail.co.uk"
                className="_link_1ps2u_60"
              >
                matthuggett@hotmail.co.uk
              </a>
            </div>
          </header>
          <div className="p-10 w-full bg-[#f1fdfa] text-[#134e4a]">
            <p className="font-semibold mb-6">
              Full-Stack Web Engineer with over a decade of extensive expertise
              in crafting scalable, high-performance web applications using
              cutting-edge frameworks like Next.js and React. Demonstrates a
              strong commitment to exceptional coding standards and creating
              inclusive, accessible digital experiences, while leveraging skills
              in JavaScript, Node.js, and Bootstrap to align tech solutions with
              business objectives. Passionate about driving innovation and
              enhancing user engagement through collaborative efforts with
              cross-functional teams.
            </p>
            <div className="w-full flex flex-col mb-6">
              <SectionTitle title="Employment history" textSize={text2XL} />

              <section className={sectionGrid}>
                <div className="py-4">
                  <h3 className="font-semibold">
                    Software Engineer, Game Play Network, Nov 2023 - Present
                  </h3>
                </div>

                <div className="py-4">
                  <ul className="list-disc">
                    <li>
                      <p>
                        Lead Next.js migration to enhance performance and SEO,
                        driving user engagement growth.
                      </p>
                    </li>
                    <li>
                      <p>
                        Develop complex visual features with Node.js, React, and
                        Bootstrap, boosting user interaction.
                      </p>
                    </li>
                    <li>
                      <p>
                        Improve code quality using CICD task runners for robust
                        software.
                      </p>
                    </li>
                    <li>
                      <p>
                        Create custom Node scripts for automation, increasing
                        team efficiency significantly.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              <section className={sectionGrid}>
                <div className="py-4">
                  <h3 className="font-semibold">
                    Full-Stack Engineering Senior Consultant, Accenture
                    (formerly Infinity Works), Aug 2023 - Nov 2023
                  </h3>
                  <p>National Grid</p>
                </div>

                <div className="py-4">
                  <ul className="list-disc">
                    <li>
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
                    <li>
                      <p>
                        Collaborated to deploy on Azure, ensuring high
                        scalability and availability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Worked closely with stakeholders and UX team to enhance
                        user experience, meeting business goals.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              <section className={sectionGrid}>
                <div className="py-4">
                  <h3 className="font-semibold">
                    Full-Stack Engineering Senior Consultant, Accenture
                    (formerly Infinity Works), Apr 2023 - Aug 2023
                  </h3>
                  <p>Monzo</p>
                </div>

                <div className="py-4">
                  <ul className="list-disc">
                    <li>
                      <p>
                        Migrated pages to Next.js, boosting performance and
                        reliability significantly.
                      </p>
                    </li>
                    <li>
                      <p>
                        Developed e2e tests for for testing migrated pages where
                        rendering as expected, giving the team and managemnt
                        comfort that everything was working as expected.
                      </p>
                    </li>
                    <li>
                      <p>
                        Aligned tech solutions with business goals, leading to
                        improved user engagement.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              <section className={sectionGrid}>
                <div className="py-4">
                  <h3 className="font-semibold">
                    Full-Stack Engineering Senior Consultant, Accenture
                    (formerly Infinity Works), Dec 2021 - Dec 2022
                  </h3>
                  <p>Virgin Red</p>
                </div>

                <div className="py-4">
                  <ul className="list-disc">
                    <li>
                      <p>
                        Enhanced React Native features, improving app efficiency
                        and user satisfaction.
                      </p>
                    </li>
                    <li>
                      <p>
                        Rebuilt KPI system with RemixJS SSR, boosting
                        performance and engagement.
                      </p>
                    </li>
                    <li>
                      <p>
                        Collaborated with teams to align features with business
                        goals.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              <section className={sectionGrid}>
                <div className="py-4">
                  <h3 className="font-semibold">
                    Senior Web Engineer, Rank Interactive (formerly Stride), May
                    2013 - Apr 2022
                  </h3>
                </div>

                <div className="py-4">
                  <ul className="list-disc">
                    <li>
                      <p>
                        Led team in delivering Angular projects, improving code
                        quality and project delivery.
                      </p>
                    </li>
                    <li>
                      <p>
                        Converted all the in house business reel and bingo games
                        to HTML5, making the games more accessible to a wider
                        audience boosting business revenue.
                      </p>
                    </li>
                    <li>
                      <p>
                        Collaborated with product managers and engineers to
                        align projects with business goals.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implemented modern web techniques, enhancing project
                        outcomes and technical standards.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="w-full mb-6">
              <SectionTitle title="Education" textSize={text2XL} />
              <section className="py-4">
                <h3 className="font-semibold">
                  Kingston Upon Thames University, Sep 2009 - May 2013
                </h3>
                <p>BSC</p>
              </section>
            </div>

            <div className="h-1 html2pdf__page-break"></div>

            <SectionTitle title="Skills" textSize={text2XL} />
            <section className="w-full mb-6 grid grid-cols-3 gap-6 py-4">
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
              <Skill label="Bootsteap" value={6} />
              <Skill label="Sanity-io" value={4} />
              <Skill label="Azure" value={2} />
              <Skill label="AWS" value={3} />
              <Skill label="React Native" value={2} />
              <Skill label="RemixJS" value={3} />
              <Skill label="Angular" value={4} />
              <Skill label="Javascript" value={6} />
            </section>

            <SectionTitle title="Links" textSize={text2XL} />
            <section className="w-full mb-6 grid grid-cols-3 gap-6 py-4">
              <a
                className="link-dark"
                href="https://www.linkedin.com/in/matthew-huggett-611aa098/"
              >
                https://www.linkedin.com/in/matthew-huggett-611aa098/
              </a>
              <a className="link-dark" href="https://github.com/huggie1984">
                https://github.com/huggie1984
              </a>
              <Link href="/" className="link-dark">
                https://portfolio.mhuggs.com/
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

const SectionTitle = ({
  textSize,
  title,
}: {
  textSize: string;
  title: string;
}) => (
  <>
    <h2 className={`${textSize} font-black mb-2`}>{title}</h2>
    <hr />
  </>
);

const Skill = ({ value, label }: { value: number; label: string }) => {
  const clampedValue = Math.min(Math.max(value, 1), 6);
  const percentage = ((clampedValue - 1) / 5) * 100;
  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="text-[1.25vw] max:text-lg font-semibold pb-2">
        {label}
      </div>

      <div className="w-full h-1 bg-gray-200 rounded-full">
        <div
          className="h-full bg-[#134e4a] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
