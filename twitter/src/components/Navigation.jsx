import { Link } from 'react-router-dom'

const listStyle = {
  textTransform: 'capitalize',
}

const listItemStyle = {
  margin: '0 0.5rem',
}

function Navigation({ isLoggedIn }) {
  return (
    <nav role="list" style={listStyle}>
      <span style={listItemStyle}>
        <Link to="/" role="listitem">
          home
        </Link>
      </span>
      <span style={listItemStyle}>
        <Link to="/profile" role="listitem">
          profile
        </Link>
      </span>
      {!isLoggedIn && (
        <span style={listItemStyle}>
          <Link to="/auth" role="listitem">
            log in
          </Link>
        </span>
      )}
    </nav>
  )
}

export default Navigation
