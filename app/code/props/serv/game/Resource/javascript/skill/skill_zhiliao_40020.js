importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物治疗
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = self.GetInitMaxMP()*0.15;
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else if(self.HP == self.GetInitMaxHP())
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
    { 
        //var MPValue = 1.6;
        //var script_HP = MPCost*MPValue; 
		var script_HP = self.GetInitMaxHP()*0.1
        if(self.HP + script_HP > self.GetInitMaxHP())
            script_HP = self.GetInitMaxHP() - self.HP;
        self.HP += script_HP;
        fv.IncHP = script_HP;
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        return UserSkillReturn.SKILL_SUCCESS;
    }
}