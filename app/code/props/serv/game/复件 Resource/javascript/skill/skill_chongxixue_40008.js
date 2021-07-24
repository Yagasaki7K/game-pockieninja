importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//吸血
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    self.VampiricHP += 50; 
    var AttackDamage = fightsystem.GetDamage(self)*0.5;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    self.VampiricHP -= 50;
    return UserSkillReturn.SKILL_SUCCESS;
}