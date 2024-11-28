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

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <div className=" bg-bamboo-400 w-full drop-shadow-2xl">
        <section className="container p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {recipe.title}
          </h1>
        </section>
      </div>
      <div className="container flex flex-col gap-4">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          width={500}
          height={300}
          className="w-full max-w-[500px] h-[250px] object-cover sm:h-[300px]"
        />
        <p>ingredients</p>
        <p>method</p>
      </div>
    </main>
  );
}

async function fetchRecipeById(recipeId: string) {
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
    return data.Item; // Return the recipe item
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
