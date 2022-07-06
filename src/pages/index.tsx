import type {NextPage} from 'next';
import {DoMore} from '../containers/home/doMore';
import {GitBlog} from '../containers/home/gitBlog';
import {BenefitsBlog} from '../containers/home/benefitsBlog';
import {ThanksBlog} from '../containers/home/thanksBlog';
import {ZeroFrictionBlog} from '../containers/home/zeroFrictionBlog';


const Home: NextPage = () => {
  return (
    <main>
      <DoMore/>
      <GitBlog/>
      <BenefitsBlog/>
      <ThanksBlog/>
      <ZeroFrictionBlog/>
    </main>


  );
};

export default Home;
