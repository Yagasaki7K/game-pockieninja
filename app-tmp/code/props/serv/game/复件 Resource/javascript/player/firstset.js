importPackage(com.d2.serv.game.Public);


function firstset(jssystem, self)
{
    var kernel = jssystem.GetKernel();

    //胜利宣言
    //kernel.SetString(self, PropertyIndex.WinString, "再强大的敌人也会被我打倒！");
    //失败宣言
    //kernel.SetString(self, PropertyIndex.LostString, "失败激励我要变得更强！");
    //个性宣言
    //kernel.SetString(self, PropertyIndex.SelfString, "我就是最强的小小忍者！");

    //初始送的石子
    kernel.SetInt(self, PropertyIndex.CapitalType0, 0);
    //初始送的金子
    kernel.SetInt(self, PropertyIndex.CapitalType2, 0);
    //初始送的礼券
    kernel.SetInt(self, PropertyIndex.CapitalType3, 0);

    //初始的体力便携包
    kernel.SetInt(self, PropertyIndex.HPContainerMax, 50);
    //初始的查克拉便携包
    kernel.SetInt(self, PropertyIndex.MPContainerMax, 30);
}

//最少人数国家奖励
function minnation(jssystem, self)
{
    var kernel = jssystem.GetKernel();
    //初始送的礼券
    kernel.SetInt(self, PropertyIndex.CapitalType3, 58);
}