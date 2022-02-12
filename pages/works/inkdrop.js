import { Container, Badge, List, ListItem } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { AspectRatio } from '@chakra-ui/react'
//FINDSPOTT

const Work = () => (
  <Layout title="findSpot">
    <Container>
      <Title>
        findSpot <Badge>2022-</Badge>
      </Title>
      <P>
        {/* A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $200k. */}
        App created with a focus on events and experiences between users, based
        on their locations and interests. findSpot offers a great variety of
        filters, email verification ,data sync support and QR code for online
        tickets.
      </P>
      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Expo,React Native,Redux ,Stripe , Google Maps , Figma , Styled
            Components
          </span>
        </ListItem>
        <ListItem>
          <Meta>Services</Meta>
          {/* <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link> */}
          <span>
            Brand Design , FrontEnd , U/XDesign, Shopping Cart and Payment
            configuration.
          </span>

          <AspectRatio maxW="800px" ratio={1}>
            <iframe
              title="find_spot"
              src="https://player.vimeo.com/video/675919665?h=652b5ecb8c"
              allowFullScreen
            />
          </AspectRatio>
        </ListItem>
      </List>

      <WorkImage src="/images/Portafolio/findSpot01.png" />
      <WorkImage src="/images/Portafolio/findSpot02.png" />
      <WorkImage src="/images/Portafolio/findSpot03.png" />
      <WorkImage src="/images/Portafolio/findSpot04.png" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
