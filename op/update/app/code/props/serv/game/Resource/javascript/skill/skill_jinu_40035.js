importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物激怒
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    var MPCost = self.GetInitMaxMP()*0.12;
    if(self.MP < MPCost)
        return UserSkillReturn.SKILL_LOSE;
    else
    { 
        var buff1 = fightsystem.GetBuff(self,11803);
        if(buff1 == null)
        {
            fightsystem.AddBuff(self,11803,timer,fv);
        }
        else
        { 
            //不放了  
            var script_skill = fightsystem.ChangeSkill(skill,1,fv);
            return fightsystem.UserSkill(self,target,script_skill,timer,fv);
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost; 
        return UserSkillReturn.SKILL_SUCCESS;
    }
}