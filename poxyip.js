addEventListener(
  "fetch", event => {
      let url = new URL(event.request.url);
      url.hostname = "change.your.domain"; // 此处单引号里填写你的节点伪装域名 
      url.protocol = "https";
      let request = new Request(url, event.request);
      event.respondWith(
          fetch(request)
      )
  }
)
