importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//攻击附加重伤状态，该状态下受到下一次伤害会增加，会被治疗解除
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var damage = fightsystem.GetDamage(self)*0.2;
    fightsystem.Attack(self,target,damage,0,fv,timer);
    if(fv.IsHit == 1)
    fightsystem.AddBuff(target,1202,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}