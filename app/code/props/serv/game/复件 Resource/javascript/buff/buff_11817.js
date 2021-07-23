importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//针刺
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.ReboundAttach += 25;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.ReboundAttach -= 25;
}