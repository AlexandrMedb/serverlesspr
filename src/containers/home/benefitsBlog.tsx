import styles from './benefitsBlog.module.scss';
import {Benefit} from '../../components/home/benefit';

export const BenefitsBlog=()=>{
  const benefit0:{ tittle: string, text: string }[]=[
    {tittle: 'Easily define your applications as functions and events.',
      text: 'Declare AWS Lambda functions and their triggers' +
          ' through simple abstract syntax in YAML.'},
    {tittle: 'Deploy infrastructure and code with a single command.',
      text: 'AWS Lambda functions, triggers & code will' +
          ' be deployed and wired together in the cloud, automatically.'},
    {tittle: 'Extend your use-cases and workflow with Plugins.',
      text: 'Install thousands of Serverless Framework Plugins to' +
          ' build new serverless use-cases on AWS and integrate with other tools.'},
  ];


  return <section className={styles.wrapper}>
    <Benefit
      title={'Develop.'}
      header={'Zero-friction serverless development.'}
      benefits={benefit0}
      img={<img src="/icons/test.svg" alt=""/>}/>
    <Benefit
      title={'Develop.'}
      header={'Zero-friction serverless development.'}
      benefits={benefit0}
      img={<img src="/icons/test.svg" alt=""/>}
      reverse={true}
    />
    <Benefit
      title={'Develop.'}
      header={'Zero-friction serverless development.'}
      benefits={benefit0}
      img={<img src="/icons/test.svg" alt=""/>}
    />
  </section>;
};
