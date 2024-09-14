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
        NEXUS<Badge>2024</Badge>
      </Title>
      <P>RENT YOUR NEXT EXPERIENCE</P>

      <UnorderedList my={4}>
        <ListItem>Look for your place </ListItem>
        <ListItem>Reserve and get rewards </ListItem>
        <ListItem>Get your experience </ListItem>
        <ListItem>Repeat </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Stripe Shopify Next.js TypeScript GraphQL</span>
        </ListItem>

        {/* <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jusebdev/whitelistDapp">
            github.com/jusebdev/whitelistDapp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      <WorkImage src="/images/Portafolio/nexus/1.png" alt="crypto" />

      <WorkImage src="/images/Portafolio/nexus/2.png" alt="crypto" />
      <WorkImage src="/images/Portafolio/nexus/3.png" alt="crypto" />

      <WorkImage src="/images/Portafolio/nexus/4.png" alt="crypto" />
      <WorkImage src="/images/Portafolio/nexus/5.png" alt="crypto" />

      <WorkImage src="/images/Portafolio/nexus/6.png" alt="crypto" />
      <WorkImage src="/images/Portafolio/nexus/7.png" alt="crypto" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
