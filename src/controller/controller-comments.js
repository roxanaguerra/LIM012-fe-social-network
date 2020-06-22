import { componentsView } from '../view/view-index.js'
import  { models } from '../model/model-index.js'

export default (viewPost) => {
    const userNow = models.authentication.currentUser();
    const allComments = models.comment.orderComment();
    

}
