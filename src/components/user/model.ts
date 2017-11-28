const makeGetUsers = ({ effect, endpoints }) => () =>
  effect({ endpoint: endpoints.users.getUsers })

const makeGetUserProfile = ({ effect, endpoints }) => data =>
  effect({ endpoint: endpoints.users.getUserProfile, data })

export const makeModel = props => {
  const { connector } = props

  return {
    getUserProfile: makeGetUserProfile(connector),
    getUsers: makeGetUsers(connector),
  }
}