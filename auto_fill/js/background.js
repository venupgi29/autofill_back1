// background.js

function clearCache()
{
	var callback = function () {
		
           // Do something clever here once data has been removed.
		    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
			{
				var tab = tabs[0];
				chrome.tabs.update(tab.id, {url: newURL[1]});
			});
         };
         
         var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
         var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
         chrome.browsingData.remove({
           "since": oneWeekAgo
         }, {
           
           "cache": true,
           "indexedDB": true,
           "localStorage": true,
           "cookies": true,
         }, callback);
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.sendMessage(    tabId,                 changeInfo          );
}); 
/*
chrome.tabs.onActivated.addListener(function(activeInfo) {
 // how to fetch tab url using activeInfo.tabid
 chrome.tabs.get(activeInfo.tabId, function(tab){
    console.log(tab.url);
 });
}); */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	 
    if( request.message === "clearCache" ) {
		
				clearCache();
			}
		//location.href = newURL[1];	
		
  }
);