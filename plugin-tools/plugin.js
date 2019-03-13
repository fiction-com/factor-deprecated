import $ from "jquery"
import _ from "lodash"
import axios from "axios"
import isNode from "detect-node"

export default Factor => {
  return new class {
    constructor() {
      // 3rd Party Utils
      Factor.$jquery = Factor.prototype.$jquery = $
      Factor.$lodash = Factor.prototype.$lodash = _

      // Request Utils
      Factor.$http = Factor.prototype.$http = axios

      Factor.$isNode = isNode
    }
  }()
}
