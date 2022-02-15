import {
  Container,
  Badge,
 
  List,
  ListItem,
 
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { AspectRatio } from '@chakra-ui/react'
// import { SlideFood } from './slideDataFoodly'
// import {ImageSlider} from './ImageSlider';


//FOODLY
const Work = () => (
  <Layout title="FOODLY">
    <Container>
      <Title>
        FOODLY <Badge>2021</Badge>
      </Title>
      <P>
        The Recipes web page was made to explore the best types of dishes ,with filters and
        sorting options . Foodly is perfect for anyone who wants to be healthy, I grouped on
        diet type and health score also the recipes can be created by the user.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>STACK</Meta>
          {/* <Link href="https://archive.craftz.dog/blog.odoruinu.net/2016/09/06/farewell-from-walknote/">
            音楽発掘アプリwalknoteクローズのお知らせ{' '}
            <ExternalLinkIcon mx="2px" />
          </Link> */}
          <span>
            React | Redux | Styled Components |Hooks | NodeJS | Express | API
            consumption| PostgreSQL
          </span>
        </ListItem>
        <ListItem>
          <Meta>SERVICES</Meta>
          <span>FrontEnd-BackEnd-Brand Design</span>
        </ListItem>
      </List>
      {/* 
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid> */}
      <AspectRatio maxW="800px" ratio={1}>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/675921106?h=5eb391ac0e"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        />
      </AspectRatio>
      {/* SLIDER */}
      {/* <Box w="100%" p={4} color="white">
        <ImageSlider slides={SlideFood} />
      </Box> */}
      {/* IMAGENES */}

      <WorkImage src="/images/Portafolio/foodly 01.png" alt="foodly" />
      <WorkImage src="/images/Portafolio/foodly02.png" alt="foodly" />
      <WorkImage src="/images/Portafolio/foodly03.png" alt="foodly" />
      <WorkImage src="/images/Portafolio/foodly04.png" alt="foodly" />
      <WorkImage src="/images/Portafolio/foodly05.png" alt="foodly" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
