import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import englishForDevs from '../public/images/Portafolio/certifications/diploma-ingles-avanzado-developers_8002475_1.jpg'
import solidity from '../public/images/Portafolio/certifications/diploma-solidity_8002487_1.jpg'
import web3Basics from '../public/images/Portafolio/certifications/diploma-fundamentos-web3_8002465_1.jpg'
import ethereumForDevs from '../public/images/Portafolio/certifications/diploma-ethereum-developers_8002448_1.jpg'
import AWScloud from "../public/images/Portafolio/certifications/aws.jpg"
import GPTchat from "../public/images/Portafolio/certifications/chatgpt.jpg"

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certifications 
      </Heading>

      
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="AWS"
            thumbnail={AWScloud}
          
          />
          <GridItem
            title="AI Fine-tuning"
            thumbnail={GPTchat}
         
          />
          <GridItem
            title="Good English Skills "
            thumbnail={englishForDevs}
            
          />
          <GridItem
            title="Understanding of Solidity Language"
            thumbnail={solidity}
            
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="The basics of web3"
            thumbnail={web3Basics}
          
          />
          <GridItem
            title="Ethereum DEV"
            thumbnail={ethereumForDevs}
          
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
