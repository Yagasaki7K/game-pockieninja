importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//创造再生
function OnUser(fightsystem, self, target, skill, fv,timer)
{      
    var script_a = self.MaxHP;   //SkillAdd9
    self.HP = script_a; 
    fv.IncHP = script_a;
    return UserSkillReturn.SKILL_SUCCESS;
}