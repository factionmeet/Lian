<template>
  <dv-full-screen-container class="full">
    <div class="header1">
      <dv-decoration1 class="header-dv-decoration1" />
      <dv-decoration7 class="header-dv-decoration7">
        <dv-border-box8 class="header-dv-border-box8">
          <dv-decoration-3
            style="width: 30%; height: 90%"
            class="header-dv-decoration3"
          />
          <span class="context"> 农产品溯源 </span>
          <dv-decoration3
            class="header-dv-decoration3"
            style="width: 30%; height: 90%"
          />
        </dv-border-box8>
      </dv-decoration7>
      <dv-decoration1 />
    </div>
    <div class="containers">
      <div class="left">
        <dv-border-box7
          class="left-dv-border-box7"
          style="width: 100%; height: 30%"
        >
          <dv-percent-pond :config="config" style="width: 100%; height: 10%" />
          <div class="left-1">
            <div>
              <h2>今日流量</h2>
            </div>
            <div class="left-content">
              <img src="./流量.png" />
              <div class="left-content-1">{{ count.counter }}</div>
              <img src="./电源-copy.png" style="" @click="ToBack" />
            </div>
          </div>
        </dv-border-box7>
        <dv-border-box10 class="dv-border-box10" style="height: 55%">
          <dv-conical-column-chart
            :config="config3"
            style="width: 100%; height: 200px"
          />
        </dv-border-box10>
      </div>
      <div class="centers" style="flex: 0 1 40%">
        <!--          <dv-flyline-chart-enhanced :config="config4" style="width:100%;height:100%;" />-->
        <!-- <iframe src="1.html" id="allmap"></iframe> -->
        <dv-flyline-chart :config="config4" style="width:100%;height:100%;" />
      </div>
      <div class="right">
        <dv-scroll-board
          :config="config1"
          style="width: 100%; height: 100%; margin: 0 auto; border-radius: 50%"
        />
        <dv-border-box8 style="height: 49%" :reverse="true">
          <dv-capsule-chart
            :config="config2"
            style="width: 100%; height: 100%"
          />
        </dv-border-box8>
      </div>
    </div>
    <div class="base">
      <dv-border-box7 class="base-dv-border-box7" style="height: 100%">
        <div class="bottom-address">
          <botm address="南阳" money="120" id="1"></botm>
          <botm address="新乡" money="80" id="2"></botm>
          <botm address="西峡" money="78" id="3"></botm>
          <botm address="驻马店" money="66" id="4"></botm>
          <botm address="周口" money="55" id="5"></botm>
          <botm address="信阳" money="45" id="6"></botm>
          <botm address="漯河" money="29" id="7"></botm>
        </div>
      </dv-border-box7>
    </div>
  </dv-full-screen-container>
</template>

<script setup>
import Botm from "@views/dataScreen/bottom/botm.vue";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import mapImg from "./map.ab23082c.jpg";

const config = reactive({
  value: 66,
  localGradient: true,
});
const config1 = reactive({
  header: ["城市", "中转", "流向"],
  data: [
    ["周口", "漯河", "西峡"],
    ["南阳", "驻马店", "南阳"],
    ["西峡", "南阳", "驻马店"],
    ["驻马店", "西峡", "新乡"],
    ["新乡", "信阳", "信阳"],
    ["信阳", "周口", "漯河"],
    ["漯河", "新乡", "周口"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
  headerBGC: "#61268f",
  oddRowBGC: "#4f2378",
  evenRowBGC: "#58178d",
});
const config2 = reactive({
  data: [
    {
      name: "周口",
      value: 55,
    },
    {
      name: "南阳",
      value: 120,
    },
    {
      name: "西峡",
      value: 78,
    },
    {
      name: "驻马店",
      value: 66,
    },
    {
      name: "新乡",
      value: 80,
    },
    {
      name: "信阳",
      value: 45,
    },
    {
      name: "漯河",
      value: 29,
    },
  ],
  unit: "万元",
});
const config3 = reactive({
  data: [
    {
      name: "周口",
      value: 55,
    },
    {
      name: "南阳",
      value: 120,
    },
    {
      name: "西峡",
      value: 71,
    },
    {
      name: "驻马店",
      value: 66,
    },
    {
      name: "新乡",
      value: 80,
    },
    {
      name: "信阳",
      value: 35,
    },
    {
      name: "漯河",
      value: 15,
    },
  ],
  /*img: [
    top1,
    top2,
    top3,
    top4,
    top5,
    top6,
    top7,
  ],*/
});
const config4 = reactive({
  centerPoint: [0.48, 0.35],
  points: [
    {
      position: [0.52, 0.235],
      text: "新乡",
    },
    {
      position: [0.43, 0.29],
      text: "焦作",
    },
    {
      position: [0.59, 0.35],
      text: "开封",
    },
    {
      position: [0.53, 0.47],
      text: "许昌",
    },
    {
      position: [0.45, 0.54],
      text: "平顶山",
    },
    {
      position: [0.36, 0.38],
      text: "洛阳",
    },
    {
      position: [0.62, 0.55],
      text: "周口",
    },
    {
      position: [0.56, 0.56],
      text: "漯河",
    },
    {
      position: [0.37, 0.66],
      text: "南阳",
    },
    {
      position: [0.55, 0.81],
      text: "信阳",
    },
    {
      position: [0.55, 0.67],
      text: "驻马店",
    },
    {
      position: [0.37, 0.29],
      text: "济源",
    },
    {
      position: [0.2, 0.36],
      text: "三门峡",
    },
    {
      position: [0.76, 0.41],
      text: "商丘",
    },
    {
      position: [0.59, 0.18],
      text: "鹤壁",
    },
    {
      position: [0.68, 0.17],
      text: "濮阳",
    },
    {
      position: [0.59, 0.1],
      text: "安阳",
    },
  ],
  bgImgUrl: mapImg,
  /*centerPointImg: {
    url: mapCenterPoint,
  },
  pointsImg: {
    url: mapPoint,
  },*/
});
let count = reactive({
  counter: 8624796,
});
//console.log(count.counter++)
onMounted(() => {
  setInterval(() => {
    count.counter++;
  }, 1000);
});
const conf = reactive({
  lineWidth: 24,
  digitalFlopStyle: {
    fill: "pink",
  },
  data: [
    {
      name: "杭州",
      value: 98,
    },
    {
      name: "金华",
      value: 150,
    },
    {
      name: "宁波",
      value: 62,
    },
    {
      name: "太原",
      value: 54,
    },
  ],
});

let $router = useRouter();

function ToBack() {
  $router.push("/dashboard5");
}
</script>

<style lang="scss" scoped>
.full {
  background-color: rgb(42, 9, 73);
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .header1 {
    display: flex;
    flex: 0 1 10%;
    justify-content: space-evenly;
    margin: 10px;

    .header-dv-decoration1 {
      width: 100%;
      height: 100%;
      transform: rotate(180deg);
    }

    .header-dv-decoration7 {
      .header-dv-border-box8 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        align-items: center;

        .header-dv-decoration3 {
          display: inline-block;
        }

        .context {
          display: inline-block;
          font-size: 25px;
          vertical-align: middle;
          padding: 0 20px;
          color: aqua;
        }
      }
    }
  }

  .containers {
    display: flex;
    flex: 0 1 55%;
    justify-content: space-around;

    .left {
      display: flex;
      flex: 0 1 33%;
      flex-direction: column;
      justify-content: space-around;

      .left-dv-border-box7 {
        display: flex;
        flex: 0 1 30%;
        justify-content: center;
        align-items: center;

        .left-1 {
          flex-direction: row;

          h2 {
            color: #9cc71c;
            text-align: center;
          }

          .left-content {
            display: flex;
            justify-content: space-evenly;

            img {
              width: 90px;
              height: 90px;
            }

            .left-content-1 {
              color: white;
              font-size: 60px;
              text-align: center;
            }
          }
        }
      }

      //background-color: red;
    }

    .centers {
      margin-left: 15px;
      margin-bottom: 10px;
      margin-top: 10px;
      flex: 0 1 38%;
      display: flex;
      align-items: center;
      //background-color: #20a0ff;
      #allmap {
        height: 100%;
        width: 100%;
      }
    }

    .right {
      flex: 0 1 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 10px;

      .dv-border-box8 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .base {
    //flex: 0 1 35%;
    //background-color: yellow;
    flex: 0 1 20%;

    .base-dv-border-box7 {
      .bottom-address {
        display: flex;
        justify-items: center;
        justify-content: space-evenly;
        padding-top: 40px;
      }
    }
  }
}
</style>
