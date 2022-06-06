import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import UsersTable from './components/UsersTable'
import AddUserForm from './components/AddUserForm'

function App() {
  return (
    <ThemeProvider breakpoints={['md']}>
      <Stack gap={3}>
        <Container>
          <Header />
          <UsersTable />
          <AddUserForm />
        </Container>
      </Stack>
    </ThemeProvider>
  )
}

export default App
