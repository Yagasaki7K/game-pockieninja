importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//替身术
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    self.Parry = 100;
    self.SaveSkillID = 3826;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{   
    //SaveData和SaveData1都记录了燃烧信息
    if(buff.SaveData == 1)
    {
        var FlameCount = 2;
        fightsystem.AddBuff(self,11804,timer,fv,buff.SaveData1,FlameCount);
    }
    self.Parry = 0;
    self.SaveSkillID = 0;
}



