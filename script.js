// Creating the ads using a template
function createWidget(name, imgUrl, branding, linkUrl) {
    const widget = document.getElementById('taboola');
    widget.insertAdjacentHTML('beforeend', `<a href=${linkUrl}>
    <div  class="element">
      <img class="image" src=${imgUrl} alt="Italian Trulli">
          <span class="item-title">${name}</span>
              <span class="branding">${branding}</span>
              </div>
</a>`)
}
// Initializing Taboola API recommendetaions widget
function initializeApi() {
    const url = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init";
    fetch(url).then(response => {
        if (!response.ok) {
            throw Error("Something went wrong");
        }
        return response.json();
    }).then(data => {
        console.log(data.list);
        for (let i = 0; i < data.list.length; i++) {
            createWidget(data.list[i].name, data.list[i].thumbnail[0].url, data.list[i].branding, data.list[i].url);
        }
    }).catch(error => {
        console.log(error);
    })
}


