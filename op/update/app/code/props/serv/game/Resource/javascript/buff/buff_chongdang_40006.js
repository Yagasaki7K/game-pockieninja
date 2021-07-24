importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物格挡
function OnAdd(fightsystem, self, buff, fv, timer)
{
    var BuffFangFan = fightsystem.GetBuff(self,11881);
    if(BuffFangFan != null)
    {
        buff.SaveData += 1;
    }
    self.CounterMul += buff.SaveData*10;
    self.Parry = 100;
    self.SaveSkillID = 40006;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.CounterMul -= buff.SaveData*10;
    self.Parry = 0;
    self.SaveSkillID = 0;
}



