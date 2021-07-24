importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//虚狗炮
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(self);
    var InitBuff = fightsystem.GetBuff(self,8888);

    var buff1 = fightsystem.GetBuff(target,11810);
    if((buff1 != null)&&(InitBuff.SaveData2%10 >= 3))
    {
       return UserSkillReturn.SKILL_LOSE;
    }

    else
    {
        fightsystem.Attack(self,target,script_damage,0,fv,timer);
        self.HP += fv.TargetLastDamage*0.4;
        fv.IncHP += fv.TargetLastDamage*0.4;
        var slowtime=1200;
        if((fv.IsHit == 1)&&(LogicTool.RandInt(0, 99)<25))
        {
            fightsystem.AddBuff(target,11810,timer,fv,slowtime,0);
        }
        InitBuff.SaveData2 += 1;
        return UserSkillReturn.SKILL_SUCCESS;
    }
}