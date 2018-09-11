import FigureItem from './components/ComponentGlobal/figure-item.vue'
import FigureList from './components/ComponentGlobal/figure-list.vue'
import Navbar from './components/ComponentGlobal/navbar.vue'
import Banner from './components/ComponentGlobal/banner.vue'
import DropDown from './components/ComponentGlobal/drop-down.vue'
import Footer from './components/ComponentGlobal/footer.vue'
import Slider from './components/ComponentGlobal/slider.vue'
import Carousel from './components/ComponentGlobal/carousel.vue'
import PostPreview from './components/ComponentGlobal/post-preview.vue'
import ArticleItem from './components/ComponentGlobal/article-item.vue'
import ArticleList from './components/ComponentGlobal/article-list.vue'
import PriceItem from './components/ComponentGlobal/price-item'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('navbar', Navbar)
    Vue.component('banner', Banner)
    Vue.component('drop-down', DropDown)
    Vue.component('app-footer', Footer)
    Vue.component('prepost', PostPreview)
    Vue.component('slider', Slider)
    Vue.component('figure-item', FigureItem)
    Vue.component('figure-list', FigureList)
    Vue.component('carousel', Carousel)
    Vue.component('article-item', ArticleItem)
    Vue.component('article-list', ArticleList)
    Vue.component('price-item', PriceItem)
  }
}

export default GlobalComponents
