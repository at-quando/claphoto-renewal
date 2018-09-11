<template>
  <div class="video">
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="row">
          <ul class="cp-extended-gallery gallery">
            <li class="col-md-6" v-for="(item,index) of videos" :key="index">
              <figure class="cp-gallery-thumb"> 
                <iframe :src="`https://www.facebook.com/plugins/video.php?href=${item.video}`" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                <figcaption>
                  <h2>Sunday <span>Lunch Dessert</span></h2>
                  <p>When Layla appears, she brings an eternal summer along.</p>
                  <a class="cp-zoom" href="images/gallery/eg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i></a> </figcaption>
              </figure>
              <div class="cp-gallery-content">
                <h3>{{item.title}}</h3>
                <ul class="cp-post-meta">
                  <li><a href="#">{{item.created_at |moment}}</a></li>
                  <li><a href="#">Life</a></li>
                </ul>
                <p>{{item.desc}} </p>
              </div>
            </li>
          </ul>
          <!-- <div class="cp-pagination pd-tp50">  
            <nav>
              <ul class="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a class="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Videos',
  data () {
    return {
      videos: []
    }
  },
  created () {
    this.$http.get(types.VIDEOS).then(res => {
      this.videos = res.body
      this.result = true
    })
  }
}
</script>
