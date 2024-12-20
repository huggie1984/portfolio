export const Home = ({ isActive }: { isActive: boolean }) => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={
      isActive
        ? 'dark:fill-bamboo-200 fill-bamboo-600'
        : 'dark:fill-bamboo-50 fill-bamboo-800'
    }
  >
    <path d="M2.168,10.555a1,1,0,0,1,.278-1.387l9-6a1,1,0,0,1,1.11,0l9,6A1,1,0,0,1,21,11H19v9a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V11H3l.019-.019A.981.981,0,0,1,2.168,10.555Z" />
  </svg>
);
