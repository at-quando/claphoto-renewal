<template>
  <div id="cp-content-wrap" class="cp-content-wrap">
    <div class="container">
      <div class="row"> 
        <div class="col-md-12">
          <div class="cp-grid-isotope gallery">
            <div class="isotope items">
              <div class="item height2">
                <figure class="cp-hover-eff"> <img alt="img02" src="../assets/images/gallery/mgg-1.jpg">
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-2.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item height2">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-3.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-4.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-5.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item height2">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-6.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-7.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-8.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
              <div class="item">
                <figure class="cp-hover-eff"><img src="../assets/images/gallery/mgg-9.jpg" alt="" />
                  <figcaption>
                    <h3>Sunday Lunch <span>Dessert</span></h3>
                    <a href="images/gallery/mgg-1.jpg" data-rel="prettyPhoto"><i class="fa fa-search"></i> View Large</a> </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cp-pagination pd-tp80">  
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  mounted() {
    $('.js-item').addClass('item-type')
    if (this.$route.query.type == '1') {
      $('.item-1').addClass('active')
      $('.item-1').removeClass('item-type')
    } else if (this.$route.query.type == '2'){
      $('.item-2').addClass('active')
      $('.item-2').removeClass('item-type')
    } else if (this.$route.query.type == '3') {
      $('.item-3').addClass('active')
      $('.item-3').removeClass('item-type')
    } else if (this.$route.query.type == '4'){
      $('.item-4').addClass('active')
      $('.item-4').removeClass('item-type')
    }
    if ($(".cp-grid-isotope .isotope").length) {
      var $container = $('.cp-grid-isotope .isotope');
      $container.isotope({
        itemSelector: '.item',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: $container.width() / 12
        },
        layoutMode: 'masonry'
      });
      $(window).resize(function() {
        $container.isotope({
          masonry: {
            columnWidth: $container.width() / 12
          }
        });
      });
    }
  },
  beforeRouteLeave(to,from, next) {
    $('.js-item').removeClass('item-type')
    $('.js-item').removeClass('active')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list-type-picture {
  .active {
    display: block;
    width: 100% !important; 
    transition: 1s;
  }
  .item-type {
    display: none;
  }
}
</style>
