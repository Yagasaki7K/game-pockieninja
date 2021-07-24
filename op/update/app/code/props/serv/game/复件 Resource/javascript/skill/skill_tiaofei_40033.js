importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物挑飞
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = self.GetInitMaxMP()*0.15;
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
	{	var script_damage = fightsystem.GetDamage(self)*1.2;  //原值为2.1
		fightsystem.Attack(self,target,script_damage,0,fv,timer);
		var Buff_mabishijian = self.MaxMP*target.AtkTime/12000;
		fightsystem.ChangeNextAtkTime(target,Buff_mabishijian);
		self.MP -= MPCost;
		fv.DecMP = MPCost;
		return UserSkillReturn.SKILL_SUCCESS;
	}
}