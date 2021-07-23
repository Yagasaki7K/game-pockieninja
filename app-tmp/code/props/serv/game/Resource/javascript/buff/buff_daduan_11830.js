importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//打断
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.Pierce -= buff.SaveData;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.Pierce += buff.SaveData;
}