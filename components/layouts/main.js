import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Digital Craftzman" />
        <meta name="author" content="John Dagger" />
        <meta name="author" content="Outsider Introspector" />
   

        {/* aqui abajo va el favicon */}
        <link rel="shortcut icon" href="/favicon.ico"  />
     
        <meta name="twitter:site" content="@human_codex" />
        <meta name="twitter:creator" content="@human_codex" />
        <meta name="twitter:image" content="/icon.png" />
        <meta property="og:site_name" content="human_codex" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <title>CREATOR AND COLLECTOR </title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
