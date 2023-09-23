chrome.runtime.onUpdateAvailable.addListener(()=>{
    console.log("update available");
})

chrome.runtime.onRestartRequired.addListener(()=>{
    console.log("update available");
})

chrome.runtime.requestUpdateCheck((test)=>{
    console.log(test);
})

// client side
if (import.meta.hot) {
    console.log("hot")
    import.meta.hot.on('my:greetings', (data) => {
      console.log(data.msg) // hello
    })
  }