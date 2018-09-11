<template>
  <div class="showroom">
    <div :class="et === false ? 'col-md-9 viewer' : 'col-md-12 viewer'" :style="{'background-image': `url(${cover.picture})`}">
      <div class="actions">
        <i class="fa fa-angle-left" @click="prevPic()"></i>
        <i class="fa fa-angle-right" @click="nextPic()"></i>
      </div>
      <i class="fa icon-close fa-external-link" @click="extendWindow"></i>
    </div>
    <transition name="slide-fade">
      <div v-if="et == false" class="col-md-3 bg-white">
        <header class="show-header">
          <a href="/">Back to home</a>
          <h1>Lens</h1>
          <p>Just another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
        </header>
        <section class="thumbnails">
          <article v-for="(item,index) of pics" :key="index" @click="changeCover(item, index)">
            <div class="thumbnail" data-position="left center" :style="{'background-image': `url(${item.picture})`}">
            </div>
          </article>
        </section>
        <footer id="footer">
          <span>&copy; The Classic Studio</span>
        </footer>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Showroom",
  data() {
    return {
      et: false,
      pos: 0,
      cover: {
        picture: '',
        title: '',
        desc: ''
      },
      pics: [{
  "id": 1,
  "picture": "http://dummyimage.com/170x195.png/ff4444/ffffff",
  "title": "5 Broken Cameras",
  "desc": "Ankylosis, left hand"
}, {
  "id": 2,
  "picture": "http://dummyimage.com/104x136.png/dddddd/000000",
  "title": "Adventurer: The Curse of the Midas Box, The",
  "desc": "Other complications of intestine transplant"
}, {
  "id": 3,
  "picture": "http://dummyimage.com/175x201.png/5fa2dd/ffffff",
  "title": "Patton Oswalt: Werewolves and Lollipops",
  "desc": "Unspecified complication of intestine transplant"
}, {
  "id": 4,
  "picture": "http://dummyimage.com/249x205.jpg/ff4444/ffffff",
  "title": "Viva Las Vegas",
  "desc": "Lesion of lateral popliteal nerve, bilateral lower limbs"
}, {
  "id": 5,
  "picture": "http://dummyimage.com/166x215.bmp/dddddd/000000",
  "title": "Long Ships, The",
  "desc": "Allergic contact dermatitis due to adhesives"
}, {
  "id": 6,
  "picture": "http://dummyimage.com/154x151.png/cc0000/ffffff",
  "title": "Dog Park",
  "desc": "Blister (nonthermal) of right upper arm"
}]
    };
  },
  mounted() {
    this.cover = this.pics[0]
  },
  methods: {
    extendWindow (el) {
      this.et = !this.et
      if (el.target.classList.contains('fa-external-link')) {
        el.target.classList.remove('fa-external-link')
        el.target.classList.add('fa-compress')
      } else {
        el.target.classList.add('fa-external-link')
        el.target.classList.remove('fa-compress')
      }
    },
    changeCover(item, index) {
      this.cover = item
      this.pos = index
    },
    nextPic() {
      this.cover = this.pics[++this.pos]
    },
    prevPic() {
      this.cover = this.pics[--this.pos]
    }
  }
};
</script>
<style lang="scss" scoped>
.show-header {
  text-align: right;
}
.bg-white {
  background-color: white;
  padding: 10px 20px;
  overflow: hidden;
  right: 0;
  height: 100vh;
}
.thumbnails {
  overflow: scroll;
  height: 70vh;
  article {
    width: 50%;
    float: left;
  }
  .thumbnail {
    padding: 0;
    height: 15vh;
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center; 
    margin-bottom: 0;
  }
}
.viewer {
  z-index: 1000;
  position: relative;
  padding: 0;
  height: 100vh;
  transition: 0.5s;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  .large-view {
    width: 100%;
  }
}
.fa {
  color: white;
  &:hover {
    color: #6d3b3b;
    transition: all 0.5s ease;
  }
}
.actions {
  width: 100%;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .fa-angle-left {
    float: left;
    font-size: 100px;
  }
  .fa-angle-right {
    float: right;
    font-size: 100px;
  }
}
.icon-close  {
  position: absolute;
  font-size: 50px;
  right: 10px;
  top: 10px;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}
</style>
