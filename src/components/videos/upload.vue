<template>
    <div class="wraper">
        <div class="upload">
            <div class="inp">
                <input class="search" placeholder="Type a name">
            </div>
            <div class="btn">
                <button type="button" id="mobile-search-btn"><i class="fa fa-search"></i></button>
            </div>
        </div>
        <div class="result">
            <div class="content">
                <div class="img">
                    <img style="width:200px; height:120;" src="https://nld.mediacdn.vn/thumb_w/540/2020/5/29/doi-hoa-tim-8-15907313395592061395682.png">
                </div>
                <div class="detail">
                    <div class="detail">
                        <span> ten</span>
                    </div>
                    <div class="detail">
                        <span> ten</span>
                    </div>
                    <div class="detail">
                        <span> ten</span>
                    </div>
                    <div class="detail">
                        <button style="color: red;"> upload</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>
export default {
    
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
    width: 300px;
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