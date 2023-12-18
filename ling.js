// 动画设置时间为三秒

//  创建雪花
function createFlower() {
  //定义一片雪花模板
  var flake = document.createElement("div");
  // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
  flake.innerHTML = "❆";
  flake.style.cssText = "position:absolute;color:#fff;";

  //获取页面的高度 相当于雪花下落结束时Y轴的位置
  var documentHieght = window.innerHeight;
  //获取页面的宽度，利用这个数来算出，雪花开始时left的值
  var documentWidth = window.innerWidth;

  //定义生成一片雪花的毫秒数
  var millisec = 1;
  //设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
  setInterval(function () {
    //页面加载之后，定时器就开始工作
    //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * documentWidth;

    //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
    var endLeft = Math.random() * documentWidth;

    //随机生成雪花大小
    var flakeSize = 5 + 20 * Math.random();

    //随机生成雪花下落持续时间
    var durationTime = 3000 + 7000 * Math.random();

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //克隆一个雪花模板
    var cloneFlake = flake.cloneNode(true);

    //第一次修改样式，定义克隆出来的雪花的样式
    cloneFlake.style.cssText += `
                        left: ${startLeft}px;
                        opacity: ${startOpacity};
                        font-size:${flakeSize}px;
                        top:-25px;
                              transition:${durationTime}ms;
                      `;

    //拼接到页面中
    document.querySelector(".ling-box").append(cloneFlake);

    //设置第二个定时器，一次性定时器，
    //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
    setTimeout(function () {
      //第二次修改样式
      cloneFlake.style.cssText += `
                                left: ${endLeft}px;
                                top:${documentHieght}px;
                                opacity:${endOpacity};
                            `;

      //设置第三个定时器，当雪花落下后，删除雪花。
      setTimeout(function () {
        cloneFlake.remove();
      }, durationTime);
    }, 0);
  }, millisec);
}

function createSantaClaus() {
  let santaDiv = document.createElement('div')
  santaDiv.className = 'santaClaus'
  document.querySelector(".ling-box").append(santaDiv);
  setTimeout(function () {
    santaDiv.className = 'santaClausGift'
    santaDiv.onclick = function () {
      let audio = document.querySelector("#christmas");
      audio.src = '1.mp3'
      audio.play()
      let message = document.createElement('div')
      message.className = 'message'
      message.innerText = '天天情人节'
      document.querySelector(".ling-box").append(message);
      playSongText()
    }
  }, 12000)
}


function playSongText() {
  let songArray = [{
      text: '...',
      time: 13000
    },
    {
      text: '有人说感情需要时间',
      time: 4000

    },
    {
      text: '有人说爱让人变卑微',
      time: 4000
    },
    {
      text: '我无所谓（爱你）',
      time: 2000
    },
    {
      text: '生平第一次心甘情愿（因为是你啦）',
      time: 5000
    },
    {
      text: '你不懂自己多耀眼（太beautiful了）',
      time: 4000
    },
    {
      text: '像阳光照亮了我的天（冬天有你都不冷了）',
      time: 4000
    },
    {
      text: '当你微笑了（多笑一笑我可老开心了）',
      time: 2000
    },
    {
      text: '忽然有春风 轻轻的吹（宝宝开心，我可真的是如沐春风）',
      time: 5000
    }, {
      text: '期待万分之一的机会',
      time: 4000
    }, {
      text: '能视线交会',
      time: 3000
    },
    {
      text: '甚至成为你眼中的特写（你的眼里是不是只有我呢）',
      time: 6000
    },
    {
      text: '爱着你 Loving you(爱你宝宝）',
      time: 4000
    }, {
      text: '想永远仰望的向日葵（你真的送过我向日葵哦）',
      time: 3000
    }, {
      text: '看飞机云，划过天（大连的天真的好美）',
      time: 4000
    }, {
      text: '那是我无线延伸的思念（有的时候真的好想你，不好意思说）',
      time: 4000
    }, {
      text: '爱着你 Loving you(爱你宝宝）',
      time: 3000
    }, {
      text: '寂寞终于写下完结篇（嘿嘿）',
      time: 4000
    }, {
      text: '想守护在 你身边（不要怕，有我呢）',
      time: 4000
    }, {
      text: '从今后 我们天天情人节（天天情人节哦）',
      time: 7000
    },{
      text: '留给你感动的时间（其实是歌曲中间了，嘿嘿）',
      time: 30000
    },
    {
      text: '期待万分之一的机会',
      time: 5000
    }, {
      text: '能视线交会',
      time: 3000
    }, {
      text: '甚至开始成为你严中的特写（你是我眼里的特写）',
      time: 6000
    }, {
      text: '爱着你 Loving you(爱你嗷）',
      time: 4000
    }, {
      text: '像永远仰望的向日葵（还要向日葵）',
      time: 3000
    }, {
      text: '看飞机云 划过天（看大海也不是不行）',
      time: 4000
    }, {
      text: '那是我无线延伸的思念（想你）',
      time: 4000
    }, 
    {
      text: '爱着你 Loving you(爱你嗷）',
      time: 3000
    },
    {
      text: '寂寞终于写下完结篇',
      time: 4000
    },
    {
      text: '想守护在你身边（我是你的骑士嘿嘿）',
      time: 4000
    },
    {
      text: '从今后我们天天情人节（每天和你在一起都是情人节）',
      time: 4000
    },
    {
      text: '爱着你 Loving you(爱你嗷）',
      time: 3000
    },
    {
      text: '像永远仰望的向日葵（我就像向日葵一样需要你这个阳光）',
      time: 4000
    },
    {
      text: '看飞机云 划过天（我相信我们会坐飞机去很多地方的）',
      time: 3000
    },
    {
      text: '那是我无线延伸的思念（你也想我对不对）',
      time: 5000
    },
    {
      text: '爱着你 每一天（每天都更爱你一点）',
      time: 3000
    },
    {
      text: '拥有你就拥有全世界（你就是我的全世界）',
      time: 3000
    },
    {
      text: '你完美了我的圆（有你才完整）',
      time: 4000
    },
    {
      text: '从今后我们天天情人节（天天情人节yes)',
      time: 2600
    },
     {
      text: '播放完咯',
      time: 3600
    },
  ]
  let index = 0
  let time = 2600
  let playSong = function () {
    setTimeout(function() {
      if (index < songArray.length) {
        document.querySelector('.message').innerText = songArray[index].text
        time = songArray[index].time
        index++
        playSong()
      } else {
        playSong = null
        let message = document.querySelector('.message')
        message.innerText = '点点左边的👈小狮子吧（嗷嗷嗷）'

        message.onclick = function (ele) {
          message.className += ' messages'
          message.innerText = '圣诞快乐，小小彤。感觉这首歌最能表达我的感情，就是想和你天天过情人节。如果这个世界上没有圣诞老人，那我就是你的圣诞老人。希望你天天开心。作为一个标准的理科男我对感情的表达可能没有那么细腻，但是我想说你就是我最好的圣诞礼物。有你每个圣诞节都不孤单（再也不用听陈奕迅的圣诞结了）'
          let lion = document.querySelector('.lion')
          lion.style.opacity = 1
          lion.className += ' wobble-hor-bottom'
          document.querySelector('.santaClausGift').style.opacity = 0
          document.querySelector('.plays').className = 'playTree'
        }
      }
    }, time)
  }
  playSong()

}

window.addEventListener("load", function () {
  // 设置动画定时器
  this.setTimeout(function () {
    // 清除开场元素
    document.querySelectorAll(".remove")[0].remove();
    document.querySelectorAll(".remove")[0].remove();
    document.querySelectorAll(".remove")[0].remove();
    document.querySelectorAll(".remove")[0].remove();

    let playDiv = document.createElement("div");
    playDiv.className = "play";
    playDiv.onclick = function () {
      playDiv.className = "plays";
      // 获取当前媒体元素
      let audio = document.querySelector("#christmas");
      audio.play();

      // 创建雪花飘落
      createFlower();

      // 创建圣诞老人
      createSantaClaus()

    };
    document.querySelector(".ling-box").append(playDiv);
  }, 3000);
});
