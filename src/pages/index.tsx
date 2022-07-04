import type {NextPage} from 'next';
import {DoMore} from '../containers/home/doMore';
import {GitBlog} from '../containers/home/gitBlog';
import {BenefitsBlog} from '../containers/home/benefitsBlog';

const Home: NextPage = () => {
  return (
    <main>
      <DoMore/>
      <GitBlog/>
      <BenefitsBlog/>
    </main>


  );
};

export default Home;
