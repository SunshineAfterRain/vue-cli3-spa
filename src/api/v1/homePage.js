import { service } from '../../utils/request'

class HomePage {
  static getHomePage(params) {
    return service.get('index.pbp?', { params })
  }
}
export default HomePage
