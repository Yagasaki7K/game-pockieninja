importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//刀光
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPCost = self.MaxMP*0.17;
    if(self.MP < MPCost)
    {
        var script_skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,script_skill,timer,fv);
    }
    else 
    {
        //远程的干掉土流壁
        var BuffEarthWall = fightsystem.GetBuff(target,11824);
        if(BuffEarthWall != null)
            fightsystem.RemoveBuff(target,11824,timer,fv);

        //直接伤害
        var AttackDamage = fightsystem.GetDamage(self)*1.2; //原值为1.3
        fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
        self.MP -= MPCost;
        fv.DecMP = MPCost;     
        return UserSkillReturn.SKILL_SUCCESS;
    }
}
