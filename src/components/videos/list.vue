<template>
    <div class="wrap">
        <div class="container"  v-for="data in list" :key="data.cate._id">
            <div class="cate" >
                <div class="cate">
                    <h3>{{data.cate.name}}</h3>
                </div>
            </div>
            <div class="row" >
                <div class="col-sm-3" v-for="video in data.videos" :key="video._id">
                    <div class="wraper">
                        <div class="video-item">
                            <router-link :to="{ name: 'watch', params: { id: video._id }}"><img :src=" video.thumbnail"/></router-link>
                            <div class="video-item-name">
                                <router-link :to="{ name: 'watch', params: { id: video._id }}"><p>{{video.name}}</p></router-link>
                            </div>
                            </div>
                            <div class="video-item-view-date">
                                <span class="video-item-view">200000 lượt xem</span>
                            </div>
                            <div class="video-item-view-date">
                                <span class="video-item-view">{{video.author.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
         <!-- </div> -->
    </div>
</template>

<script>
import {getAll} from '../../services/video'

export default {
    data: () => ({
        list: []
    }),
    async created () {
        await this.getVideos()
    },
    methods: {
        async getVideos() {
            const data = await getAll()
            this.list = data.data.data
        }
    },

    
}
</script>
<style scoped>

.v-application a {
    color: black;
}
.cate {
    margin-bottom: 10px;
}
img {
    width: 250px;
}
</style>