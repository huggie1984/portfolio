import { Suspense } from 'react';

// async function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('Data Loaded Successfully!'), 3000);
//   });
// }

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataComponent />
    </Suspense>
  );
}

async function DataComponent() {
  // const data = await fetchData(); // Wait for data to resolve
  return <div>data</div>;
}
