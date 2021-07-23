function Reflush()
{
	window.document.location=window.document.location;
}
    
function SetExplorerTitle(s)
{
	window.document.title=s;
}

function addFavorite(tag,url){
         if(document.all){
                    window.external.addFavorite(url,tag);
         }
         else if(window.sidebar){
                   window.sidebar.addPanel(tag,url,'');       
         }
         else{
                   alert('请按下Ctrl+D来收藏本网站，谢谢');
         }
}