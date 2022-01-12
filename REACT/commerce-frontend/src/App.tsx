import {Box, Container, Link, Stack, StackDivider, Text} from '@chakra-ui/react'


function App() {
  

  return (
    <Container maxWidth="container.lg">
      <Stack spacing={0} divider={<StackDivider/>}>
        <Stack paddingY={6} alignItems="center" direction="row" justifyContent="space-between" alignItem="center">
          <Stack spacing={20} direction="row"  alignItem="center">
            <Text>Sneakers</Text>
            <Stack direction="row" color="gray.400" fontSize="sm" spacing={6}>
              <Link>Collections</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </Stack>
          </Stack>
          <Stack>parte de la der</Stack>
        </Stack>
        <Box marginTop={6}>Contenido</Box>
      </Stack>
    </Container>
  )
}

export default App
