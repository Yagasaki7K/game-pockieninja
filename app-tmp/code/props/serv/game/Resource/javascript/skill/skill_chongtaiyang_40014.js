importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//太阳拳
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = 0;
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    { 
        var buff1 = fightsystem.GetBuff(target,11843);
        if(buff1 == null)
        {
            fightsystem.AddBuff(target,11843,timer,fv,8,0);
            self.MP -= MPCost;
            fv.DecMP = MPCost;
            return UserSkillReturn.SKILL_SUCCESS;
        }
        else
        {            
            return UserSkillReturn.SKILL_LOSE;
        }
    }
}