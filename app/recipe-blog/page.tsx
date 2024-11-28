import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

export default async function Page() {
  const recipes = await fetchRecipes();

  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <div className=" bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Recipe blog
          </h1>
        </section>
      </div>
      <ul className="container grid md:grid-cols-2 gap-8 w-full">
        {recipes?.map((recipe) => (
          <li key={recipe.recipeId}>
            <Card recipe={recipe} />
          </li>
        ))}
        {!recipes && <p>Oops, looks like there are no recipes! </p>}
      </ul>
    </main>
  );
}

// Fetch recipes from DynamoDB
async function fetchRecipes(): Promise<Recipe[]> {
  // todo util for this
  const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  } as DynamoDBClientConfig);

  const dynamo = DynamoDBDocumentClient.from(client);

  try {
    const command = new ScanCommand({ TableName: 'Recipes' });
    const data = await dynamo.send(command);
    return (data.Items || []) as Recipe[];
  } catch (error) {
    console.error('Error fetching recipes from DynamoDB:', error);
    return [];
  }
}

const Card = ({ recipe }: { recipe: Recipe }) => (
  <Link
    href={`/recipe-blog/${recipe.recipeId}`}
    className="flex gap-2 p-4 text-white bg-bamboo-600 rounded-2xl hover:opacity-85"
  >
    <Image
      src={recipe.image}
      alt={recipe.imageAlt}
      width={150}
      height={130}
      className="rounded"
    />
    <h2 className="text-xl font-semibold italic">{recipe.title}</h2>
  </Link>
);
