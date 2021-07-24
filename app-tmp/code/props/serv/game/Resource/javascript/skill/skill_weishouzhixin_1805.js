importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//恢复蓝
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPRecover = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            MPRecover = 11;
            break;
        }
        case 2: 
        {
            MPRecover = 12;
            break;
        } 
        case 3: 
        {
            MPRecover = 13;
            break;
        } 
        case 4: 
        {
            MPRecover = 14;
            break;
        } 
        case 5: 
        {
            MPRecover = 15;
            break;
        }
        case 6: 
        {
            MPRecover = 88;
            break;
        }
        case 7: 
        {
            MPRecover = 99;
            break;
        } 
        case 8: 
        {
            MPRecover = 109;
            break;
        }
        case 9: 
        {
            MPRecover = 120;
            break;
        } 
        case 10: 
        {
            MPRecover = 130;
            break;
        }
        case 11: 
        {
            MPRecover = 141;
            break;
        } 
        case 12: 
        {
            MPRecover = 151;
            break;
        } 
        case 13: 
        {
            MPRecover = 162;
            break;
        }   
        default: ;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
        MPRecover = MPRecover*0.5;
    //检查buff
    var ClearBuff = fightsystem.GetRollBuff(self);
    if((ClearBuff != null)&&(ClearBuff.GetOverlying() == 1))
    {
        fightsystem.RemoveBuff(self,ClearBuff.GetBuffId(),timer,fv);  
        return UserSkillReturn.SKILL_SUCCESS;
    }
    else 
    {
       return UserSkillReturn.SKILL_LOSE;
    }
}