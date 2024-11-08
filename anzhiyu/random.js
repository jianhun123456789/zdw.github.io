var posts=["2024/10/24/chacao/","2024/10/23/hello-world/","2024/10/24/mastergo/","2024/10/24/待送达/","2024/10/24/在俩一次/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };