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
  <Layout title="Ikigai">
    <Container>
      <Title>
        Ikigai<Badge>2024</Badge>
      </Title>
      <P>
        A real state rental and buying store with features like filtering and content management system for posting properties and blogs.
      </P>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
          <span>Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Webflow, html ,jquery , CSS, finsweet , google api  </span>
        </ListItem>

      

        <ListItem>
          <Meta>see online</Meta>
          <Link href="https://www.ikigaiespacios.com">
            LINK <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

    

      <WorkImage src="/images/Portafolio/ikigai/1.webp" alt="ikigai  " />

      <WorkImage src="/images/Portafolio/ikigai/2.webp" alt="ikigai" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
