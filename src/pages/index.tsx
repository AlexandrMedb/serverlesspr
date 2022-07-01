import type {NextPage} from 'next';
import {DoMore} from '../containers/home/doMore';
import {GitBlog} from '../containers/home/gitBlog';

const Home: NextPage = () => {
  return (
    <main>
      <DoMore/>
      <GitBlog/>
    </main>


  );
};

export default Home;
