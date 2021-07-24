importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//大招, 噱头技能，不影响平衡性
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(FightObject self);
    if((LogicTool.RandInt(0, 100) >= target.DodgeMul - self.HitMul)
       &&(1)) //这里要把防御减免补掉
    {
        var script_ulti = LogicTool.RandInt(800,10000)/100*script_damage;
        fightsystem.Damage(target,script_ulti);
    }
    else
    {
        var script_skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,script_skill,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;       
}