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
    <Layout title="ByYou">
        <Container>
            <Title>
                By You<Badge>2022</Badge>
            </Title>
            <P>
                Coffee Delivery Store 
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>WEB</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Typescript ,Graph Ql, Postman , React, Jest , CSS , STRAPI  </span>
                </ListItem>

              

             
            </List>

            <WorkImage src="/images/Portafolio/ByYouApp/home.png" alt="coffee" />

            <WorkImage src="/images/Portafolio/ByYouApp/filter.png" alt="coffee" />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'