importPackage(com.d2.serv.game.Public);

// 已废弃
function OnUse(jssystem,self,user){
	var kernel = jssystem.GetKernel();
    var proindex = -1;
    var proindex1 = -1;
    var conf = kernel.GetConfig(self);

    if(conf == "i0")
    {	
	//肤色药丸
        proindex = PropertyIndex.SkinColor;
    }
    else if(conf == "i1")
    {	
	// 面饰药丸
         proindex = PropertyIndex.Face;
    }
    else if(conf == "i2")
    {
        //服装
        proindex = PropertyIndex.PlayerAvatarID;
        proindex1 = PropertyIndex.ClothingColor;
    }
    else if(conf == "i3")
    {
        //头发
        proindex = PropertyIndex.Hairstyle;
        proindex1 = PropertyIndex.HairstyleColor;
    }
    else if(conf == "i4")
    {
        //眉毛
        proindex = PropertyIndex.Brow;
        proindex1 = ProertyIndex.BrowColor;
    }
    else if(conf == "i5")
    {
        //眼睛
        proindex = PropertyIndex.Eye;
        proindex1 = PropertyIndex.EyeColor;
    }
    else if(conf == "i6")
    {
        //嘴巴
        proindex = PropertyIndex.Mouth;
    }
    else if(conf == "i7")
    {
        var levelsystem = jssystem.GetLevelSystem();
        levelsystem.AddExp(user,10000);
    }

    if(proindex != -1)
    {
        if(kernel.QueryInt(user,proindex) == 1)
        {
            kernel.SetInt(user,proindex,2);
        }
        else
        {
            kernel.SetInt(user,proindex,1);
        }
    }

    if(proindex1 != -1)
    {
        if(kernel.QueryInt(user,proindex1) == 1)
        {
            kernel.SetInt(user,proindex1,2);
        }
        else
        {
            kernel.SetInt(user,proindex1,1);
        }
    }
    
    kernel.IncInt(self, PropertyIndex.ItemFoldNum, -1);
}