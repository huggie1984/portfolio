import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/in-the-works');
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <div className=" bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Recipe Blog
          </h1>
          <p>
            This is going to contain a list of my favourite dishes i like to
            make!
          </p>
          <p>
            Im going to create a table in Dynamo DB, and use Lambda to CRUD
            entries
          </p>
        </section>
      </div>
    </main>
  );
}
