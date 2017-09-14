import Api from '@/services/Api'

export default {
  signup (credentials) {
    return Api().post('signup', credentials)
  },
  signin (credentials) {
    return Api().post('signin', credentials)
  }
}

// AuthService.signup({
//  email: 'test@test.com',
//  password: '12345'
// })
