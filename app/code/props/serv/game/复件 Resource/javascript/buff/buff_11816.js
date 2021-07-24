importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//网，降低闪避率，攻击更容易被看穿
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    buff.LifeTime = buff.SaveData;
    self.DodgeMul -= 40;
    self.PriorityMul -= 20;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.DodgeMul += 40;
    self.PriorityMul += 20;
}