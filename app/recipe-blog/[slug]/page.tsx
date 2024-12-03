import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import { Recipe } from '@/types/recipe';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const recipe = await fetchRecipeById(slug);
  console.log('>>>>', recipe);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <main className="flex flex-col gap-8 items-center md:items-start">
      <div className=" bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {recipe.title}
          </h1>
        </section>
      </div>
      <div className="container flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Image
            src={recipe.image}
            alt={recipe.imageAlt}
            width={678}
            height={300}
            className="w-full max-w-[678px] h-[250px] object-cover"
          />

          <section>
            <h2 className="text-xl font-bold">Shopping list:</h2>
            <div>
              {recipe.ingredients.map((ingredient, index) => (
                <span key={index}>
                  {ingredient}
                  {index < recipe.ingredients.length - 1 && ', '}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-xl font-bold">Method:</h2>
          <ul className="flex flex-col gap-2">
            {recipe.steps.map((step, index) => (
              <li key={index}>
                <p>
                  <span className="font-bold"> Step {index + 1}, </span>
                  <span className="italic">{step}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

async function fetchRecipeById(recipeId: string): Promise<Recipe | null> {
  const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  } as DynamoDBClientConfig);

  const dynamo = DynamoDBDocumentClient.from(client);

  try {
    const command = new GetCommand({
      TableName: 'Recipes',
      Key: { recipeId }, // Assuming recipeId is the partition key
    });

    const data = await dynamo.send(command);
    return data.Item as Recipe; // Return the recipe item
  } catch (error) {
    console.error('Error fetching recipe from DynamoDB:', error);
    return null;
  }
}

export async function generateStaticParams() {
  const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  } as DynamoDBClientConfig);

  const dynamo = DynamoDBDocumentClient.from(client);

  try {
    const command = new ScanCommand({
      TableName: 'Recipes',
    });

    const data = await dynamo.send(command);
    const recipes = (data.Items || []) as Recipe[];

    return recipes.map((recipe: Recipe) => ({
      slug: recipe.recipeId,
    }));
  } catch (error) {
    console.error('Error fetching recipes for static paths:', error);
    return [];
  }
}
