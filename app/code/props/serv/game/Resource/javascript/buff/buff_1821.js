importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//雾
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.HitMul -= 50;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.HitMul += 50;
}