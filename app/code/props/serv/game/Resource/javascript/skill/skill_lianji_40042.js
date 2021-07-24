importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物连击
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = self.GetInitMaxMP()*0.15;
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
	{	if(LogicTool.RandInt(0, 100) < 60) 
		{
			var damage = fightsystem.GetDamage(self)*1.1; //原值为2
			fightsystem.Attack(self,target,damage,0,fv,timer);
			fv.AttackCount = 2;
		}
		else
		{
			var damage = fightsystem.GetDamage(self)*1.2; //原值为3
			fightsystem.Attack(self,target,damage,0,fv,timer);
			fv.AttackCount = 3;
		}
		self.MP -= MPCost;
		fv.DecMP = MPCost;
		return UserSkillReturn.SKILL_SUCCESS;
	}
}