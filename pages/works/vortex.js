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
        CriptoDevs<Badge>2022</Badge>
      </Title>
      <P>
        This is an amazing BlockChain WhaitList!
      </P>

      <UnorderedList my={4}>
        <ListItem>Connect your wallet</ListItem>
        <ListItem>Request a ticket</ListItem>
        <ListItem>Receive a ticket in your account</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript,Solidity, NextJs, HardHat , EthersJs , CSS </span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jusebdev/whitelistDapp">
            github.com/jusebdev/whitelistDapp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>see online</Meta>
          <Link href="https://whitelist-dapp-five-sepia.vercel.app/">
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

      <WorkImage src="/images/Portafolio/cryptoDevs/2.png" alt="crypto" />

      <WorkImage src="/images/Portafolio/cryptoDevs/1.png" alt="crypto" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
