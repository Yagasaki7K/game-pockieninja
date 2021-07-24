importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//太阳拳
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = self.GetInitMaxMP()*0.23;
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
    { 
        var buff1 = fightsystem.GetBuff(target,11843);
        if(buff1 == null)
        {
            fightsystem.AddBuff(target,11843,timer,fv,480,0);
            self.MP -= MPCost;
            fv.DecMP = MPCost;
            return UserSkillReturn.SKILL_SUCCESS;
        }
        else
        {            
            var script_skill = fightsystem.ChangeSkill(skill,1,fv);
            return fightsystem.UserSkill(self,target,script_skill,timer,fv);
        }
    }
}