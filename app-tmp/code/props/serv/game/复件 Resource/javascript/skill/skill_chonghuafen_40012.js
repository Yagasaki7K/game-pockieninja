importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物花粉
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var buff1 = fightsystem.GetBuff(self,1212);
    if(buff1 == null)
    {
        fightsystem.AddBuff(target,1212,timer,fv,12,0);
        return UserSkillReturn.SKILL_SUCCESS;
    }
    else
    {            
        return UserSkillReturn.SKILL_LOSE;
    }
}