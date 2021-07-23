importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物酸液腐蚀
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var InitBuff = fightsystem.GetBuff(self,8888);
    var script_damage = fightsystem.GetDamage(self)*0.75;
	if(InitBuff.SaveData9%10/1<2)
	{				
		  fightsystem.Attack(self,target,script_damage,0,fv,timer);
 	      if(fv.IsHit == 1)
	      {
            	fightsystem.AddBuff(target,11904,timer,fv);
	      }
		
		InitBuff.SaveData9 += 1;
		return UserSkillReturn.SKILL_SUCCESS;
		
	}
	else
	{
   
		return UserSkillReturn.SKILL_LOSE;
	}
}