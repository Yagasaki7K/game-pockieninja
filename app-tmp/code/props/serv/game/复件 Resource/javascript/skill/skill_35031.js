importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//淘汰<17%血量上限
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    if(target.HP*100 < target.MaxHP*17)
    {        
        fightsystem.Damage(self,target,target.HP,0,fv,timer);
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;
}