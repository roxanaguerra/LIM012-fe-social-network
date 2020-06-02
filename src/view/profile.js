export default () => {
  const viewProfile = `
<div class="mobile-container">
    <!-- Top Navigation Menu -->
    <div class="topnav">
    <a href="#home" class="active"><h1>DL</h1></a>
    <div id="nav-links">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#logout">Log out</a>
    </div>
        <a href="javascript:void(0);" class="icon" id="navbar-mobile">
        <img class="menu-bars" src="assets/nav-menu.png" alt="">
        </a>
    </div>
    <!------------------------------ Profile    ------------------------------>
    <!-- Cover photo -->
    <div class="ctn-cover-photo flex">
    <img src="assets/cover-photo.jpg" alt="">
        <!-- Profile image -->
    <div class="ctn-profile-photo">
        <img class="profile-photo border" src="assets/profile-photo.jpg" alt="">
    </div>
    </div>
        
    <!-- Description -->
    <div class="flex">
    <div class="description ctn flex column">
        <div>
        <a class="username" href="#">Ana Wong</a>
        <a class="option-edit" href="#"> <img src="assets/edit.png" alt=""></a>
        </div>
        <div class="ctn-description-text">
        <p>Amo viajar, me gusta la playa y quiero aprender a programar</p>
        </div>
    </div>
    </div>

    <!-- Post -->
    <div class="ctn-post flex column margin-top">
    <div class="ctn-create-post ctn flex">
        <div class="ctn-img-post">
        <img class="border" src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="ctn-txt-post flex">
        <textarea name="" id="" cols="38" rows="3.5" placeholder="What's on your mind?"></textarea>
        </div>  
    </div>
    <div class="ctn-post-status ctn flex">
        <div class="config-post flex">
        <img src="assets/camera.png" alt="">
        <p>Photo +</p>
        </div>
        <div class="config-post flex">
        <img src="assets/private.png" alt="">
        <p>Privacy</p>
        <span class="config-privacy flex">
            <img src="assets/option.png" alt="">
        </span>
        </div>
        <button class="btn-post">POST</button>
    </div>
    </div>
        
    <!-- Past photo posts -->
    <div class="ctn-photo-posted flex column margin-top">
    <div class="ctn start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img class="border" src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="">
            <a class="username" href="">Ana Wong</a>
            <div class="ctn-post-status flex">
            <span>23/05/2020</span>
            <span>18:00</span>
            </div>
        </div>
        <div class="config-post">
            <img src="assets/public.png" alt="">
            <span class="config-privacy">
            <img src="assets/option.png" alt="">
            </span>
        </div>
        </div>
    </div>
    <div class="flex">
        <img class="photo" src="assets/past-photo.jpg" alt="">
    </div>
    <div class="ctn-likes-comments ctn flex">
        <div class="likes flex">
        <img src="assets/like.png" alt="">
        <span>15 Likes</span>
        </div>
        <div class="comments flex">
        <img src="assets/comment.png" alt="">
        <span>5 comments</span>
        </div>
    </div>
    <div class="ctn flex ctn-create-comment  start">
        <div class="flex">
        <div class="ctn-img-post">
            <img src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="ctn-comment-txa">
            <textarea name="" id="" cols="37" rows="2" placeholder="Add a comment"></textarea>
        </div>
        </div> 
    </div>
    <div class="ctn ctn-last-comment start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img src="assets/comment-photo.jpg" alt="">
        </div>
        <div class="ctn-comment">
            <a class="username-comment" href="">Eva Alva</a>
            <div class="comment">
            <p class="">Increible vista me encantan los drones</p>                            
            </div>
        </div>
        </div>
    </div>  
    </div>

    <!-- Past text posts -->
    <div class="ctn-text-posted flex column margin-top">
    <div class="ctn start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img class="border" src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="">
            <a class="username" href="">Ana Wong</a>
            <div class="ctn-post-status flex">
            <span>23/05/2020</span>
            <span>18:00</span>
            </div>
        </div>
        <div class="config-post">
            <img src="assets/public.png" alt="">
            <span class="config-privacy">
            <img src="assets/option.png" alt="">
            </span>
        </div>
        </div>
    </div>
    <div class="txt-posted flex">
        <p>eatae illum, architecto commodi expedita eos velit voluptatem iusto vel.</p>
    </div>
    <div class="ctn-likes-comments ctn flex">
        <div class="likes flex">
        <img src="assets/like.png" alt="">
        <span>15 Likes</span>
        </div>
        <div class="comments flex">
        <img src="assets/comment.png" alt="">
        <span>5 comments</span>
        </div>
    </div>
    <div class="ctn flex ctn-create-comment  start">
        <div class="flex">
        <div class="ctn-img-post">
            <img src="assets/profile-photo.jpg" alt="">
        </div>
        <div class="ctn-comment-txa">
            <textarea name="" id="" cols="37" rows="2" placeholder="Add a comment"></textarea>
        </div>
        </div> 
    </div>
    <div class="ctn ctn-last-comment start">
        <div class="ctn-post-details flex">
        <div class="ctn-img-post">
            <img src="assets/comment-photo.jpg" alt="">
        </div>
        <div class="ctn-comment">
            <a class="username-comment" href="">Eva Alva</a>
            <div class="comment">
                <p class="">Increible vista me encantan los drones</p>                            
            </div>
        </div>
        </div>
    </div>            
    </div>
</div>
`;
  const divElemt = document.createElement('div');
  // divElemt.classList.add('position')
  divElemt.innerHTML = viewProfile;
  return divElemt;
};
