import Navigation from './Navigation'

function Header({ isLoggedIn }) {
  return (
    <header style={{ marginBottom: '2rem' }}>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  )
}

export default Header
