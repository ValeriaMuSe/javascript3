import { initRandom } from "./modules/random.js";
import { showJoke } from './modules/product.js'
import { detailsChangeBlack } from './modules/productBlackChange.js'
import { detailsChangeWhite } from './modules/productWhiteChange.js'
import { openModal, closeModal } from './modules/modal.js'

initRandom()
showJoke()
detailsChangeBlack()
detailsChangeWhite()
openModal()
closeModal()