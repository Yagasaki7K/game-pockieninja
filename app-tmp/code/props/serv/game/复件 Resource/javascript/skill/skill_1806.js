importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//火龙，多段的火伤害 
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //中几率且蓝满足
    if((LogicTool.RandInt(0, 100) < 39)&&(self.MP >= 4.5*30)) 
    {
        var damage = 3*22;        //SkillAdd0
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 3;
        fv.DecMP = 4.5*30;
        if(fv.IsHit == 1)
        {
            fightsystem.AddBuff(target,1804,timer,fv);
            fightsystem.AddBuff(target,1804,timer,fv);
            fightsystem.AddBuff(target,1804,timer,fv);
        }
    }
    else if(self.MP >= 2.5*30)
    {
        var damage = 2*22;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 2;
        fv.DecMP = 2.5*30;
        if(fv.IsHit == 1)
        {
            fightsystem.AddBuff(target,1804,timer,fv);
            fightsystem.AddBuff(target,1804,timer,fv);
        }
    }
    else 
    {
        skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}