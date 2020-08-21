<template>
    <div class="wraper">
        <div class="upload">
            <div class="inp">
                <v-text-field v-model="key" class="search" placeholder="Type a name"></v-text-field>
            </div>
            <div class="btn">
                <v-btn @click="crawlVideos" type="button" id="mobile-search-btn"><i class="fa fa-search"></i></v-btn>
            </div>
        </div>
        <div class="result" v-for="video in videos" :key="video.id.videoId">
            <div class="content">
                <div class="img">
                    <img style="width:200px; height:120;" :src="video.snippet.thumbnails.high.url">
                </div>
                <div class="detail">
                    <div class="detail">
                        <span> {{video.snippet.title}}</span>
                    </div>
                    <div class="detail">
                        <span> {{video.snippet.description}}</span>
                    </div>

                </div>
                
            </div>
            
        </div>
    </div>

</template>

<script>
import UserService from '../../services/auth.service'

export default {
    data: () => ({
        key: '',
        videos: []
    }),

    methods: {
        async crawlVideos() {
            const data = await UserService.crawl({key: this.key})
            this.videos = data.data.data.items
        }
    },
    
}
</script>
<style scoped>
.upload {
    display: flex;

}
.search {
    margin-left: 600px;
    width: 500px;
    height: 50px;
    border: 2px solid black;
    border-radius: 8px;
}
.btn {
    /* border: 2px solid slategrey; */
    margin-left: 15px;
}
.content {
    display: flex;
    width: 500px;
    height: 100%;
    margin-left: 600px;
    margin-top: 40px;
    background-color: aliceblue;

}
.result {
    width: 300px;
    height: 100%;
}
.detail {
    margin-left: 10px;
}

</style>