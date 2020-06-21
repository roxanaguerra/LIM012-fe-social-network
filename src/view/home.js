export default () => {
  const viewHome = `
  <!-- Navbar -->
  <div class="top">
   <div class="bar theme-d2 left-align large">
    <a class="bar-item button hide-medium hide-large right padding-large hover-white large theme-d2" href="javascript:void(0);"><i class="fa fa-bars" id="navbar-mobile"></i></a>
    <a href="#/home" class="bar-item button padding-large theme-d4"><i class="fa fa-home margin-right"></i>DL</a>
    <a href="#/profile" class="bar-item button hide-small padding-large hover-white" title="Profile">
      <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" class="circle" style="height:23px;width:23px" alt="Avatar">
    </a>
    <a href="#/" class="bar-item button hide-small right padding-large hover-white" id="btn-cerrar" title="Log Out"><i class="fa fa-sign-out"></i></a>
   </div>
  </div>
  
  <!-- Navbar on small screens -->
    <div id="nav-links" class="bar-block theme-d2 hide hide-large hide-medium large">
    <a href="#/home" class="bar-item button padding-large">Home</a>
    <a href="#/profile" class="bar-item button padding-large">Profile</a>
    <a href="#" id="btn-cerrar" class="bar-item button padding-large">Log Out</a>
  </div>
  
  <!-- Page Container -->
  <div class="container content" style="max-width:1400px;margin-top:80px">
    <!-- The Grid -->
    <div class="row max-width">
      <!-- Left Column -->
      <div class="col m4 row-paddingl">
        
        <!-- Profile -->
        <div id="userInfo" class="card round white">

        <!-- End Profile -->  
        </div>
        <br>

      <!-- End Left Column -->
      </div>

      <!-- Right Column -->
      <div class="col m8">
        
        <!-- Post -->
        <div class="row-padding">
          <div class="col m12">
            <div class="card round white">
              <div class="container padding flex">
                <textarea class="border-radius padding theme-d3" id="input-post" cols="45" rows="4" style="width:600px" placeholder="What's on your mind?"></textarea>
              </div>
              <div class="hide divImg">
                <span class="deleteImg">❌</span>
                <img class="picPost"/>
              </div>
              <div class="containerProgress">
                <div class="progress"></div>
              </div>                               
              <div class="container padding theme-d5 ctn-optpost">               
                  <div class="button theme-d5">
                    <input accept="image/*" type="file" id="uploadImg" class="hide">
                    <label id="icon-photo" for="uploadImg">                    
                      <i class="fa fa-image" ></i>  Photo
                    </laber>                  
                  </div>
                  <div id="ctn-privacy" class="zero-padding inline-grid">
                    <button type="button" id="public-privacy" value="public" class="button theme-d5"><i class="fa fa-globe"></i>  Public</i></button>
                    <button type="button" id="private-privacy" value="private" class="hide button theme-d5"><i class="fa fa-lock"></i>  Private</button>
                  </div>
                  <button type="button" id="privacy" class="button-small theme-d5 zero-padding"><i class="fa fa-caret-down"></i></button>
                  <button type="button" id="btn-post" class="button theme-d1 right button-medium" >Post</button>     
              </div>
            </div>
          </div>
        </div>
        
        <div id="new-post" class=""></div>
        <!-- Post -->

      <!-- End Right Column -->
      </div>

    <!-- End Grid -->
    </div>

  <!-- End Page Container -->
  </div>        
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
