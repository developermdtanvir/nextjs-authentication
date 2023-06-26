
import Banner from '../components/Home/Banner';
import SectionTitle from '../components/SectionTitle';
async function Home() {

  return (
    <div>

      <Banner />
      <SectionTitle title={'order online'} subTitle={'from 11:00 am to 10:00pm'} />

    </div>
  )
}

export default Home;