importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career1淘汰
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    if(target.HP*100 < target.MaxHP*21)
    {    
        if(LogicTool.RandInt(0, 100) < (target.DodgeMul-self.HitMul))
        {
            //被闪避
            fv.IsHit = 0;
            return UserSkillReturn.SKILL_SUCCESS;
        }    
        else
        {
            var script_tH = target.HP;
            fightsystem.Damage(target,script_tH);
            fv.Damage = script_tH;
            return UserSkillReturn.SKILL_SUCCESS;
        }
    }
    return UserSkillReturn.SKILL_LOSE;
}