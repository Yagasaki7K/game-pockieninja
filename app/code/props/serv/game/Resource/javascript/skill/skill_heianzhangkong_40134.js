importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//暗黑掌控
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(self)*0.8;
    var InitBuff = fightsystem.GetBuff(self,8888);

    //var buff1 = fightsystem.GetBuff(target,11907);
   // if(buff1 != null)
    //{
      // return UserSkillReturn.SKILL_LOSE;
    //}

        fightsystem.Attack(self,target,script_damage,0,fv,timer);
        if(fv.IsHit == 1)
        {
            fightsystem.AddBuff(target,11907,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
}