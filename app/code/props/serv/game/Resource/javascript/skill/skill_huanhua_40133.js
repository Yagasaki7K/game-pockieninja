importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//幻化
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //var script_damage = fightsystem.GetDamage(self);
    var InitBuff = fightsystem.GetBuff(self,8888);
	var HPrecove = 0;
    //var buff1 = fightsystem.GetBuff(target,11906);
   // if(buff1 != null)
    //{
      // return UserSkillReturn.SKILL_LOSE;
    //}
    if((LogicTool.RandInt(1, 100) < 50)&&(InitBuff.SaveData2%100/10 < 5))
    {
		 HPrecove += self.MaxHP*0.15
         self.HP += HPrecove;
		 fv.IncHP = HPrecove;
         fightsystem.AddBuff(self,11906,timer,fv);
         InitBuff.SaveData2 += 10;
         return UserSkillReturn.SKILL_SUCCESS;
    }
	else
	{
		 return UserSkillReturn.SKILL_LOSE;
    }
}