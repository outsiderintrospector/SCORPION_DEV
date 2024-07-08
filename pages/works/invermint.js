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
  <Layout title="Invermint">
    <Container>
      <Title>
        Invermint  <Badge>2023</Badge> - <Badge>2024</Badge>
      </Title>
      <P>
        This is a Real state platform that allows to invest in real state properties with only 100$ usdt / usdc , my role was in backend and frontend development. Also setting up the infrastructure in AWS/ Vercel.
      </P>

      <UnorderedList my={4}>
        <ListItem>Connect your wallet</ListItem>
        <ListItem>See a property</ListItem>
        <ListItem>Fill the KYC form </ListItem>
        <ListItem>Buy your nft property </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Type of work</Meta>
          <span>Freelancing</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript,Solidity, NextJs, HardHat , EthersJs , CSS, Next js , Polygon , OpenPay , Thirdweb , Clerk auth </span>
        </ListItem>

        {/* <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jusebdev/whitelistDapp">
            github.com/jusebdev/whitelistDapp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}

        <ListItem>
          <Meta>see online</Meta>
          <Link href="https://invermint.app">
            LINK <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
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
  
      <WorkImage src="/images/Portafolio/invermint/1.webp" alt="invermint" />
      <WorkImage src="/images/Portafolio/invermint/2.webp" alt="invermint" />
      <WorkImage src="/images/Portafolio/invermint/3.webp" alt="invermint" />
      <WorkImage src="/images/Portafolio/invermint/4.webp" alt="invermint" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
