<template>
  <div>
    <banner/>
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="row"> 
          <div class="col-md-9">
            <article-list v-if="articles.length > 0" :type="0" :articles="articles"/>
          </div>
          <div class="col-md-3">
            <div class="sidebar"> 
              <div class="widget author-widget">
                <h3>About the Author</h3>
                <div class="widget-content"> <img src="images/author.jpg" alt="">
                  <p>It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.</p>
                </div>
              </div>
              <div class="widget newsletter-widget">
                <h3>Sign Up For NewLetter</h3>
                <div class="widget-content">
                  <p>Join the Newsletter Subscription for all updates and news.</p>
                  <form class="newsletter">
                    <input name="email" type="email"  placeholder="Enter email for subscription..." required>
                    <button type="submit"><i class="fa fa-arrow-right"></i></button>
                  </form>
                </div>
              </div>
              <div class="widget archives-widget">
                <h3>Archives</h3>
                <div class="widget-content">
                  <ul>
                    <li><a href=""> March 2015</a></li>
                    <li><a href=""> September 2015</a></li>
                    <li><a href=""> July 2015</a></li>
                    <li><a href=""> March 2015</a></li>
                    <li><a href=""> September 2015</a></li>
                    <li><a href=""> July 2015</a></li>
                  </ul>
                </div>
              </div>
              <div class="widget author-widget">
                <h3>Popular Image</h3>
                <div class="widget-content"> <img src="images/pop-img.jpg" alt=""> <a href="#" class="leave-comment"><i class="fa fa-comment-o"></i> No comments</a> </div>
              </div>
              <div class="widget featured-posts">
                <h3>Featured Posts</h3>
                <div class="widget-content">
                  <ul class="fpost-list">
                    <li> <img src="images/side-fp1.jpg" alt="neo">
                      <div class="cp-post-content">
                        <h5><a href="#">The Studio</a></h5>
                        <ul class="cp-post-meta">
                          <li><a href="#">Feb 23</a></li>
                          <li><a href="#">Travel</a></li>
                        </ul>
                      </div>
                    </li>
                    <li> <img src="images/side-fp2.jpg" alt="neo">
                      <div class="cp-post-content">
                        <h5><a href="#">The Studio</a></h5>
                        <ul class="cp-post-meta">
                          <li><a href="#">Feb 23</a></li>
                          <li><a href="#">Travel</a></li>
                        </ul>
                      </div>
                    </li>
                    <li> <img src="images/side-fp3.jpg" alt="neo">
                      <div class="cp-post-content">
                        <h5><a href="#">The Studio</a></h5>
                        <ul class="cp-post-meta">
                          <li><a href="#">Feb 23</a></li>
                          <li><a href="#">Travel</a></li>
                        </ul>
                      </div>
                    </li>
                    <li> <img src="images/side-fp4.jpg" alt="neo">
                      <div class="cp-post-content">
                        <h5><a href="#">The Studio</a></h5>
                        <ul class="cp-post-meta">
                          <li><a href="#">Feb 23</a></li>
                          <li><a href="#">Travel</a></li>
                        </ul>
                      </div>
                    </li>
                    <li> <img src="images/side-fp5.jpg" alt="neo">
                      <div class="cp-post-content">
                        <h5><a href="#">The Studio</a></h5>
                        <ul class="cp-post-meta">
                          <li><a href="#">Feb 23</a></li>
                          <li><a href="#">Travel</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="widget instagram-widget">
                <h3>Instagram</h3>
                <div class="widget-content">
                  <ul class="insta">
                    <li><img src="images/side-insta1.jpg" alt=""></li>
                    <li><img src="images/side-insta2.jpg" alt=""></li>
                    <li><img src="images/side-insta3.jpg" alt=""></li>
                    <li><img src="images/side-insta4.jpg" alt=""></li>
                    <li><img src="images/side-insta5.jpg" alt=""></li>
                    <li><img src="images/side-insta6.jpg" alt=""></li>
                    <li><img src="images/side-insta7.jpg" alt=""></li>
                    <li><img src="images/side-insta8.jpg" alt=""></li>
                    <li><img src="images/side-insta9.jpg" alt=""></li>
                  </ul>
                </div>
              </div>
              <div class="widget categories-widget">
                <h3>Archives</h3>
                <div class="widget-content">
                  <ul>
                    <li><a href=""> Design</a></li>
                    <li><a href=""> General</a></li>
                    <li><a href=""> Life Style</a></li>
                    <li><a href=""> Travel</a></li>
                    <li><a href=""> Wordpress</a></li>
                    <li><a href=""> Photography</a></li>
                  </ul>
                </div>
              </div>
              <div class="widget tags-widget">
                <h3>Tags</h3>
                <div class="widget-content">
                  <ul>
                    <li> <a href=""> Design</a> <a href=""> General</a> <a href=""> Life Style</a> <a href=""> Travel</a> <a href=""> Wordpress</a> <a href=""> Design</a> <a href=""> Photography</a> <a href=""> General</a> <a href=""> Life Style</a> <a href=""> Travel</a> </li>
                  </ul>
                </div>
              </div>
              <div class="widget latest-stories-widget">
                <h3>Latest Stories</h3>
                <div class="widget-content">
                  <ul class="ls-grid">
                    <li class="ls-left"> <img src="images/side-ls1.jpg" alt="neo"> <img src="images/side-ls2.jpg" alt="neo"> </li>
                    <li class="ls-right"> <img src="images/side-ls3.jpg" alt="neo"> <img src="images/side-ls4.jpg" alt="neo"> <img src="images/side-ls5.jpg" alt="neo"> <img src="images/side-ls6.jpg" alt="neo"> </li>
                  </ul>
                </div>
              </div>
              <div class="widget about-widget">
                <h3>About Theme</h3>
                <div class="about-content"> <strong>Facebook  .  Twitter</strong>
                  <p>NeoMag perspiciatis unde omnis iste natus error sit voltem lorem accum dolque ut, totam rem aperiam, eaque ipsa quae lorem ipsum inventore veritatis et quasi.</p>
                  <a href="#">Buy Now</a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Concept',
  data() {
    return {
      articles: []
    }
  },
  beforeCreate() {
    if (this.$route.fullPath == '/concept') {
      this.$http.get(types.LIST_CONCEPT).then(res => {
        this.articles = res.body
      })
    } else if (this.$route.fullPath == '/posing') {
      this.$http.get(types.LIST_POSING).then(res => {
        this.articles = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
