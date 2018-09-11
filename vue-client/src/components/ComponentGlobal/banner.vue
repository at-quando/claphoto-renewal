<template>
  <div class="banner">
    <div id="cp-banner-style-1" class="cp-homev2-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul id="cp-banner-1">
              <li> <img src="../../assets/images/banner-img-1.jpg" alt="img">
                <div class="caption">
                  <div class="container">
                    <div class="holder">
                      <ul>
                        <li>2 months ago</li>
                        <li>Travel</li>
                      </ul>
                      <h1>Tips for running in heat and humidity
                        Beat the heat and stay cool!</h1>
                    </div>
                  </div>
                </div>
              </li>
              <li> <img src="../../assets/images/banner-img-2.jpg" alt="img">
                <div class="caption">
                  <div class="container">
                    <div class="holder">
                      <ul>
                        <li>1 day ago</li>
                        <li>Reading</li>
                      </ul>
                      <h1>Only People Who Read To Escape
                        Will Understand !</h1>
                    </div>
                  </div>
                </div>
              </li>
              <li> <img src="../../assets/images/banner-img-3.jpg" alt="img">
                <div class="caption">
                  <div class="container">
                    <div class="holder">
                      <ul>
                        <li>1 Hour ago</li>
                        <li>Food</li>
                      </ul>
                      <h1>Make the Ultimate Bacon <br>
                        Cheese Candy</h1>
                    </div>
                  </div>
                </div>
              </li>
              <li> <img src="../../assets/images/banner-img-4.jpg" alt="img">
                <div class="caption">
                  <div class="container">
                    <div class="holder">
                      <ul>
                        <li>2 hours ago</li>
                        <li>photography</li>
                      </ul>
                      <h1>How to Photograph Liquor Bottles
                        Using Dark Field Lighting !</h1>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      if ($('#cp-banner-1').length) {
        $('#cp-banner-1').bxSlider({
          infiniteLoop: true,
          auto: true,
          hideControlOnEnd: true
        });
      }
    }
  }
</script>
