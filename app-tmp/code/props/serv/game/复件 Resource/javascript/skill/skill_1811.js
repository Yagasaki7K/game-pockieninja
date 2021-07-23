importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//大玉螺旋丸，转化x%蓝到伤害，很高的破防几率
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_MPtoD = 0.3*self.MaxMP;
    if(self.MP < script_MPtoD)
    {    
        skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    self.NeglectDefAttach += 30;
    var damage = script_MPtoD;        
    fightsystem.Attack(self,target,damage,0,fv,timer);
    fv.DecMP = script_MPtoD; 
    self.NeglectDefAttach -= 30;
    return UserSkillReturn.SKILL_SUCCESS;
}