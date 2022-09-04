
//grabs the current url and pusts it in the url field
function grabCurrentUrl(tabs) {
    let tab = tabs[0]; // Safe to assume there will only be one result
    let currentUrl =  tab.url;
    document.getElementById("url").value = currentUrl;
}

function grabCurrentName(tabs) {
    let tab = tabs[0]
    let currentTitle = tab.title;
    document.getElementById("name").value = currentTitle;
}
  
browser.tabs.query({currentWindow: true, active: true}).then(grabCurrentUrl, console.error)

browser.tabs.query({currentWindow: true, active: true}).then(grabCurrentName, console.error)

function addedLink() {
    window.alert('Added to Hookie!');
}

