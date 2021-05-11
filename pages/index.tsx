import Image from 'next/Image';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="JDIYield">
    <div className="container">
      <div className="panel">
        <div className="logo">
          <Image src="/images/logo.svg" width="48" height="32"></Image>
        </div>
        <div className="title">
          <h4>Server is under</h4>
          <h4>Maintanance</h4>
        </div>
        <div className="body">
          <span className="text-body">We are currently working on our site to give you a better user experience.</span>
        </div>
        <div>
          <span className="text-body grey">www.jdiyield.com</span>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
