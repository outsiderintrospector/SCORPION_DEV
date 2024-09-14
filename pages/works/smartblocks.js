import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="CriptoDevs">
    <Container>
      <Title>
        SmartBlocks<Badge>2024</Badge>
      </Title>
      <P>
        The great landing page for a web3-Ai agency centered on beautiful design and user experience based on great animations and transitions with tailwind css and framer motion
      </P>



      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
          <span>mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, NextJs , tailwind </span>
        </ListItem>



        <ListItem>
          <Meta>see online</Meta>
          <Link href="https://www.smartblocks.tech">
            LINK <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/Portafolio/Smartblocks/1.webp" alt="smrt" />
      <WorkImage src="/images/Portafolio/Smartblocks/2.webp" alt="smrt" />
      <WorkImage src="/images/Portafolio/Smartblocks/3.webp" alt="smrt" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
