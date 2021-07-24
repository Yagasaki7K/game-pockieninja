importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//八卦掌
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var VesselDestroyTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            VesselDestroyTime = 1.5;
            break;
        }
        case 2: 
        {
            VesselDestroyTime = 1.5;
            break;
        } 
        case 3: 
        {
            VesselDestroyTime = 1.8;
            break;
        } 
        case 4: 
        {
            VesselDestroyTime = 1.9;
            break;
        } 
        case 5: 
        {
            VesselDestroyTime = 2;
            break;
        }
        case 6: 
        {
            VesselDestroyTime = 2.1;
            break;
        }
        case 7: 
        {
            VesselDestroyTime = 2.2;
            break;
        } 
        case 8: 
        {
            VesselDestroyTime = 2.3;
            break;
        }
        case 9: 
        {
            VesselDestroyTime = 2.4;
            break;
        } 
        case 10: 
        {
            VesselDestroyTime = 2.5;
            break;
        }
        case 11: 
        {
            VesselDestroyTime = 2.6;
            break;
        } 
        case 12: 
        {
            VesselDestroyTime = 2.7;
            break;
        }
        case 13: 
        {
            VesselDestroyTime = 2.8;
            break;
        }  
        default: ;
    }
    VesselDestroyTime = VesselDestroyTime * (1+0.01*LogicTool.ToInt(self.SkillAdd5*0.01));
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        VesselDestroyTime = VesselDestroyTime*0.3;
    }
    var BuffPeg = fightsystem.GetBuff(target,11840); 
    var AttackDamage = fightsystem.GetDamage(self)*VesselDestroyTime;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    if((fv.IsHit == 1)&&(BuffPeg == null))
    {
        var BuffVesselDestroy = fightsystem.GetBuff(target,11839);
        if(BuffVesselDestroy == null)
            fightsystem.AddBuff(target,11839,timer,fv,VesselDestroyTime,0);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}