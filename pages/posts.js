import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import englishForDevs from '../public/images/Portafolio/certifications/diploma-ingles-avanzado-developers_8002475_1.jpg'
import solidity from '../public/images/Portafolio/certifications/diploma-solidity_8002487_1.jpg'
import web3Basics from '../public/images/Portafolio/certifications/diploma-fundamentos-web3_8002465_1.jpg'
import ethereumForDevs from '../public/images/Portafolio/certifications/diploma-ethereum-developers_8002448_1.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certifications 
      </Heading>

      
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Good English Skills "
            thumbnail={englishForDevs}
            // href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="Understanding of Solidity Language"
            thumbnail={solidity}
            // href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="The basics of web3"
            thumbnail={web3Basics}
            // href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="Ethereum DEV"
            thumbnail={ethereumForDevs}
            // href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
