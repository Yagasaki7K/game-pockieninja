importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//热血，伤害触发加速
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(self,1814,timer,fv);   //SkillAdd0影响buff等级    
    return UserSkillReturn.SKILL_SUCCESS;
}