import React from 'react'
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  UnorderedList,
  ModalCloseButton
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub, IoArrowForward } from 'react-icons/io5'
import { RiTwitterXFill, RiInstagramFill } from 'react-icons/ri'
import { useState } from 'react'
import { send } from '@emailjs/browser'

// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => {
  const [state, setState] = useState({
    from_name: '',
    message: '',
    reply_to: ''
  })
  const [modalVisible, setModalVisible] = useState(false)
  // const form = useRef()∆
  const serviceID = '001'
  const templateID = 'template_c2rko7j'
  const userID = 'user_ls8ZeYTRPmkEIac4fZHVH'

  const handlePress = e => {
    e.preventDefault()
    send(serviceID, templateID, state, userID)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch(err => {
        console.log('FAILED...', err)
      })
    setModalVisible(true)
    setState({ from_name: '', message: '', reply_to: '' })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value
    })
  }
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Unlocking the Future: Your Web3, AI, and Mobile Solutions Architect
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              John Dagger
            </Heading>
            <p>(Artist / Developer / PR )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="180px"
              display="inline-block"
              borderRadius="full"
              src="/images/jack.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" fontSize={25} variant="section-title">
            Bio
          </Heading>

          <UnorderedList>
            <ListItem>Experienced freelancer & full-stack developer</ListItem>
            <ListItem>Dedicated to enhancing art and design through digital solutions</ListItem>
            <ListItem>Innovative problem solver from planning to coding</ListItem>
            <ListItem>Strong leadership and communication skills</ListItem>
            <ListItem>Passion for exploring new ideas in music , art and tech🔮</ListItem>
          </UnorderedList>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />}
                variant='outline'
                colorScheme="purple">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" fontSize={25} variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear> <br />
            Born in Bogotá, Colombia.
          </BioSection>
          <BioSection>
            <BioYear>2014-2019</BioYear> <br />
            Bachelors degree on Music Composition and Scripting at
            UNLP (Universidad Nacional de La Plata)
          </BioSection>
          <BioSection>
            <BioYear>2019-2023</BioYear> <br />
            Bachelors degree on Public Relations and Institutional Communication at  <Link color='teal.200' href='https://www.uade.edu.ar/acerca-de-uade/la-universidad/'>
              UADE
            </Link>  (Universidad Argentina de la Empresa)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear> <br />
            Completed Software Engineer - FullStack PERN on <Link color='teal.200' href='https://www.soyhenry.com/'>
              HENRY
            </Link>  
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear> <br />
            Web3 degree and entrepeneurship with AI on Platzi
          </BioSection>
          
          <BioSection>
            <BioYear>2022 - NOW</BioYear> <br />
            Creating a  <Link color='purple.500' href='https://vortex-lab.vercel.app/'>
              Vortex Lab Software Agency
            </Link>  
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear> <br />
            • Winner of <Link color='teal.200' href='https://cedalio.com/'>
              Cedalio
            </Link>  Track Hackathon on <Link color='teal.200' href='https://keywise.com.ar/'>
              King Of Devs
            </Link>  with  <Link color='purple.500' href='https://keywise.com.ar/'>
               KeyWise
            </Link>    
            <br />
            • Finalist on  <Link color='teal.200' href='https://info.algorand.foundation/es/algorand-foundation-labitconf-2023/'>
              Algorand
            </Link> Hackathon with a GreenOasis DAO 
            
          </BioSection>

        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Reach me for
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            ,Comunication and  Disruptive solutions on tech ...
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" fontSize={25} variant="section-title">
           NETWORKS 
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.instagram.com/humancodex"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiInstagramFill} />}
                >
                  /humancodex
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/humancodex"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @humancodex
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/human_codex" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiTwitterXFill} />}
                >
                  @human_codex
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/scorpiondev/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  /scorpiondev
                </Button>
              </Link>
            </ListItem>

          </List>

          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}
          {/* contact */}
          {/* CONTACT FORM  */}

          <Heading as="h2" fontSize={25} variant="section-title">
            Contact Me
          </Heading>

          <form>
            <FormControl onSubmit={handlePress}>
              <Stack spacing={3}>
                {' '}
                <Input
                  placeholder="Your name"
                  name="from_name"
                  value={state.from_name}
                  type="text"
                  onChange={handleChange}
                  size="sm"
                  variant="filled"
                />
                {/* <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={inputs.subject}
                  onChange={handleChange}
                  size="sm"
                  variant="filled"
                /> */}
                <Textarea
                  placeholder="message"
                  name="message"
                  value={state.message}
                  type="text"
                  onChange={handleChange}
                  variant="filled"
                />
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  placeholder="Your email"
                  name="reply_to"
                  value={state.reply_to}
                  type="text"
                  onChange={handleChange}
                  size="xs"
                  isRequired={true}
                  variant="filled"
                />
              </Stack>{' '}
            </FormControl>{' '}
            <Button
              mt={4}
              colorScheme="teal"
              variant="ghost"
              type="submit"
              rightIcon={<IoArrowForward />}
              onClick={handlePress}
            >
              Send
            </Button>
          </form>

          <Modal isOpen={modalVisible} o>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Email sent successfully!</ModalHeader>
              <ModalCloseButton />
              <ModalFooter>
                <Button
                  colorScheme="teal"
                  mr={3}
                  onClick={() => setModalVisible(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />}
                variant='outline'
                colorScheme="purple">
                Certifications
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
