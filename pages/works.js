import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import findSpot from '../public/images/Portafolio/FindSpot/findSpot.jpg'
import foodly from '../public/images/Portafolio/Foodly/landing.png'
import medium from '../public/images/Portafolio/medium/medium.png'
import cryptoDevs from '../public/images/Portafolio/cryptoDevs/2.png'
import byYou from '../public/images/Portafolio/ByYouApp/home.png'
import NFT from '../public/images/Portafolio/Nft-collection/home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h1" fontSize={40} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="medium"
            title="Medium"
            thumbnail={medium}
          >
            A Medium space clone made on Typescript and Sanity Cms with some surprises on content for devs
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="cryptoDevs" thumbnail={cryptoDevs} title="WhiteList-Dapp">
            A web3 page with the posibility of access to a certain amount of tickets for releasing features, first implementation of a smart contract
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Nft-collection" thumbnail={NFT} title="Nft-collection">
            There should only exist 20 Crypto Dev NFT's and each one of them should be unique.
            User's should be able to mint only 1 NFT with one transaction.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ByYou" thumbnail={byYou} title="E-Commerce">
            Coffee product page , went from mockup to integration with strapi endpoints , shopping cart and styles
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="findSpot" title="FindSpot" thumbnail={findSpot}>
           An app developed in React Native/Redux  with the purpose to connect unique people with unique events globally
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="foodly"
            title="FOODLY"
            thumbnail={foodly}
          >
         React/Redux Recipes web page with sorting options and creator mode 
          </WorkGridItem>
        </Section>

       
        {/* <Section delay={0.1}>
          <WorkGridItem id="ByYou" thumbnail={byYou} title="WhiteList-Dapp">
           Coffee product page , went from mockup to integration with strapi endpoints , shopping cart and styles 
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
