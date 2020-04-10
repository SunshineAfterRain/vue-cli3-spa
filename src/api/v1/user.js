import { service } from '../../utils/request'

class User {
  static getToken(params) {
    return service.get('index.pbp?', { params })
  }
  static updateToken(params) {
    return service.post('index.pbp?', params)
  }
}
export default User
