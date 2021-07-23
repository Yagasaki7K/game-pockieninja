importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物特殊反击
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    var MPCost = self.GetInitMaxMP()*0.11;
    if(self.MP < MPCost)
        return UserSkillReturn.SKILL_LOSE;
    else 
    {
        var MPValue = 1.2;  //原值为2.2
        var direct_damage = MPCost*MPValue;
        fightsystem.Attack(self,target,direct_damage,0,fv,timer);
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        return UserSkillReturn.SKILL_SUCCESS;
    }
}