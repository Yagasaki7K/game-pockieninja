importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //60%生命比例以下则增加攻击，越低增加越多
    if(self.HP<self.MaxHP*0.15)
    fightsystem.AddBuff(self,1102,timer,fv);
    else if(self.HP<self.MaxHP*0.3)
    fightsystem.AddBuff(self,1103,timer,fv);
    else if(self.HP<self.MaxHP*0.45)
    fightsystem.AddBuff(self,1104,timer,fv);
    else if(self.HP<self.MaxHP*0.6)
    fightsystem.AddBuff(self,1105,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}