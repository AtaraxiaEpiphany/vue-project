<script setup>
import { onMounted, ref } from 'vue'
import { getCategoryApi } from '@/apis/category'
import { getHomeBanner } from '@/apis/home'
/**
 * To access the router or the route inside the setup function, call the useRouter or useRoute
 */
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const categoryData = ref({})
const bannerUrls = ref()
const getCategory = async () => {
    const id = route.params.id
    const resp = await getCategoryApi(id)
    categoryData.value = resp.result
}
const getBanner = async () => {
    const resp = await getHomeBanner({
        distributionSite: '2'
    })
    bannerUrls.value = resp.result
}
onMounted(() => {
    getCategory()
    getBanner()
    console.log(`route ==> `, route)
    console.log(`router ==> `, router)
})
</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- 轮播图 -->
            <div class="home-banner">
                <el-carousel height="500px">
                    <el-carousel-item v-for="url in bannerUrls" :key="url.id">
                        <img :src="url.imgUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}

.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}
</style>