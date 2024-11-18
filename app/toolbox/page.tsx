import Link from 'next/link';
import { ReactNode } from 'react';

export default function Page() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <div className=" bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Toolbox</h1>
          <p>This is going to be a list of example code used to reference.</p>
        </section>
      </div>
      <ul className="container grid grid-cols-2 gap-6">
        {/*<li>*/}
        {/*  <Card title="React Suspense" href="/react-suspense">*/}
        {/*    <p>React suspense demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="React Suspense" href="/react-error-boundary">*/}
        {/*    <p> React Error boundary demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card*/}
        {/*    title="React custom hook, debounce"*/}
        {/*    href="/react-custom-hook-debounce"*/}
        {/*  >*/}
        {/*    <p>React Custom hook, debounce demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="React custom hook, throttle" href="/">*/}
        {/*    <p>React Custom hook, throttle demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="React lazy loading demo" href="/">*/}
        {/*    <p>React Lazy loading demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="React portals" href="/">*/}
        {/*    <p>React portals demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="React context API" href="/">*/}
        {/*    <p>React context API demo</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="React Controlled vs un controlled" href="/">*/}
        {/*    <p>React Controlled vs un controlled</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Card title="AI" href="/">*/}
        {/*    <p>AI</p>*/}
        {/*  </Card>*/}
        {/*</li>*/}
        {/*/!*<li>NODE: Rest API</li>*!/*/}
        {/*/!*<li>NODE: Web socket integration</li>*!/*/}
        {/*/!*<li>NODE: Authentication</li>*!/*/}
        {/*/!*<li>NODE: File upload</li>*!/*/}
        {/*/!*<li>NODE: Rate limiting</li>*!/*/}
        {/*/!*<li>Boiler plate component</li>*!/*/}
        {/*/!*<li>Next Cache</li>*!/*/}
        {/*/!*<li>Build an npm module.</li>*!/*/}
      </ul>
    </main>
  );
}

const Card = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: ReactNode;
}) => (
  <Link
    href={href}
    className="flex flex-col gap-4 p-4 text-white bg-bamboo-600 rounded-2xl min-w-full"
  >
    <h2 className="text-xl font-bold italic">{title}</h2>
    {children}
  </Link>
);
