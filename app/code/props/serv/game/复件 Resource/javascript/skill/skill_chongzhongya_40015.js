importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//重压
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var DizzyTime = 600;
    var PhysicalDamage = 0.75;
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(!(InitBuff.SaveData%10 < 3))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    var BuffPeg = fightsystem.GetBuff(target,11840);
    var AttackDamage = fightsystem.GetDamage(self)*PhysicalDamage;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    if((fv.IsHit == 1)&&(BuffPeg == null))
    {
        var BuffDizzy = fightsystem.GetBuff(target,11813);
        if(BuffDizzy != null)
        {
            fightsystem.RemoveBuff(target,11813,timer,fv);
        }
        fightsystem.AddBuff(target,11813,timer,fv,DizzyTime,0);
        InitBuff.SaveData += 1;
    }
    return UserSkillReturn.SKILL_SUCCESS;
}