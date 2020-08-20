<template>
    <div class="watch">
        <div id="video-player-wrapper">
            <div class="video-player">
                <div id="player-area">
                    <iframe width="840" height="520"
                        :src="id">
                    </iframe>
                </div>
                
            </div>
            <hr>
            <div class="name-video">
                <p class="text-video">{{video.name}}</p>
            </div>
        </div>
        <div class="related-title">
            <div class="title">
                <strong>Related Videos</strong>
            </div>
            <div class="related-main">
                <div class="related">
                <div class="img">
                    <img style="width:200px; height:120;" src="https://nld.mediacdn.vn/thumb_w/540/2020/5/29/doi-hoa-tim-8-15907313395592061395682.png">
                </div>
                <div class="detail">
                        <div class="details">
                            <span> ten</span>
                        </div>
                        <div class="details">
                            <span> ten</span>
                        </div>
                    
                    </div>
                </div>
                
            </div>
            <div class="related-main">
                <div class="related">
                <div class="img">
                    <img style="width:200px; height:120;" src="https://nld.mediacdn.vn/thumb_w/540/2020/5/29/doi-hoa-tim-8-15907313395592061395682.png">
                </div>
                <div class="detail">
                        <div class="details">
                            <span> ten</span>
                        </div>
                        <div class="details">
                            <span> ten</span>
                        </div>
                    
                    </div>
                </div>
                
            </div>
            
            
        </div>
    </div>
    
</template>

<script>
import {getOne} from '../../services/video'

export default {
    data: () => ({
        video: null,
        id : 'https://www.youtube.com/embed/'
    }),
    async created () {
        await this.getVideos()
    },
    methods: {
        async getVideos() {
            const data = await getOne(this.$route.params.id)
            this.video = data.data
            this.id += this.video.youtubeId
            console.log(this.id)
        }
    },
    
}

</script>
<style scoped>
.watch {
    display: flex;
}
#video-player-wrapper {
    margin-left: 200px;
}
.related {
    display: flex;
    margin-left: 50px;
    margin-top: 20px;
}
.title {
    margin-left: 50px;
}
.detail {
    margin-left: 20px;

}
.related-title {
    margin-left: 100px;
    background-color: #F5F5F5;
}
.name-video {
    margin-top: 10px;
}
</style>